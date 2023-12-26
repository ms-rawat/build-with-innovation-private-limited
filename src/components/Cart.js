import React, { useContext } from 'react'
import icon from './shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
import DataContext from './GlobleContext'
function Cart() {
    const {Count} = useContext(DataContext)
  return (
    <div className='flex flex-row -mt-2'>
        <img  className='w-10 ' src={icon} alt="cart" />
        <div className='bg-yellow-300 rounded-full w-7 -ms-3 -mt-2  h-6 text-center'>{Count}</div>
    </div>
  )
}

export default Cart