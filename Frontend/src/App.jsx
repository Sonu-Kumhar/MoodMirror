import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import { router } from './app.routes'
import { RouterProvider } from 'react-router'

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App