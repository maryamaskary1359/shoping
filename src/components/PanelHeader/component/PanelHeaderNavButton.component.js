import React from 'react';
import HomeButton from './HomeButton.component';


const  NavButtons = () => {
  const style = {
    navButton: {
      display: 'flex',
      alignItems: 'center'
    }
  }

  return (
    <div style={style.navButton}>
      <HomeButton />
    </div>
  )
}

export default NavButtons
