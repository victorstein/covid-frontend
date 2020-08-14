import React from 'react'
import Error from '../../error'

export default class ErrorComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
    console.log(error)
  }

  render () {
    if (this.state.hasError) {
      return <Error />
    }
    return this.props.children
  }
}
