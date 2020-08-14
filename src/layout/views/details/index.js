import React, { useEffect } from 'react'
import withErrorBoundary from '../../../components/hoc/errorHandler'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY } from './queries'
import { useLocation, useHistory } from 'react-router-dom'
import { notification, Skeleton } from 'antd'
import CountryDetailsCard from '../../../components/countryDetailsCard'
import { format } from 'date-fns'

const Details = () => {
  const location = useLocation()
  const history = useHistory()
  const country = location.pathname.split('/')[2] || null
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { name: country }
  })

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

  let parsedData = null

  // Handle data
  if (data) {
    // No data
    if (!data.country.length) {
      history.push('/notFound')
    }
    parsedData = data.country[0]
  }

  return (
    <div className='my-5 w-full'>
      <div className='mb-5 text-center'>
        <Skeleton
          active
          className='center-skeleton'
          round
          title={{ width: '20%' }}
          paragraph={{ rows: 1, width: '10%' }}
          loading={loading}
        >
          <p className='text-3xl font-bold capitalize'>{country}</p>
          <p className='text-gray-500'>
            <span className='text-bold'>Last updated: </span>
            {
              parsedData
                ? format(new Date(parsedData.time), 'MM/dd/yyyy hh:mm aaaa')
                : ''
            }
          </p>
        </Skeleton>
      </div>
      {
        parsedData
          ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 col-gap-4 row-gap-4'>
              <CountryDetailsCard
                title='General'
                content={[
                  {
                    title: 'Continent',
                    amount: parsedData.continent
                  },
                  {
                    title: 'Population',
                    amount: parsedData.population
                  },
                  {
                    title: 'Country',
                    amount: parsedData.country
                  }
                ]}
              />
              <CountryDetailsCard
                title={{
                  title: 'Cases',
                  amount: parsedData.cases.total
                }}
                content={[
                  {
                    title: 'New',
                    amount: parsedData.cases.new
                  },
                  {
                    title: 'Active',
                    amount: parsedData.cases.active
                  },
                  {
                    title: 'Critical',
                    amount: parsedData.cases.critical
                  },
                  {
                    title: 'Recovered',
                    amount: parsedData.cases.recovered
                  }
                ]}
              />
              <CountryDetailsCard
                title={{
                  title: 'Deaths',
                  amount: parsedData.deaths.total
                }}
                content={[
                  {
                    title: 'New',
                    amount: parsedData.deaths.new
                  }
                ]}
              />
              <CountryDetailsCard
                title='Tests'
                content={[
                  {
                    title: 'Total',
                    amount: parsedData.tests.total
                  }
                ]}
              />
            </div>
          )
          : null
      }
    </div>
  )
}

export default withErrorBoundary(Details)
