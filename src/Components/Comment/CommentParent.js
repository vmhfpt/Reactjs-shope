import { useEffect } from "react";
import { useState} from "react";
import Axios from "axios";
import CommentChild from './CommentChild';
import { useParams } from "react-router-dom";
function CommentParent () {
  const params = useParams();
  var id = Number(params.name);
  console.log('lol')
  const [comment, setComments] = useState(0);
    const [showComment, setShow] = useState([]);
    const [idComment, setId] = useState(0);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [contentComment, setComment] = useState('');
    const [apiCom, setAPI] = useState(true);
    const handleChangeNew = (id) => {
      setComments(id);
      setId(0);
    }
    const handleSetCommentParent = (value) => {
      setId(value);
      setComments(0);

    }
     const handleSubmit = () => {
     //  console.log('xx')
      // setAPI(!apiCom);
      // console.log('id_parent', 0, 'id_product', id)
       //console.log(name, phoneNumber, email, contentComment);
    //  console.log('subb mit')

    var myDataObj = {
      type: 'post', 
      id_product : id,
      id_parent : 0,
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
      setComments(0);
      setId(0);
      setShow(response.data);
      setAPI(!apiCom);
    })


      }
   
    useEffect( () => {


        var myDataObj = {type: 'parent', id_product : id}
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
      }, [apiCom]);
     
      
    /*return (<div> 
        <ul>
      {showComment.map((value, index) => (

          <li key={index}>{value.content_comment}<b onClick={() => handleSetCommentParent(value.id)}> Trả lời</b>
          
          
          
          <CommentChild functionHandle={handleChangeNew} newMore={comment} id_product={id} id_comment={idComment} id_parent={value.id} /> </li>
      ))}
      </ul>
      <div >
          <input onChange={(e) => setName(e.target.value)} type="text"  placeholder="Tên"/> <br/>
          <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="SĐT"/><br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/>
          <input onChange={(e) => setComment(e.target.value)} placeholder="Nội dung"/><br/>
          <button  onClick={() => handleSubmit()} > Gửi</button>
      </div>
    </div>)*/
    return (<div id="topcomment" class="comment-thread">
   {showComment.map((value, index) => (
    <div class="comment" id="comment-1">
   <a href="#comment-1" class="comment-border-link">
            <span class="sr-only">Jump to comment-1</span>
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
            <button onClick={() => handleSetCommentParent(value.id)} class="button-comment" type="button">Trả lời</button>
           
        </div>
        <CommentChild functionHandle={handleChangeNew} newMore={comment} id_product={id} id_comment={idComment} id_parent={value.id} />
</div>
))}

    <div id="respond">

  <h3>Để lại một bình luận</h3>

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
    <a href="#topcomment"> <button onClick={() => handleSubmit()} className="send-comment"> Gửi</button></a>

  </div>

</div>
</div>);
}
export default CommentParent ;