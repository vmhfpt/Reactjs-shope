
import axios from 'axios';
import { useParams } from "react-router-dom";
import {useState} from 'react';
import {useEffect} from 'react';
import { useRef } from 'react';
const Blogs = () => {
  /*const text = useRef();
  let params = useParams();
  var newL
 // console.log(params.name);

 

  axios({
    method: 'POST',
    url: 'http://localhost/API/result.php',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
       id : params.name
    }
  })
  .then((response) => {
    console.log('api', response.data)
     newL =  response.data;
    console.log(newL);
   
  })
  .catch((error) => {
    console.log(error)
  })




 

console.log("render");
console.log('render',newL)*/



const params = useParams();

const [apiContent, setContent] = useState(   
 ( ) => {
   return [{}]
 }


);
useEffect(() => {
  axios({
    method: 'POST',
    url: 'http://localhost/API/result.php',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
       id : params.name
    }
  })
  .then((response) => {
    
    setContent(response.data) ;
  // console.log("render", apiContent)
   
  })
  .catch((error) => {
    console.log(error)
  })


}, []);
//console.log(apiContent[0].content);
const someHtml = apiContent[0].content;
//const BlogContainer = '<h2> dmm</h2>';
    return (
    <div>
    <h1>Trang chi tiet {params.name}</h1>
    <h2> {apiContent[0].name}</h2>
    <div className="Container" dangerouslySetInnerHTML={{__html: someHtml}}></div>
    </div>) ;
    
 
  };
  export default Blogs;