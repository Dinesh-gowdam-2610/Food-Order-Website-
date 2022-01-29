import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const cartInitState = {
  items: [],
};

function cartReducer(state = cartInitState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newOrder = {
        ...action.data,
        count: 1,
      };
      let updatedItems = [];
      const exists = state.items.find((el) => el.id === newOrder.id);

      if (exists) {
        newOrder.count = exists.count + 1;
        updatedItems = state.items.map((el) =>
          el.id === newOrder.id ? newOrder : el
        );
      } else {
        updatedItems = [...state.items, newOrder];
      }
      return {
        ...state,
        items: updatedItems,
      };
    case 'CANCEL_ITEM':
      const deleteOrderItems = state.items.filter((item) =>
        item.id === action.data.id ? (item.count = item.count - 1) : item
      );

      return {
        ...state,
        items: deleteOrderItems,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

const middleware = [];
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
