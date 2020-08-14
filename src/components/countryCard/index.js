import React from 'react'
import { Card, Button } from 'antd'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'

const CountryCard = (props) => {
  const history = useHistory()

  const {
    country = '',
    cases: { total },
    time: lastUpdate = new Date(),
    population = 0
  } = props

  return (
    <Card
      title={country}
      actions={[
        <Button
          key={0}
          onClick={() => history.push(`/country/${country}`)}
        >
          View More Details
        </Button>
      ]}
    >
      <p>
        <span className='text-red-600'>Total cases: </span>
        {Number(total).toLocaleString()}
      </p>
      <p>
        <span className='text-green-600 font-medium'>Population: </span>
        {Number(population).toLocaleString()}
      </p>
      <p>
        <span className='font-medium'>Last Update: </span>
        {format(new Date(lastUpdate), 'MM/dd/yyyy hh:mm aaaa')}
      </p>
    </Card>
  )
}

export default CountryCard
