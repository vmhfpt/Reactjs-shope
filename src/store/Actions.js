import { SET_TODO_INPUT } from "./Constants";
import { ADD_ARRAY } from "./Constants";
import { SHOW_PRODUCT } from "./Constants";
import { DELETE_PRODUCT } from "./Constants";
import { ADD_PRODUCT } from "./Constants";
import { SHOW_CART } from "./Constants";
export const showCart = (value) => {
  return {
    type: SHOW_CART,
    value: value,// code kiểu này nham nhở quá
  };
};

// reducer gần giống redux
// redux ok hơn quản lý state tốt hơn,ukm nhìn code nó tự sắp xếp này đấy tiếp này
export const setTodoInput = (value) => {
  return {
    type: SET_TODO_INPUT,
    value: value,
  };
};
export const addArray = (value) => {
  return {
    type: ADD_ARRAY,
    value: value,
  };
};

export const showListProduct = (value) => {
  return {
    type: SHOW_PRODUCT,
    value: value,
  };
};

export const fncDelete = (index) => {
  return {
    type: DELETE_PRODUCT,
    index: index,
  };
};
export const fncQuantyti = (index, type) => {
  return {
    index: index,
    type: type,
  };
};

export const fncAdd = (object) => {
  return {
    type: ADD_PRODUCT,
    content: object,
  };
};
// bên đấy có nghe thấy gì không có chứ đù