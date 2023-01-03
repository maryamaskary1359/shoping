import React from 'react'
import { ErrorBoundry } from './components/index.components'
import { Routes } from './router/Routes'

const App = () => {
  return (
    <div>
      <ErrorBoundry>
      <Routes />

      </ErrorBoundry>
    </div>
  )
}

export default App


