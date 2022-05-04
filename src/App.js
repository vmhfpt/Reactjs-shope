import { useStore, actions } from "./store";
import { useEffect } from "react";
import { useState} from "react";
import Axios from "axios";
import CommentParent from './Components/Comment/CommentParent'
import "./Components/Layout/Css/base.css";
import "./Components/Layout/Css/gird.css";
import "./Components/Layout/Css/main.css";
import "./Components/Layout/Css/reponsive.css";
import ColorProduct from './Components/ManageColor/ColorProduct'
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import RouterShow from "./Router/Router";
function App() {
 /* return (<div> 
    <CommentParent />
  </div>)*/
  /*
  return (<div> 
    <ColorProduct />
  </div>)*/
  
  return (
<div> 
  <Footer />
<RouterShow />
<Header />
</div>
  );
  
  //
  
  /*
  useEffect( () => {


    var myDataObj = {id:312}
    var formData = new FormData();
    for (var key in myDataObj) {
        formData.append(key, myDataObj[key])
    }

    Axios({
      method: 'post',
      url: 'http://localhost/API/comment.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
       data: formData
    })
    .then((response) => {
      setShow(response.data)
    })
  }, []);
  const Sum = 4;
  const array = [1, 2, 3, 4, 5];
 /* for (var i = 0; i < show.length; i ++){
  
   for (var j = 0 ; j < show[i].comment_parent.length ; j ++){
      console.log(show[i].comment_parent[j].content);
    }
  }
  const  CommentChild = ({value}) => {
     console.log(value);
    // return (<h2> haha</h2>);
    return (

<div> 

  {value.map((haha, type) => (
    <h2 key={type}> {haha.content} </h2>
  ))}

</div>


    );

  }
console.log(show);
  return (
    <div >
  {show.map((value, index) => (
<div key={index}> 
 <h1 > {value.content_comment}</h1>
<CommentChild value={value.comment_parent}/>
 </div>
  ))}

    </div>
  );
  */
}

export default App;
/*
{show.map(function(value, index){
    
     //   return (<h1 key={index}>{value.content_comment} </h1>);
        if(value.comment_parent.length !== undefined ){
          for (let i = 0 ; i < value.comment_parent.length; i++){
          return(  <h1 key={i}> {value.comment_parent[i].content} </h1>);
          }
          
        }
     
    })}
    */
