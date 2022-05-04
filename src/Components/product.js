import axios from "axios";
import { useParams } from "react-router-dom";
import { useStore, actions } from "../store";
import LibraryColor from "./ManageColor/LibraryColor";
import VoteProduct from './Vote/VoteProduct'
import RankVote from './Vote/rankVote'
import CommentParent from '../Components/Comment/CommentParent'
import "./Product/Grid.css";
import "./Product/Style.css";
import "./Product/All.min.css";
import "./Product/Responsive.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Product = () => {
  const [width, setWidth] = useState(true);
    const params = useParams();
    const [state, dispatch] = useStore();
  const [initColor, setInit] = useState({});
  const [listColor, setList] = useState([]);
  var id = Number(params.name);

 

  const [apiContent, setContent] = useState(() => {
    return [{}];
  });
  const handleChangeColor = (value) => {
   // console.log(listColor);
    var arrayFilter = listColor.find(element => element.id === value );
   // console.log(arrayFilter)
   setInit(
{
    image: arrayFilter.image,
    price: arrayFilter.price,
    quantity: arrayFilter.quantity,
    id_color: arrayFilter.id,
}
   );
 //   alert(value);
  };
  useEffect(() => {
    var myDataObj = {
      type: "image",
      id_product : id
    };
    var formData = new FormData();
    for (var key in myDataObj) {
      formData.append(key, myDataObj[key]);
    }

    axios({
      method: "post",
      url: "http://localhost/API/colorProduct.php",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((response) => {
      //console.log(response.data);
      setInit({
        image: response.data[0].image,
        price: response.data[0].price,
        quantity: response.data[0].quantity,
        id_color: response.data[0].id,
      });
      //listColor : response.data
      setList(response.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost/API/result.php",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: params.name,
      },
    })
      .then((response) => {
        setContent(response.data);
        //console.log("render", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(initColor);
  const someHtml = apiContent[0].content;
  //const BlogContainer = '<h2> dmm</h2>';

  return (
    <div style={{ position: "relative", top: "-270px" }} class="grid wide">
      <section class="prd__view bg-white">
        <div class="row">
          <LibraryColor id_color={initColor.id_color} image={initColor.image} />
          <div class="col l-7 prd__view-parameter">
            <p class="parameter-items prd__name">{apiContent[0].name}</p>
         
          <VoteProduct id_product={params.name} initColorQuantity={initColor.quantity} />
           
            <div class="parameter-items prd__flash-sale"></div>
            <div class="parameter-items prd__discount flex items-center">
              <div class="small-text">₫{apiContent[0].giacu}</div>
              <div class="t-primary t-bold">₫{initColor.price}</div>
            </div>
            <div class="parameter-items prd__choosen">
              <div class="choosen-items prd__voucher flex items-center">
                <p class="prd__choosen-text">Mã giảm giá của shop</p>
                <div class="prd__choosen-detail">Giảm ₫5k</div>
              </div>
              <div class="choosen-items prd__deal flex">
                <p class="prd__choosen-text">Deals shock</p>
                <div class="prd__choosen-detail"></div>
              </div>
              <div class="choosen-items prd__delivery flex">
                <p class="prd__choosen-text">Vận chuyển</p>
                <div class="prd__choosen-detail">
                  <img
                    src="./assets/img/free-ship.png"
                    alt=""
                    class="delivery__icon-fs"
                  />
                  <p class="delivery__text">Miễn Phí Vận Chuyển</p>
                  <br />
                  <p class="delivery__text small-text">
                    Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                  </p>
                </div>
              </div>
              <div class="choosen-items prd__weight flex items-center">
                <p class="prd__choosen-text">Màu sắc</p>
                <div class="prd__choosen-detail flex">
                  {listColor.map((value, index) => (
                    <button
                      onClick={() => handleChangeColor(value.id)}
                      key={index}
                      class={initColor.id_color === value.id ? "detail-list activeButton" : "detail-list"}
                    >
                      {value.name_color}
                    </button>
                  ))}
                </div>
              </div>
              <div class="choosen-items prd__quantity flex items-center">
                <p class="prd__choosen-text">Số lượng</p>
                <div class="prd__choosen-detail flex">
                  <p class="btn__math btn__math--sub">
                    <i class="fas fa-minus"></i>
                  </p>
                  <input class="choose-number t-center" type="text" value="1" />
                  <p class="btn__math btn__math--add">
                    <i class="fas fa-plus"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="prd__buy-btn flex">
              <button
              onClick={() =>
                dispatch(
                  actions.fncAdd({
                    quantity: 1,
                    name: apiContent[0].name,
                    price: apiContent[0].giamoi,
                    id: params.name,
                    image: apiContent[0].image,
                  })) } 
              
              
              class="btn btn--add-to-cart t-primary">
                Thêm vào giỏ hàng
              </button>
              <button class="btn btn--buy-now bg-primary t-white">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="prd__infor bg-white">
        <div class="prd__infor-heading section--heading">CHI TIẾT SẢN PHẨM</div>
        <p class="prd__infor-main">
          <div
          class={width === true ? 'showWidth' :''}
            
            dangerouslySetInnerHTML={{ __html: someHtml }}
           
          >


           
          </div>
          <center>
             <br/> <button onClick={() => setWidth(!width)}class="send-comment"> {width === true ? 'Xem thêm' : 'Thụ gọn'}</button>
            </center>


<div class="prd__infor-heading section--heading">ĐÁNH GIÁ SẢN PHẨM</div>
<RankVote  />
<div class="main-section">

<div class="rating-part">
<div class="average-rating"><br/>
<h2>2.5</h2><br/> 
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i class="fas fa-star red-color" aria-hidden="true"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<p>Average Rating</p>
</div>
<div class="loder-ratimg">
<div class="progress"></div>
<div class="progress-2"></div>
<div class="progress-3"></div>
<div class="progress-4"></div>
<div class="progress-5"></div>
</div>
<div class="start-part">
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<span>80%</span><br/>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fa fa-star t-primary"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<span>60%</span><br/>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<span>40%</span><br/>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<span>20%</span><br/>
<i aria-hidden="true" class="fa fa-star"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<i aria-hidden="true" class="fas fa-star red-color"></i>
<span>10%</span>
</div>
<div style={{clear: 'both'}}></div>

<CommentParent/>



</div>
</div>

        </p>
      </section>
    </div>
  );
};
export default Product;
