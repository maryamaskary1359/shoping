import React from 'react'

 const  IconGenerator = (props) => {
  const style = {
    icon: {
      width: 20,
      height: 20,
      // marginLeft:1[]
    }
  }
  return (

    <i style={style.icon} className={`${props.fa_iconName}`} ></i>

  )
}

export default IconGenerator
