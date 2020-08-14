import React from 'react'
import { Card } from 'antd'
import { toLocaleString } from '../../utils'
import withErrorBoundary from '../hoc/errorHandler'

const renderTitle = (title, amount) => {
  return (
    <div className='flex justify-between'>
      <span className='capitalize'>{title}</span>
      <span>{toLocaleString(amount)}</span>
    </div>
  )
}

const CountryDetailsCard = (props) => {
  const data = {
    title: props.title || '',
    content: props.content || [{
      title: '',
      amount: ''
    }]
  }

  if (typeof props.title === 'object') {
    data.title = renderTitle(data.title.title, data.title.amount)
  }

  return (
    <Card title={data.title}>
      {
        data.content.map(({ title, amount }, i) => (
          <p key={i}>
            {title}: {
              !amount || typeof amount === 'number'
                ? toLocaleString(amount)
                : amount
            }
          </p>
        ))
      }
    </Card>
  )
}

export default withErrorBoundary(CountryDetailsCard)
