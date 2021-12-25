import { createContext } from 'react';
import {useState} from 'react';
import {useReducer } from 'react';
const conTextBody = createContext();






function ProviderBody({children}){

    const [showCart, setShowCart] = useState(false);
const handleShow = () => {
    
    setShowCart(!showCart);
}
const initReducer = {
    cards : JSON.parse(localStorage.getItem('shopCards')) === null ? [] : JSON.parse(localStorage.getItem('shopCards')),
    product : {
        quantity : 0,
        name : '',
        price : '',
        id : '',
        image : ''
    }
}
const handleReducer = (state, action) => {
    switch(action.type){
        case 'up' : {
        let index =  action.index;
         const newChangeQuantity = state.cards;
         if (newChangeQuantity[index].quantity < 3){
         newChangeQuantity[index].quantity = newChangeQuantity[index].quantity + 0.5;
         }
         // set lacation here
         localStorage.setItem('shopCards',  JSON.stringify(newChangeQuantity));
     return ({
         ...state,
         cards : newChangeQuantity
         });
         
        }
        case 'down' : {
         let index =  action.index;
          const newChangeQuantity = state.cards;
          if (newChangeQuantity[index].quantity > 1){
          newChangeQuantity[index].quantity = newChangeQuantity[index].quantity - 0.5;
          }
          // set lacation here
          localStorage.setItem('shopCards',  JSON.stringify(newChangeQuantity));
      return ({
          ...state,
          cards : newChangeQuantity
          });
          
         }
        case 'add' : {
       
 
         
        
 
         const array = state.cards;
         console.log(array);
         for (var i = 0; i < array.length; i++){
               if (array[i].id === action.content.id){
                   if(array[i].quantity < 3)
                   array[i].quantity =  array[i].quantity + 0.5;
              // set lacation here
              localStorage.setItem('shopCards',  JSON.stringify(array));
 
                   return ({
                    ...state,
                    cards : array
                    });
               }
           
         }
         // set lacation here
         localStorage.setItem('shopCards',  JSON.stringify([...state.cards ,action.content ]));
         return ({
            ...state,
            cards : [...state.cards ,action.content ]
            });
       
        }
        case 'delete' : {
           
            const newArray = [...state.cards ];
           const deleteArray =  newArray.filter(function(element){
             return element.id !== action.index;
           });
           localStorage.setItem('shopCards',  JSON.stringify(deleteArray));
         // set lacation here
           return ({
             ...state,
             cards : deleteArray
             });
        
     }
     default : 
     alert ('error');
     return (state);
    }
 }
 
 const [state, dispatch] = useReducer( handleReducer,  initReducer);
 const stateCards = state.cards;
 








    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState(null);
const handlePrice = (pri) => {
    setPrice(pri);
}
const handleProduct = (prod) => {
    setProduct(prod);
  
}

const value = {
  price,
  product,
  handlePrice,
  handleProduct,
  showCart,
  handleShow,
  dispatch,
  stateCards

}
 return (
 <conTextBody.Provider value={value}>

     {children}
 </conTextBody.Provider>

 );

}
export {conTextBody, ProviderBody};