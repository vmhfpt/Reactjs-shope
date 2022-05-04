
import { useEffect } from "react";
import { useState } from 'react';
import Axios from "axios";
function Vote({id_product, initColorQuantity}) {
    const [sumVote, setSumVote] = useState(0);
    const array = [1, 2, 3, 4, 5];
    useEffect( () => {
        var myDataObj = {id:id_product}
        var formData = new FormData();
        for (var key in myDataObj) {
            formData.append(key, myDataObj[key])
        }
    
        Axios({
          method: 'post',
          url: 'http://localhost/API/vote.php',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
           data: formData
        })
        .then((response) => {
            
            setSumVote(response.data);
        })
      }, [id_product]);
   // console.log(sumVote.quantity)
    //toFixed(2);
    return (

        <ul class="parameter-items prd__vote flex">
                <li class="prd__vote-items star seperator">
                <a href="#" class="t-primary t-bold">
                  {sumVote.quantity !== undefined ? sumVote.quantity.toFixed(2) : 0}
                  <i class="fas fa-star t-primary"></i>
                  <i class="fas fa-star t-primary"></i>
                  <i class="fas fa-star t-primary"></i>
                  <i class="fas fa-star  t-primary"></i>
                  <i class="fas fa-star red-color"></i>
                </a>
              </li>
              <li class="prd__vote-items voted seperator">
                {sumVote.evaluate}<span> Đánh giá</span>
              </li>
         <li class="prd__vote-items bought seperator">
         {initColorQuantity}
         <span> Sản phẩm</span>
       </li>
</ul>


    )
}
export default Vote;