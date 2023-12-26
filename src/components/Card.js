import './all.css'
import addToCartIcon from './add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
import { useContext } from 'react'
import DataContext from './GlobleContext'


function Card({data}) {
  const {updateCount}=useContext(DataContext)
  return (
    <div className=' card flex flex-col flex-grow bg-slate-100 p-3 s '>
        <div className="image self-center"><img  src={data.thumbnail} alt="card" />   </div>
        <div className="title font-bold self-center ">{data.title}</div>
        <div className="price ">$ : {data.price}</div>
        <div className="discountPercentage ">discount: {data.discountPercentage}%</div>
        <div className="rating ">rating :{data.rating} </div>
        <div className='self-cente bg-slate-300 flex justify-center hover:cursor-pointer ' onClick={()=>updateCount()} >  <img  className='' src={addToCartIcon} alt="add" /></div>
    </div>
  )
}

export default Card