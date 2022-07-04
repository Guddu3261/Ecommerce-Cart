import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { DEL} from '../Redux/actions/action';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { ADD,RMV } from '../Redux/actions/action';
const CardsDetails = () => {
const[data,setData]=useState([])
// console.log(data)
    // for id of data
    const {id}=useParams();
    // console.log(id)
    
    const getData=useSelector((state)=>state.cartreducer.carts)
//  console.log(getData);

//  for compare in cart data is matching by id and its display in cartDetails
const compare=()=>{
    let compareData=getData.filter((e)=>{
        return e.id==id
    })
    console.log(compareData)
    setData(compareData)
}
useEffect(()=>{
    compare()
},[id])
// for navigate 
const navigate=useNavigate();
// for add in + button
const sendToCart=(e)=>{
    // console.log(e)
    dispatch(ADD(e))

}

// for decrement i  - button
const rev_one=(iteam)=>{
    dispatch(RMV(iteam))
}

// for delete from cardDetails
const dispatch=useDispatch()
const del=(id)=>{
    dispatch(DEL(id))
    navigate('/')
}
// for total price 

  return (
    <>
        <div className='container mt-2'>
        <h2 className='text-center'>Add Item to cart</h2>
        <section className='container mt-3'>
       <div className='iteamsdetails'>   
            {
                data.map((item)=>{
                    return(
                      <>
                      <div className='items_img'>
                       <img src={item.imgdata} alt='' />
                       </div>
                       <div className='details'>
                           <Table>
                           <tr>
                               <td>
                                   <p> <strong>Restaurant</strong>: {item.rname}</p>
                                   <p> <strong>Price</strong>: ₹ {item.price}</p>
                                   <p> <strong>Dishes</strong>: {item.address} </p>
                                   <p> <strong>Total</strong>: ₹  {item.price * item.qnty} </p>
                                   <div
                                   className='mt-5 d-flex justify-content-between align-item-center '
                                   style={{width:100, crusor:'pointer', background:'#dddd'}}
                                   >
                                     <span style={{fontSize:25}} onClick={item.qnty <=1 ? ()=>del(item.id): ()=>rev_one(item.id)} >-</span>
                                     <span style={{fontSize:22}} >{item.qnty}</span>
                                     <span style={{fontSize:25}} onClick={()=>sendToCart(item)} >+</span>
                                   </div>
                               </td>
                               <td>
                                   <p> <strong>Rating :</strong> <span style={{background:'green', padding:'2px,5px', borderRadius:'3px'}} >{item.rating}</span> </p>
                                   <p> <strong> Order Rating :</strong> <span style={{padding:'2px,5px',borderRadius:'5px'}} >{item.somedata}</span>
                                   </p>
                                   <p onClick={()=>del(item.id)}>
                                       <strong>Remove: <i className='fas fa-trash' style={{color:'red', padding:'5px'}} ></i> </strong>
                                   </p>
                               </td>
                           </tr>
                           </Table>
                       </div>
                      </>
                    )
                })
            }
               
            </div>
        </section>

        </div>
    </>
  )
}

export default CardsDetails;