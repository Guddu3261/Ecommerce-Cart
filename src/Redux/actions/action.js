// for Add Item to cart
export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

// for delete from cart
export const DEL=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}
// delete indivisual 
export const RMV=(iteam)=>{
    return{
        type:'RMV_ONE',
        payload:iteam
    }
}

