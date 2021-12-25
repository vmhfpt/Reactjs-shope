
import axios from 'axios';
import {useRef} from 'react';
import { useLocation } from "react-router-dom";
import {useState} from 'react';
import {useContext} from 'react';
import {conTextBody} from '../Context';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import {  Link } from "react-router-dom";
import  Pagination from "./Pagination";
import Content from '../ListCart/Content';
const Contact = () => {



  
  const keySearch = useLocation().search;
  const name = new URLSearchParams(keySearch).get('search');

  //const id = new URLSearchParams(search).get('id');
 

  const ADD_PRODUCT = 'add';
  const fncAdd = (object) => {
    return {
         type : ADD_PRODUCT,
         content :  object
    }
  }
  let pageRef = useRef();
  const params = useParams();
  //console.log(params);
  const page = useParams();
  if(page.id === undefined){
    page.id = 1;
  }
 const [sumCurent, setSumCurent] = useState(0);
  const [apiRequest, setShow] = useState( [{}]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');
  const InforMation =  useContext(conTextBody);
  const [boolen, setBoolen] = useState(false);
  const  handleSearch = () => {
    const aPIPage = (point, type) => {
     // console.log('search',name);
      var myDataObj = {

        id:search, 
        name:InforMation.price,
        page : Number(point),
        action : type
      }
      var formData = new FormData();
      for (var key in myDataObj) {
          formData.append(key, myDataObj[key])
      }
      axios({
        method: 'post',
        url: 'http://localhost/API/index.php',
       
        headers: {
          'Content-Type': 'multipart/form-data',
        },
         data: formData
      })
      .then((response) => {
      if (type === 'all'){
        setSumCurent(response.data.length); 
      }else {

        setShow( response.data);
      }
      })
      .catch((error) => {
        console.log(error)
      })
    }
    aPIPage(page.id, 'all');
    aPIPage(page.id, 'page');
   // alert('search');
  }

  useEffect(() => {
    const aPIPage = (point, type) => {
      var myDataObj = {
        id:InforMation.product, 
        name:InforMation.price,
        page : Number(point),
        action : type
      }
      var formData = new FormData();
      for (var key in myDataObj) {
          formData.append(key, myDataObj[key])
      }
      axios({
        method: 'post',
        url: 'http://localhost/API/index.php',
       
        headers: {
          'Content-Type': 'multipart/form-data',
        },
         data: formData
      })
      .then((response) => {
      if (type === 'all'){
        setSumCurent(response.data.length); 
      }else {

        setShow( response.data);
      }
      })
      .catch((error) => {
        console.log(error)
      })
    }
    aPIPage(page.id, 'all');
    aPIPage(page.id, 'page');
    axios.get('http://localhost/API/category.php')
    .then(response => {
    // console.log(response.data)
    setCategory(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [name,page.id, InforMation.product, InforMation.price]);
var  sumQuantityArray = 0
for (var key in InforMation.stateCards) {
  sumQuantityArray = sumQuantityArray + InforMation.stateCards[key].quantity ;
}


//console.log('search', search);
    return (
<div>
<div onClick={InforMation.handleShow} className="icon-cart">
    <i className='fas fa-shopping-cart'></i>
     <div className="quantity-card"><center><span>{sumQuantityArray} </span></center></div>
    </div>
   
    {InforMation.showCart === true ? <Content /> : <span>.</span>}
<input  value={search}onChange={(e) => setSearch(e.target.value)}/><button 
  onClick={() => handleSearch()}
><Link to={`/?search=${search}`}> Tìm Kiếm</Link></button><br/><br/>
{category.map((index, type) => (
<button  onClick={() => InforMation.handleProduct(index.name)} key={type}> <Link to={`/category/${index.name}`}>  {index.name}</Link></button>

    ))}
    <br/>
 {InforMation.product !== null ?  <button onClick={() => InforMation.handleProduct(null)}>{ InforMation.product} &times;</button> : <span>.</span>}
<br/> 
 <form>
 <span >Dưới 5 triệu</span>
 <input 
 onChange={() => InforMation.handlePrice('5>')}
 type="radio" name="age"  /> <br/>
 <span >Trên 5 triệu</span>
  <input 
  onChange={() => InforMation.handlePrice('5<')}
  type="radio" name="age" />
  </form>
<b style={{color : 'red'}}>{Math.ceil(sumCurent/5)} trang </b> <span> tổng số {sumCurent} Sản phẩm</span><br/>
 {apiRequest.map((value, index) => (
          <div key={index} className="container">
    <center>     <Link to={`/${value.id}`}><img alt="" src={value.image} width="150" height="160"/></Link></center>
   <center>  <Link to={`/${value.id}`}> <h3 key={index}>{value.name}</h3></Link></center>
   <center>  <Link to={`/${value.id}`}> <h4 className="h4-title" key={index}>{value.giacu} Đ</h4></Link></center>
   <center>  <Link to={`/${value.id}`}>  <h2 className="h2-title" key={index}>{value.giamoi} Đ</h2></Link></center>
    <center><button
       onClick={() => InforMation.dispatch(fncAdd({
        quantity : 1,
          name : value.name,
          price :value.giamoi,
          id : value.id,
          image : value.image
      }))}
    className="button-card"> Thêm vào giỏ hàng</button></center>
          </div>
        ))}
<div style={{clear: 'both'}}></div>
<Pagination pageDefault={page.id} curentPage={sumCurent} sumPage={apiRequest.length}/>
</div>
    );
  };
  export default Contact;