import { useEffect } from 'react';
import LibraryColor from './LibraryColor';
import { useState } from 'react';
import Axios from "axios";
function ColorProduct() {
    const [initColor, setInit] = useState({});
    const [listColor, setList] = useState([]);
    var id = 308 ;
   useEffect(() => {
    Axios({
        method: 'post',
        url: 'http://localhost/API/colorProduct.php',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
       //  data: formData
      })
      .then((response) => {
        //console.log(response.data);
        setInit({
image : response.data[0].image,
price : response.data[0].price,
quantity : response.data[0].quantity,

        });
        //listColor : response.data
        setList(response.data);
      })
  
  
        
   }, [])
  // console.log(listColor);
    /*return (


       <div>
      <div>
      <img alt="" src={initColor.image} width="120" height="150" />
      <h1> {initColor.price} d</h1>
      <h2> Còn hàng</h2> <span>/{initColor.quantity} sản phẩm </span>
      </div>
      <div style={{'width' : '900px', 'border' : '1px solid red'}}>
    {listColor.map((value, index) => (
       <div key={index} style={{'float': 'left','width' : '65px' }}>
       <img alt="" src={value.image} width="65" height="80" /><br/>
     <span> { value.name_color}</span>
       </div>
    ))}
          </div>
          <div style={{'clear' : 'both'}}> </div>
          <LibraryColor />
          
       </div>
    )*/
    return (    <div class="choosen-items prd__weight flex items-center">
    <p class="prd__choosen-text">
        Màu sắc
    </p>
    <div class="prd__choosen-detail flex">
        <button class="detail-list">500gr</button>
        <button class="detail-list">400gr</button>
        <button class="detail-list">600gr</button>
        <button class="detail-list">200gr</button>
    </div>
</div>)
}
export default ColorProduct;