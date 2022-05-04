import { useEffect } from "react";
import { memo } from 'react';
import { useState} from "react";
import Axios from "axios";
function CommentChild({functionHandle,newMore ,id_product,id_parent, id_comment}){
  //  console.log('id_comment',id_comment,'id_parent ', id_parent)
 //const [comment, setComments] = useState(0);
 //console.log(newMore);
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [email, setEmail] = useState('');
   const [contentComment, setComment] = useState('');
    const [showComment, setShow] = useState([]);
  //  const handleReple = (id) => {
    //  setComments(id);
  // }
    const handleSubmit = () => {
    //  console.log('id_parent', id_parent, 'id_product', id_product)
    //  console.log(name, phoneNumber, email, contentComment);

      var myDataObj = {
        type: 'post', 
        id_product : id_product,
        id_parent : id_parent,
        name : name,
        phoneNumber : phoneNumber,
        email : email,
        contentComment : contentComment
      }
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
  
     }
    useEffect( () => {
        var myDataObj = {type: 'children', id_parent : id_parent, id_product : id_product}
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
            setShow(response.data);
        })
      }, []);

var temp = 0;
return (
  
  <div class="replies">
{showComment.map(function(value, index){
     if(Number(newMore) === Number(value.id)){
      return (
        <div class="comment" id="comment-2">
        <a href="#comment-2" class="comment-border-link">
            <span class="sr-only">Jump to comment-2</span>
        </a>
        <div class="comment-heading">
        <div class="div-user"> {value.name_user_comment.slice(0, 1)} </div>
            <div class="comment-info">
                <a href="#" class="comment-author">{value.name_user_comment}</a>
              
            </div>
        </div>
  
        <div class="comment-body">
            <p>
            {value.content_comment}
            </p>
            <button onClick={() => functionHandle(value.id)} class="button-comment" type="button">Trả lời</button>
           
        </div>
        <div id="respond">

        <div  id="commentform">

<label for="comment_author" class="required">Tên của bạn:</label>
<input onChange={(e) => setName(e.target.value)} type="text" name="comment_author" id="comment_author"  tabindex="1" required="required" />

<label for="email" class="required">Số điện thoại:</label>
<input onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="email" id="email"  tabindex="2" required="required" />
<label for="email" class="required">Email:</label>
<input onChange={(e) => setEmail(e.target.value)} type="text"  id="email"  tabindex="2" required="required" />

<label for="comment" class="required">Nội dung:</label>
<textarea onChange={(e) => setComment(e.target.value)}  name="comment" id="comment" rows="10" tabindex="4"  required="required"></textarea>


<input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
<button onClick={() => handleSubmit()} className="send-comment"> Gửi</button>

</div>

</div>
    </div>
     
      )
     } else {
      return (


        <div class="comment" id="comment-2">
        <a href="#comment-2" class="comment-border-link">
            <span class="sr-only">Jump to comment-2</span>
        </a>
        <div class="comment-heading">
        <div class="div-user"> {value.name_user_comment.slice(0, 1)} </div>
            <div class="comment-info">
                <a href="#" class="comment-author">{value.name_user_comment}</a>
              
            </div>
        </div>
  
        <div class="comment-body">
            <p>
            {value.content_comment}
            </p>
            <button onClick={() => functionHandle(value.id)} class="button-comment" type="button">Trả lời</button>
           
        </div>
    </div>
      )
     }


  
  })}
{Number(id_parent) === Number(id_comment) ?       <div id="respond">



<div  id="commentform">

    <label for="comment_author" class="required">Tên của bạn:</label>
    <input onChange={(e) => setName(e.target.value)} type="text" name="comment_author" id="comment_author"  tabindex="1" required="required" />

    <label for="email" class="required">Số điện thoại:</label>
    <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="email" id="email"  tabindex="2" required="required" />
    <label for="email" class="required">Email:</label>
    <input onChange={(e) => setEmail(e.target.value)} type="text"  id="email"  tabindex="2" required="required" />

    <label for="comment" class="required">Nội dung:</label>
    <textarea onChange={(e) => setComment(e.target.value)}  name="comment" id="comment" rows="10" tabindex="4"  required="required"></textarea>

 
    <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
    <button onClick={() => handleSubmit()} className="send-comment"> Gửi</button>

  </div>

</div> : ''}
</div>

);
//console.log('render children');
/*return (
  <div>
  <ul>
  {showComment.map(function(value, index){
     if(Number(newMore) === Number(value.id)){
      return (

        <div key={index}>
          <li > ------ {value.content_comment} <b onClick={() => functionHandle(value.id)}> trả lời</b></li>
 <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Tên 2222"/> <br/>
          <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="SĐT"/><br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
          <input onChange={(e) => setComment(e.target.value)} placeholder="Nội dung"/><br/>
          <button  onClick={() => handleSubmit()} > Gửi</button>

        </div>
      )
     } else {
      return ( <li key={index}> ------ {value.content_comment} <b onClick={() => functionHandle(value.id)}> trả lời</b></li>)
     }


  
  })}
  </ul>
  {Number(id_parent) === Number(id_comment) ?  <div >
          <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Tên 1111"/> <br/>
          <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="SĐT"/><br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
          <input onChange={(e) => setComment(e.target.value)} placeholder="Nội dung"/><br/>
          <button  onClick={() => handleSubmit()} > Gửi</button>
      </div> : ''}
  </div>

)
//console.log(name)
   /* return (
        
        <ul>
{Number(id_parent) === Number(id_comment) && showComment.length === 0 ?    <div >
          <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Tên 1111"/> <br/>
          <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="SĐT"/><br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
          <input onChange={(e) => setComment(e.target.value)} placeholder="Nội dung"/><br/>
          <button  onClick={() => handleSubmit()} > Gửi</button>
      </div> : ''}

        
      {showComment.map(function(value, index){
   //   console.log(value.id_parent, id_comment )
   //   console.log('-------childrennd id+parent', value.id_parent)
    //   return (<h1 key={index}>{value.content_comment} </h1>);
       if(value.id_parent ===  id_comment && temp === 0){
        temp ++;
       
        return (<div key={index}>
           
           <div >
          <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Tên2222"/> <br/>
          <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="SĐT"/><br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
          <input onChange={(e) => setComment(e.target.value)} placeholder="Nội dung"/><br/>
          <button  onClick={() => handleSubmit()} > Gửi</button>
      </div>
      <li>---- {value.id_parent} </li>
        </div>)
         
       }else {
           return (<li key={index}>---- {value.id_parent} </li>);
       }
    
   })}
        </ul>
    )*/
}
export default CommentChild ;