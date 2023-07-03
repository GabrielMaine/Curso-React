import React from 'react'
import img from './compra.png'

const CardWidget = () => {
  return (
    <div>
        <img src={img} alt="carrito" height='60px' width='60px' />
        <span>0</span>
    </div>
  )
}

export default CardWidget