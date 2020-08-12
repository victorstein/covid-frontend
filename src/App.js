import React from 'react'
import { Button } from 'antd'

function App () {
  return (
    <div className='container'>
      <div className='md:flex bg-cyan rounded-lg p-6'>
        <img className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6' src='avatar.jpg' />
        <div className='text-center md:text-left'>
          <h2 className='text-lg res'>Erin Lindford</h2>
          <div className='text-purple-500'>Product Engineer</div>
          <div className='text-gray-600'>erinlindford@example.com</div>
          <div className='text-gray-600'>(555) 765-4321</div>
          <Button type='primary'>Button</Button>
        </div>
      </div>
    </div>
  )
}

export default App
