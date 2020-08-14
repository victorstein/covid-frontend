import React, { Suspense } from 'react'
import SearchBar from '../components/serachBar'
import pages from '../pages'
import Loading from '../components/loading'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container my-10 px-5 mx-auto'>
      <div className='flex items-center flex-col my-5'>
        <h2 className='text-xl mb-2'>COVID-19 Statistics</h2>
        <SearchBar className='w-64' />
      </div>
      <div className='flex items-center flex-col my-5'>
        {
          <Suspense fallback={<Loading />}>
            <Switch>
              {
                pages.map((props) => (
                  <Route {...props} key={props.title} />
                ))
              }
            </Switch>
          </Suspense>
        }
      </div>
    </div>
  )
}

export default Main
