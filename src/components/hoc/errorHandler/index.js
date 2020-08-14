import React, { Component } from 'react'
import ErrorComponent from './errorBoundary'

export default function withErrorBoundary (HocComponent) {
  return class extends Component {
    render () {
      return (
        <ErrorComponent>
          <HocComponent {...this.props} />
        </ErrorComponent>
      )
    }
  }
}
