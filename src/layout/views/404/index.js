import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../animations/404.json'
import withErrorBoundary from '../../../components/hoc/errorHandler'

const notFoundPage = () => {
  return (
    <div>
      <div>
        <Lottie
          options={defaultOptions}
          width='100%'
        />
      </div>
      <div>
        <p className='text-center text-base'>
          Seems like theres nothing here. 404 not found.
        </p>
      </div>
    </div>
  )
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
}

export default withErrorBoundary(notFoundPage)
