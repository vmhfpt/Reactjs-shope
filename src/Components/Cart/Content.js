import { useStore, actions } from "../../store";
import { DOWN_QUANTYTI } from "../../store/Constants";
import { UP_QUANTYTI } from "../../store/Constants";
import { DELETE_PRODUCT } from "../../store/Constants";

/*
function Content(){
    const [state, dispatch] = useStore();

var sum = 0;
    
    //console.log(resultContext.stateCards);
    const stateMoreCard = state.cards;
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
onClick={() => dispatch(actions.fncQuantyti(index, DOWN_QUANTYTI))}

>-</button>
<input  readOnly="readonly" value={type.quantity}/>
<button
onClick={() => dispatch(actions.fncQuantyti(index, UP_QUANTYTI))}
>+</button>
<span 
onClick={() => dispatch(actions.fncDelete(type.id))}
className="close-card"> &times;</span>
</div>

</div>


    ))}
           </div>
             <h2> Tổng Tiền : <b style={{color: 'red'}}> {sum} Đ</b></h2>
        </div>
      
        );

}*/

function Content() {
  const [state, dispatch] = useStore();

  var sum = 0;

  //console.log(resultContext.stateCards);
  const stateMoreCard = state.cards;
  const sumPrive = () => {
    for (var i = 0; i < stateMoreCard.length; i++) {
      sum = sum + Number(stateMoreCard[i].price * stateMoreCard[i].quantity);
    }
    return Number(sum);
  };
  sumPrive();
  return (
    <div class="header__cart-list">
        { sum === 0 ?   <div><img
        
        src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
        alt=""
        class="header__cart-no-cart-img"
      />
      <span class="header__cart-list-no-cart-msg">Chưa có sản phẩm</span></div> : ''}
       
        

      <div class="header__cart--has-produce">
      
      {sum !== 0 ? <h3 class="header__cart-heading">Sản phẩm đã thêm</h3> : ''} 
           <div > 
        <ul class="show-card header__cart-list-item">
          {stateMoreCard.map((type, index) => (
            <li class="header__cart-item">
            <img
              src={type.image}
              alt=""
              class="header__cart-img"
            />
            <div class="header__cart-item-info">
              <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">{type.name}</h5>
                <div class="header__cart-item-price-wrap">
                  <span class="header__cart-item-price">{type.price}đ</span>
                  <span class="header__cart-item-multiply">x</span>
                  <span class="header__cart-item-qnt">{type.quantity}</span>
                </div>
              </div>
              <div class="header__cart-item-body">
                <span class="header__cart-item-description">
                  Phân loại hàng: Bạc
                </span>
                <span  onClick={() => dispatch(actions.fncDelete(type.id))} class="header__cart-item-remove">Xóa</span>
              </div>
            </div>
          </li>
          ))}
         
        </ul>
        </div>
        <a class="btn btn--primary header__cart-checkout">Xem giỏ hàng</a>
      </div>
    </div>
  );
}
export default Content;
