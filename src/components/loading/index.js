import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../animations/loading.json'
import Animate from 'rc-animate'

const Loading = () => {
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
                    Loading COVID-19 worldwide data...
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

export default Loading
