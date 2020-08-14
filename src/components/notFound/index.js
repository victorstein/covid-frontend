import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../animations/notFound.json'
import Animate from 'rc-animate'

const NotFound = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
    return () => setShow(false)
  }, [])

  return (
    <div className='flex items-center justify-center max-w-sm'>
      <Animate
        transitionName='fade'
      >
        {
          show
            ? (
              <div className='mx-auto'>
                <div>
                  <Lottie
                    options={defaultOptions}
                    width='100%'
                  />
                </div>
                <div>
                  <p className='text-center text-base'>
                    We were unable to find the requested country.
                  </p>
                </div>
              </div>
            )
            : null
        }
      </Animate>
    </div>
  )
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
}

export default NotFound
