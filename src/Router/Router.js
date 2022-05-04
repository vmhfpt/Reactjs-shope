import Index from "../Components/index";
import Product from "../Components/product";
import Search from "../Components/Search";
import Login from '../Components/User/Login/Login'
import Resign from '../Components/User/Resign/Resign'
import { Routes, Route } from "react-router-dom";
import { useStore, actions } from "../store";
function RouterShow() {
  const [state, dispatch] = useStore();
  const listProduct = state.listProduct;
  return (
    <Routes>
             <Route path="/user/resign" element={<Resign />} />
       <Route path="/user/login" element={<Login />} />
      <Route path="/:category" element={<Index body={listProduct} />} />
      <Route path="/:category/:sort" element={<Index body={listProduct}/>} />
      <Route path="/" element={<Index body={listProduct}/>} />
      <Route path="/dtdd/:name" element={<Product />} />
      <Route path="/dtdd/search/:key" element={<Search />} />
    </Routes>
  );
}
export default RouterShow;
