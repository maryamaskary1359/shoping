import React from 'react'
import { ListMenu } from '../../../components/index.components';
import { CardGroupContainer } from './component/CardGroupContainer.component';

const MainCustomers = () => {


  return (
    <ListMenu >
      <section >

        <CardGroupContainer field='printed' />
        <CardGroupContainer field='music' />
        <CardGroupContainer field='carpet' />
        <CardGroupContainer field='handicrafts' />


      </section>
    </ListMenu>

  )

}


export { MainCustomers }
