import React, { useEffect, useState } from 'react'
import { notification, Skeleton, Collapse, Empty } from 'antd'
import { COUNTRY_STATISTICS } from './queries'
import { useQuery } from '@apollo/client'
import CountryCard from '../../../components/countryCard'
import NotFound from '../../../components/notFound'
import withErrorBoundary from '../../../components/hoc/errorHandler'

const { Panel } = Collapse

const Container = (props) => (
  <div className='my-8 w-full flex justify-center'>
    <Collapse
      ghost
      destroyInactivePanel
      className='w-full md:w-4/5'
    >
      {props.children}
    </Collapse>
  </div>
)

const General = () => {
  const [country, setCountry] = useState(null)
  const { data, loading, error } = useQuery(COUNTRY_STATISTICS, {
    variables: { name: country }
  })

  // Set the country in the variables
  useEffect(() => {
    if (data && data.mainStore.country) setCountry(data.mainStore.country)
  }, [data])

  // Handle errors
  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Error',
        description: error.graphQLErrors.map(({ message }) => message).toString(),
        duration: 0
      })
    }
  }, [error])

  // Handle loading state
  if (loading) {
    const array = new Array(5).fill(1)
    return (
      <Container>
        {
          array.map((panel, key) => (
            <Panel
              key={`loading-${key}`}
              disabled
              header={
                <Skeleton
                  active
                  round
                  paragraph={{ rows: 0 }}
                  title={{ width: '100%', size: 'small' }}
                />
              }
            />
          ))
        }
      </Container>
    )
  }

  // Handle no data
  if (data.country.length === 0) {
    return (
      <Empty
        image={<NotFound />}
      />
    )
  }

  // Handle data
  let filteredData = {}
  if (data) {
    const filter = data.country.reduce((acc, country) => {
      const continent = country.continent || 'Other'
      if (acc[continent]) {
        acc[continent].push(country)
      } else { acc[continent] = [country] }
      return acc
    }, {})

    const { All, ...rest } = filter
    filteredData = rest
  }

  return (
    <Container>
      {
        data
          ? (
            Object.keys(filteredData).map((continent, i) => (
              <Panel header={continent} key={i}>
                <div
                  style={{ maxHeight: '15rem', overflow: 'auto' }}
                  className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                >
                  {
                    filteredData[continent].map((country) => (
                      <CountryCard key={country.country} {...country} />
                    ))
                  }
                </div>
              </Panel>
            ))
          )
          : null
      }
    </Container>
  )
}

export default withErrorBoundary(General)
