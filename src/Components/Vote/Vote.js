
import { useEffect } from "react";
import { useState } from 'react';
import Axios from "axios";
function Vote({idProduct}) {
    const [sumVote, setSumVote] = useState(0);
    const array = [1, 2, 3, 4, 5];
    useEffect( () => {
        var myDataObj = {id:idProduct}
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
      }, [idProduct]);
    
    return (

        <div className="home-produce-item__rating">
        {array.map((id) => {
          
          if (id <= sumVote.quantity) {
            return (
               
            <i  key={id} className="home-produce-item__star--gold fas fa-star"></i>
            
          
            );
          } else {
            return (
            
                <i  key={id} className="fas fa-star"></i>
          
              
                ) ;
          }
    
        

        })}
         <span class="home-produce-item__sold">{sumVote.evaluate} đánh giá</span>
      </div>



    )
}
export default Vote;