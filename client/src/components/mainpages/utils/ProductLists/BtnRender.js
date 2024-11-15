import React from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'

const BtnRender = ({product}) => {

    const state = useContext(GlobalState)
  const [isAdmin] = state.UserAPI.isAdmin
  const addCart = state.UserAPI.addCart

  const deleteProduct= async(item)=>{
   const res= await axios.delete(`/api/products/${item}`)
  }

  return (
    <div className='row_btn'>
    
   <>
      <Link id='btn_view' to={`detail/${product._id}`}>
       Details
      </Link>
      </>    

</div>
  )
}

export default BtnRender
