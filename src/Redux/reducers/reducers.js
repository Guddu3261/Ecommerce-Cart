 const INIT_STATE={
    carts:[],

};

export const cartreducer=(state=INIT_STATE, action)=>{
 switch(action.type){
    case "ADD_CART":
      //   for increase quantity
      const itemIndex=state.carts.findIndex((iteam)=>iteam.id=== action.payload.id)
      if(itemIndex >=0){
         state.carts[itemIndex].qnty+=1
      }else{
         const temp={...action.payload, qnty:1}
            return {
        ...state,
        carts:[...state.carts, temp]

        }
      }

 
   case "RMV_CART":
     const data=state.carts.filter((ele)=>ele.id !== action.payload)
     return{
        ...state,
        carts:data
     }
     
  case "RMV_ONE":
   const index_decrement=state.carts.findIndex((iteam)=>iteam.id===action.payload);
   if(state.carts[index_decrement].qnty >=1){
      const item_dec=state.carts[index_decrement].qnty -=1
      console.log([...state.carts,item_dec])
      return{
         ...state,
         carts:[...state.carts]
      }
   }else if(state.carts[index_decrement].qnty===1){
      const data=state.carts.filter((el)=>el.id !== action.payload)
      return{
         ...state,
         carts:data
      }
   }
    default:
    return state;
 }
}