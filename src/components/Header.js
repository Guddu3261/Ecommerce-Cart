import React,{useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch} from 'react-redux';
import { DEL} from '../Redux/actions/action';
import {useSelector} from 'react-redux';
const Header = () => {
  const[totalprice,setTotalPrice]=useState(0)
  // for Add data in cart
 const getData=useSelector((state)=>state.cartreducer.carts)
//  console.log(getData);
    // for badage in cart
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick=(event)=>{
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
// for delete from cart
  const dispatch=useDispatch();
  const del=(id)=>{
    dispatch((DEL(id)))
  }
   // for total price
   const total=()=>{
    let price=0;
    getData.map((item)=>{
      price=item.price+price
    })
    setTotalPrice(price)
  }
  useEffect(()=>{
    total();
  },[total])
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink to="/" className='text-decoration-none text-light mx-4' >Add to Cart</NavLink>
    <Nav className="me-auto">
      <NavLink to="/" className='text-decoration-none text-light' >Home</NavLink>
    </Nav>
    <Badge badgeContent={getData.length} color="primary"
     id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    >
    <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25, cursor:"p"}} ></i>
    </Badge>
    
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {
        getData.length ?
        <div className='card_details' style={{width:'24rem', padding:10}} >
            <Table>
                <thead>
                    <tr>
                        <td>Photo</td>
                        <td>Restaurant Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.map((e)=>{
                            return(
                                <tr>
                                    <td>
                                        <NavLink to={`cart/${e.id}`}  onClick={handleClose} >
                                        <img src={e.imgdata} alt=''style={{width:'5rem'}} />
                                        </NavLink>
                                    </td>
                                    <td>
                                       <p> {e.rname}</p>
                                       <p> Price : ₹ {e.price} </p>
                                       <p>Quantity : {e.qnty}</p>
                                       <p style={{color:'red' ,fontSize:20,crushor:'pointer' }} >
                                        <i className='fas fa-trash smalltrash' ></i>
                                       </p>
                                    </td>
                                    <td>
                                        <i className='fas fa-trash mt-3'
                                        style={{color:'red', crusor:'pointer'}}
                                        onClick={()=>del(e.id)}
                                        ></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <p className='text-center'>Total:{totalprice}</p>
                </tbody>
            </Table>
        </div> :
        <div className='card_details justify-content-center align-item-center'  style={{width:"23rem",padding:10}}>
       <i className='fas fa-close smallclose' 
       style={{position:"absolute", top:2,right:23,
        fontSize:18, cursor:"pointer" }}
        onClick={handleClose}
         ></i>
       <p style={{fontSize:16}} >Your carts is empty</p>
        <img src='./cart.gif' alt='' style={{width:'5rem', padding:10}} />
       </div>
       }
      
      
       
      </Menu>
  </Navbar>
    </div>
  )
}

export default Header;