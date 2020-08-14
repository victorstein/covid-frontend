import React from 'react'

const General = React.lazy(() => import('./layout/views/general'))
const Details = React.lazy(() => import('./layout/views/details'))
const NotFound = React.lazy(() => import('./layout/views/404'))

export default [
  {
    title: 'General',
    component: General,
    path: '/',
    exact: true
  },
  {
    title: 'Details',
    component: Details,
    path: '/country/:country'
  },
  {
    title: '404',
    component: NotFound
  }
]
