import React, { useEffect } from 'react'
import { AutoComplete, Spin, notification, Input } from 'antd'
import { useQuery } from '@apollo/client'
import { COUNTRY_NAMES } from './queries'
import { country } from '../../stores/mainStore'
import withErrorBoundary from '../hoc/errorHandler'
import { useHistory } from 'react-router-dom'

const SearchBar = (props) => {
  const history = useHistory()
  let { loading, error, data } = useQuery(COUNTRY_NAMES)

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Error',
        description: error.graphQLErrors.map(({ message }) => message).toString(),
        className: 'max-w-full'
      })
    }
  }, [error])

  if (data) {
    data = data
      .countryNames
      .map((country) => ({ value: country }))
  }

  return (
    <Spin spinning={loading}>
      <AutoComplete
        options={data}

        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        onSelect={(inputValue) => {
          history.push('/')
          country(inputValue)
        }}
      >
        <Input.Search
          size='large'
          placeholder='Country Name'
          enterButton
          onSearch={(inputValue) => {
            history.push('/')
            country(inputValue)
          }}
        />
      </AutoComplete>
    </Spin>
  )
}
export default withErrorBoundary(SearchBar)
