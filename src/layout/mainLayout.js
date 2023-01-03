import React from 'react'
import {StoreHeader} from '../components/index.components'

const MainLayout = (props)=> {
  return (
    <div>
      <StoreHeader >
        {props.children}
      </StoreHeader>
    </div>
  )
}

export {MainLayout}
