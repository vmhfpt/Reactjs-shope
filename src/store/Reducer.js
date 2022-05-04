import { SET_TODO_INPUT } from "./Constants";
import { ADD_ARRAY } from "./Constants";
import { SHOW_PRODUCT } from "./Constants";

import { DELETE_PRODUCT } from "./Constants";
import { ADD_PRODUCT } from "./Constants";
import { SHOW_CART } from "./Constants";

const initState = {
  todos: [],
  todoInput: "",
  listProduct: [],
  cards:
    JSON.parse(localStorage.getItem("shopCards")) === null
      ? []
      : JSON.parse(localStorage.getItem("shopCards")),
  showCard: false,
};
function reducer(state, action) {
  switch (action.type) {
    case SHOW_CART: {
      return {
        ...state,
        showCard: !action.value,
      };
    }
    case "up": {
      let index = action.index;
      const newChangeQuantity = state.cards;
      if (newChangeQuantity[index].quantity < 3) {
        newChangeQuantity[index].quantity =
          newChangeQuantity[index].quantity + 1;
      }
      // set lacation here
      localStorage.setItem("shopCards", JSON.stringify(newChangeQuantity));
      return {
        ...state,
        cards: newChangeQuantity,
      };
    }
    case "down": {
      let index = action.index;
      const newChangeQuantity = state.cards;
      if (newChangeQuantity[index].quantity > 1) {
        newChangeQuantity[index].quantity =
          newChangeQuantity[index].quantity - 1;
      }
      // set lacation here
      localStorage.setItem("shopCards", JSON.stringify(newChangeQuantity));
      return {
        ...state,
        cards: newChangeQuantity,
      };
    } // ảo không
    // lại xem nào
    case ADD_PRODUCT: {
      const array = state.cards;
      // console.log(array);
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === action.content.id) {
          if (array[i].quantity < 3)
            array[i].quantity = array[i].quantity + 1;
          // set lacation here
          localStorage.setItem("shopCards", JSON.stringify(array));

          return {
            ...state,
            cards: array,
          };
        }
      }
      // set lacation here
      localStorage.setItem(
        "shopCards",
        JSON.stringify([...state.cards, action.content])
      );
      return {
        ...state, // ghế vkl ai dạy f8 :)
        cards: [...state.cards, action.content],
      };
    }
    case DELETE_PRODUCT: {
      const newArray = [...state.cards];
      const deleteArray = newArray.filter(function (element) {
        return element.id !== action.index;
      });
      localStorage.setItem("shopCards", JSON.stringify(deleteArray));
      // set lacation here
      return {
        ...state,
        cards: deleteArray,
      };
    }

    case SHOW_PRODUCT: {
      return {
        ...state,
        listProduct: action.value,
      };
    }
    case SET_TODO_INPUT: {
      return {
        ...state,
        todoInput: action.value,
      };
    }
    case ADD_ARRAY: {
      return {
        ...state,
        todos: [...state.todos, action.value],
      };
    }
    default:
      alert("error");
      break;
  }
}
export { initState };
export default reducer;// nói chung vài bữa tối ưu sau
// giờ code thé này cũng được
