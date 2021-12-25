import {useContext} from 'react';
import {conTextBody} from '../Context';
function Content(){
    const DELETE_PRODUCT = 'delete';
    const UP_QUANTYTI = 'up';
    const DOWN_QUANTYTI = 'down';
   const fncDelete = (index) => {
   return {
     type : DELETE_PRODUCT,
     index : index
   };
   }
   const fncQuantyti = (index, type) => {
       return {
           index : index,
           type : type
       }
   }
var sum = 0;
    const resultContext =  useContext(conTextBody);
    //console.log(resultContext.stateCards);
    const stateMoreCard = resultContext.stateCards;
    const sumPrive = () => {
       
        for(var i = 0; i < stateMoreCard.length; i ++){
            sum = sum + Number(stateMoreCard[i].price * stateMoreCard[i].quantity);
        }
        return (Number(sum));
    }
    sumPrive();

    return (<div className="list-card"> 
    <div className="over-flow">
    {stateMoreCard.map((type, index) => (

 <div key={index}className="more-card">
 <img className="image-cart" alt="" src={type.image} width="50" height="50"/>
 <span> <b>{type.name}</b></span><br/>
<span style={{color : 'red'}}> {type.price} đ</span>
<div className="inputQuantity">
<button 

onClick={() => resultContext.dispatch(fncQuantyti(index, DOWN_QUANTYTI))}
>-</button>
<input  readOnly="readonly" value={type.quantity}/>
<button onClick={() => resultContext.dispatch(fncQuantyti(index, UP_QUANTYTI))}>+</button>
<span 
onClick={() => resultContext.dispatch(fncDelete(type.id))}
className="close-card"> &times;</span>
</div>

</div>


    ))}
           </div>
             <h2> Tổng Tiền : <b style={{color: 'red'}}> {sum} Đ</b></h2>
        </div>
      
        );

}
export default Content;