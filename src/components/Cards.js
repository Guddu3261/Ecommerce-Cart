import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from './CardsData';
import {useDispatch} from 'react-redux';
import { ADD } from '../Redux/actions/action';

const Cards = () => {
const[data,setData]=useState(CardsData);
// console.log(data)

const dispatch=useDispatch();

const sendToCart=(e)=>{
    // console.log(e)
    dispatch(ADD(e))

}
  return (
    <div className="container mt-3">
        <h2 className="text-center">Add To Cart</h2>
        <div className='row d-flex justify-content-center align-item-center'>
        {
            data.map((item,id)=>{
                return(
                    <Card style={{ width: '22rem', border:'none' }} className='mx-3 mt-3 card_style' >
                  <Card.Img variant="top" src={item.imgdata} style={{height:'16rem'}} className='mt-3' />
                  <Card.Body>
                <Card.Title>{item.rname}</Card.Title>
                <Card.Text>
                price:₹{item.price}
               </Card.Text>
                <div classname=' button_div'>
                <Button variant="primary" className='col-lg-12'
                onClick={()=>sendToCart(item)}
                >Add to Cart</Button>
                </div>
               </Card.Body>
               </Card>
                )
            })
        }
        </div>
    </div>
  )
}

export default Cards