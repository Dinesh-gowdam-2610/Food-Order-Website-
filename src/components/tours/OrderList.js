import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/index.css';
import { useSelector } from 'react-redux';

function OrderList({ orderId, order }) {
  const dispatch = useDispatch();
  let count = 0;
  const cartItems = useSelector((state) => state.cart.items);
  console.log(`OrderList`, cartItems);
  cartItems.forEach((el) => (order.id === el.id ? (count = el.count) : count));

  const addToCart = () => {
    // console.log(order)
    dispatch({
      type: 'ADD_TO_CART',
      data: order,
    });
  };

  const cancelItem = () => {
    dispatch({ type: 'CANCEL_ITEM', data: order });
  };

  return (
    <div>
      <div>
        <button className='interestBtn' value={orderId} onClick={addToCart}>
          +
        </button>
      </div>
      <div>{count}</div>
      <div>
        <button className='interestBtn' value={orderId} onClick={cancelItem}>
          -
        </button>
      </div>
    </div>
  );
}

export default OrderList;
