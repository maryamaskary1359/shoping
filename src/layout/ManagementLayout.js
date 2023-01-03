import { Toolbar } from '@material-ui/core'
import React from 'react'
import {PanelHeader} from '../components/index.components'


const ManagementLayout = ({children}) => {
  return (

    <PanelHeader>
      <Toolbar />
    
      {children}
    </PanelHeader>

  )
}

export  {ManagementLayout}
