import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../animations/error.json'
import Animate from 'rc-animate'

const Error = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
    return () => setShow(false)
  }, [])

  return (
    <div className='d-flex justify-center items-center'>
      <div>
        <Animate
          transitionName='fade'
        >
          {
            show
              ? (
                <Lottie
                  options={defaultOptions}
                  width='80%'
                />
              )
              : null
          }
        </Animate>
      </div>
      <div className='text-center text-lg max-w-md mx-auto'>
        There was an error while loading the data. Please try again later.
      </div>
    </div>
  )
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
}

export default Error
