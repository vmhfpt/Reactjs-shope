import queryString from "query-string";
import { useStore, actions } from "../store";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { memo } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Cart from "./Cart/Content";
import Vote from './Vote/Vote';

/* function Index() {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useStore();

  const listProduct = state.listProduct;
  // console.log('state',state.showCard);
  const params = useParams();

  // console.log(params.category);
  const keySearch = useLocation().search;
  var filterPrice = new URLSearchParams(keySearch).get("price");
  var filterPage = new URLSearchParams(keySearch).get("page");
  var filterSortHere = new URLSearchParams(keySearch).get("sort");
  //var filterSortHere  = ''
  //console.log(filterSortHere)
  if (filterPage === null) {
    filterPage = 1;
  }

  const listCategory = ["SamSung", "Iphone", "Xiaomi", "Nokia"];
  const filter = ["2tr-5tr", "5tr-7tr", "7tr-11tr"];
  const filterSort = ["ASC", "DESC"];
  var stringUrl = "";
  if (
    (params.category !== undefined && filterPrice !== null) ||
    filterPrice !== null
  ) {
    stringUrl = "&";
  } else {
    stringUrl = "?";
  }
  useEffect(() => {
    //   console.log('change API');
    const requestAPI = (type) => {
      if (filterPage == null) {
        filterPage = 1;
      }
      const listCallAPI = {
        _category: params.category,
        _price: filterPrice,
        _page: type === "all" ? "" : filterPage,
        _sort: filterSortHere,
      };
      const newdd = queryString.stringify(listCallAPI);
      Axios({
        method: "get",
        url: `http://localhost/API/index.php?${newdd}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          if (type === "all") {
            //   gggg.current =  response.data.length;
            // console.log('set', gggg.current);
            setPage(response.data.length);
          } else {
            // console.log(response.data);

            // console.log('render effect', gggg.current);
            dispatch(actions.showListProduct(response.data));
          }

          //   dispatch(actions.showListProduct(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    requestAPI("all");
    requestAPI("page");
  }, [params.category, filterPrice, filterPage, filterSortHere]);


  var sumQuantityArray = 0;
  for (var key in state.cards) {
    sumQuantityArray = sumQuantityArray + state.cards[key].quantity;
  }
  return (
    <div>
      <div
        onClick={() => dispatch(actions.showCart(state.showCard))}
        className="icon-cart"
      >
        <i className="fas fa-shopping-cart"></i>
        <div className="quantity-card">
          <center>
            <span>{sumQuantityArray}</span>
          </center>
        </div>
      </div>
      {state.showCard === true ? <Cart /> : "."}
      <b style={{ color: "red" }}>{Math.ceil(page / 5)} trang </b>{" "}
      <span> tổng số {page} Sản phẩm</span>
      <br />
      {listCategory.map((value, index) => (
        <button key={index}>
          <Link to={`/${value}`}> {value} </Link>{" "}
        </button>
      ))}
      <br /> <br />
      {filter.map((value, index) => (
        <button key={index}>
          <Link
            to={`/${
              params.category === undefined ? "" : params.category
            }?price=${value}`}
          >
            {" "}
            {value}{" "}
          </Link>{" "}
        </button>
      ))}
      <br /> <br />
      {filterSort.map((value, index) => (
        <button key={index}>
          <Link
            to={`/${params.category === undefined ? "" : params.category}${
              filterPrice === null ? "" : `?price=${filterPrice}`
            }${stringUrl}page=${filterPage}&sort=${value}`}
          >
            {" "}
            {value}{" "}
          </Link>{" "}
        </button>
      ))}
      <br /> <br />
      {params.category !== undefined ? (
        <button>
          {" "}
          <Link
            to={`/${
              filterPrice === null ? "" : `?price=${filterPrice}`
            }${stringUrl}page=${filterPage}`}
          >
            {" "}
            {params.category} <b>&times;</b>{" "}
          </Link>{" "}
        </button>
      ) : (
        "."
      )}
      {filterPrice !== null ? (
        <button>
          {" "}
          <Link to={`/${params.category === undefined ? "" : params.category}`}>
            {" "}
            {filterPrice} <b>&times;</b>{" "}
          </Link>{" "}
        </button>
      ) : (
        "."
      )}
      {listProduct.map((value, index) => (
        <div key={index} className="container">
          <center>
            {" "}
            <Link to={`/dtdd/${value.id}`}>
              <img alt="" src={value.image} width="150" height="160" />
            </Link>
          </center>
          <center>
            {" "}
            <Link to={`/dtdd/${value.id}`}>
              {" "}
              <h3 key={index}>{value.name}</h3>
            </Link>
          </center>
          <center>
            {" "}
            <Link to={`/dtdd/${value.id}`}>
              {" "}
              <h4 className="h4-title" key={index}>
                {value.giacu} Đ
              </h4>
            </Link>
          </center>
          <center>
            {" "}
            <Link to={`/dtdd/${value.id}`}>
              {" "}
              <h2 className="h2-title" key={index}>
                {value.giamoi} Đ
              </h2>
            </Link>
          </center>
          <center>
            <button
              onClick={() =>
                dispatch(
                  actions.fncAdd({
                    quantity: 1,
                    name: value.name,
                    price: value.giamoi,
                    id: value.id,
                    image: value.image,
                  })
                )
              }
              className="button-card"
            >
              {" "}
              Thêm vào giỏ hàng
            </button>
          </center>
        </div>
      ))}
      <div style={{ clear: "both" }}></div>
      <Pagination sumPage={page} />
    </div>
  );
} */
function Index({body}) {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useStore();
  const listProduct = state.listProduct;
  const params = useParams();
  const keySearch = useLocation().search;
  var filterPrice = new URLSearchParams(keySearch).get("price");
  var filterPage = new URLSearchParams(keySearch).get("page");
  var filterSortHere = new URLSearchParams(keySearch).get("sort");
  if (filterPage === null) {
    filterPage = 1;
  }
  const listCategory = ["SamSung", "Iphone", "Xiaomi", "Nokia", "ViVo"];
  const filter = ["2tr-5tr", "5tr-7tr", "7tr-11tr"];
  const filter1 = [
    {
      name: "2 triệu - 5 triệu",
      value: "2tr-5tr",
    },
    {
      name: "5 triệu - 7 triệu",
      value: "5tr-7tr",
    },
    {
      name: "7 triệu - 11 triệu",
      value: "7tr-11tr",
    },
  ];

  const filterSort = [
    {
      name: "Tăng dần",
      value: "ASC",
    },
    {
      name: "Giảm dần",
      value: "DESC",
    },
  ];

  var stringUrl = "";
  if (
    (params.category !== undefined && filterPrice !== null) ||
    filterPrice !== null
  ) {
    stringUrl = "&";
  } else {
    stringUrl = "?";
  }
  useEffect(() => {
    //   console.log('change API');
    const requestAPI = (type) => {
      if (filterPage == null) {
        filterPage = 1;
      }
      const listCallAPI = {
        _category: params.category,
        _price: filterPrice,
        _page: type === "all" ? "" : filterPage,
        _sort: filterSortHere,
      };
      const newdd = queryString.stringify(listCallAPI);
      Axios({
        method: "get",
        url: `http://localhost/API/index.php?${newdd}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          if (type === "all") {
            setPage(response.data.length);
          } else {
            dispatch(actions.showListProduct(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    requestAPI("all");
    requestAPI("page");
  }, [params.category, filterPrice, filterPage, filterSortHere]);

  return (
    <div style={{'position' : 'relative',
     'top' : '-280px'
    }}class="app__container app__content">
      <div class="grid wide">
        <div class="row sm-gutter">
          <div class="col l-2 m-0 c-0">
            <nav class="category">
              <h3 class="category__heading">
                <i class="category__heading-icon fas fa-list"></i>
                Danh mục
              </h3>

              <ul class="category-list">
                {listCategory.map((value, index) => (
                  <li
                    className={
                      String(params.category) === String(value)
                        ? "category-item category-item__active"
                        : "category-item"
                    }
                  >
                    <Link className="category-item__link" to={`/${value}`}>
                      {" "}
                      {value}{" "}
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div class="col l-10 m-12 c-12">
            <div class="home-filter hide-on-mobile-tablet">
              <span class="home-title__label">Sắp xếp theo</span>

              {filterSort.map((value, index) => (
                <button
                  key={index}
                  className={
                    String(filterSortHere) === String(value.value)
                      ? "home-filter__btn btn btn--primary"
                      : "home-filter__btn btn "
                  }
                >
                  {" "}
                  <Link
                    to={`/${
                      params.category === undefined ? "" : params.category
                    }${
                      filterPrice === null ? "" : `?price=${filterPrice}`
                    }${stringUrl}page=${filterPage}&sort=${value.value}`}
                  >
                    {" "}
                    {value.name}{" "}
                  </Link>{" "}
                </button>
              ))}

              <div class="select-input">
                <span class="select-input__label">Giá</span>
                <i class="seclect-input__icon fas fa-angle-down"></i>

                <ul class="select-input__list">
               
                  {filter1.map((value, index) => (
        <li className="select-iput__item" key={index}>
          <Link
            to={`/${
              params.category === undefined ? "" : params.category
            }?price=${value.value}`}
          >
            {" "}
            {value.name}{" "}
          </Link>{" "}
        </li>
      ))}
               
                </ul>
              </div>
              <div class="home-filter__page">
                <span class="home-filter__page-num">
                  <span class="home-filter__current">{page} Sản phẩm</span>/ {Math.ceil(page / 10)} trang
                </span>

              
              </div>
            </div>

    

            <div class="home-produce">
              <div class="row sm-gutter">
                {listProduct.map((value, index) => (
                  <div class="col l-2-4 m-3 c-6">
                    <p class="home-produce-item" href="#">


                    <p class="home-produce-item" >
                      <Link to={`/dtdd/${value.id}`}>
                      <div
                        class="home-produce-item__img"
                        style={{ "background-image": `url(${value.image})` }}
                      ></div>
                      </Link>
                      <h4 class="home-produce-item__name">{value.name}</h4>
                      <div class="home-produce-item__price">
                        <div class="home-produce-item__price-old">
                          {value.giacu}đ
                        </div>
                        <div class="home-produce-item__price-current">
                          {value.giamoi}đ
                        </div>
                      </div>
                      <div class="home-produce-item__action">
                        <span class="home-produce-item__heart home-produce-item__heart--liked">
                          <i class="home-produce-item__heart-icon-emty far fa-heart"></i>
                          <i class="home-produce-item__heart-icon-fill fas fa-heart"></i>
                        </span>
                        <Vote idProduct = {value.id} />
                     
                        
                      </div>
                      <div class="home-produce-item-origin">
                        <span class="home-produce-item__brand">
                          SS
                        </span>
                        <span class="home-produce-item__origin-name">
                        <button  onClick={() =>
                dispatch(
                  actions.fncAdd({
                    quantity: 1,
                    name: value.name,
                    price: value.giamoi,
                    id: value.id,
                    image: value.image,
                  })) } 
                  class="btn btn--primary header__cart-checkout">Thêm vào giỏ hàng</button>
                        </span>
                      </div>
                      <div class="home-produce-item__favourite">
                        <i class="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div class="home-produce-item__sale-off">
                        <span class="home-produce-item__sale-off--percent">
                          {Math.ceil(((value.giacu - value.giamoi) * 100) / value.giacu) }%
                        </span> <br/>
                        <span class="home-produce-item__sale-off--label">
                          GIẢM
                        </span>
                      </div>
                      </p>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Pagination sumPage={page} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Index);
// ý là làm gì
//nhìn code nó tự động theo chuẩn nhé
