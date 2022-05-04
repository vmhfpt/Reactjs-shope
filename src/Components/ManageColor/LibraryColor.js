
import { useEffect } from 'react';
import Axios from 'axios';
import { useState} from 'react';
import { useMemo } from 'react';

function LibraryColor({id_color,image}){

   // console.log(id_color, image)
    const [initImage, setInit] = useState();
  const newImage = useMemo(() => {

    setInit(image);
    return (initImage);
  }, [image])

    
    const handleHover = (value) => {
       // alert('hover');

      
       setInit(value);
    }
    const [library, setLibrary] = useState([]);
 var id = Number(id_color);
 if(isNaN(id)){
     id = 0;
 }
  //  console.log("id_color :", id);
    useEffect(() => {
        var myDataObj = {
            type: 'library',
            id_color : id
          }
          var formData = new FormData();
          for (var key in myDataObj) {
              formData.append(key, myDataObj[key])
          }
      
    
        Axios({
            method: 'post',
            url: 'http://localhost/API/colorProduct.php',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
             data: formData
          })
          .then((response) => {
          
         if(response.data.length > 0){
            setLibrary(response.data);
         }
           
          })
      
      
            
       }, [id])



//    console.log('library',library);
    return ( <div class="col l-5 prd__view-img">
    <div class="img__main"  style={{'background-image': `url(${initImage})`,'background-repeat': 'no-repeat', 'background-size' : 'cover'}}>

    </div>
    <ul class="img__list flex">
        {library.map((value, index) => (
 <li onMouseOver={() => handleHover(value.image)} key={index} class="img__list-items" style={{'background-image' : `url(${value.image})`,'background-repeat': 'no-repeat', 'background-size' : 'cover'}} > </li>

        )) }
       
    </ul>
</div>);
}
export default LibraryColor;