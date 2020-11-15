export const initialState={
    basket:[],
    user:null
}
export const getBasketTotal =(Basket) =>{
  return Basket?.reduce((amount,item)=>item.price+amount,0)
}
export const reducer = (state=initialState,action) =>{
    console.log(action);
        switch (action.type) {
            case "ADD_TO_BASKET":{
               return{
                   ...state,
                   basket:state.basket.concat(action.payload)
               }
            }
            case "REMOVE_FROM_BASKET":{
                const index=state.basket.findIndex(itemIndex=>itemIndex.id===action.payload.id);
                let newBasket = [...state.basket];
                if(index>=0){
                    newBasket.splice(index,1)
                }else{
                    console.warn(`cannot remove element ${action.payload.id} it is not exist in basket`);
                }
                return{
                    ...state,
                    basket:newBasket
                }
            }
            case "EMPTY_BASKET":{
                return{
                    ...state,
                    basket:[]
                }
            }
            case "SET_USER" : {
                return{
                    ...state,
                    user:action.payload.user
                }
            }
                
        default: break;
        }

}