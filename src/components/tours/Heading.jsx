import React, { useState } from 'react';
import { Modal } from 'antd';
import '../css/index.css';
import { useSelector } from 'react-redux';

function Heading({ orderId }) {
  const [visible, setVisible] = useState(false);

  let totalCartAmount = 0;
  let count = 0;
  const cartItems = useSelector((state) => state.cart.items);
  cartItems.forEach((el) => (count += el.count));

  cartItems.forEach((el) => (totalCartAmount += el.count * el.price));

  const renderPosts = () => {
    return cartItems.map((item) => {
      const { id, img, title, category } = item;
      console.log('item.length', cartItems);
      return (
        <div
          className='container-modal'
          key={id}
          // onClick={() => this.onOpenModal(id)} // Pass the id of the clicked post
        >
          <div className='container-card' key={id}>
            <h1 className='Item-title'>
              {title} x {item.count}
            </h1>
            <div>
              <img
                style={{ width: '300px', height: '200px' }}
                src={img}
                alt={category}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div>
        <div className='container-header'>
          <h1 className='heading'>
            Food Festival{' '}
            {
              <img
                style={{ width: '50px', marginBottom: '6px' }}
                src='data:image/jpeg;base64,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'
                alt=''
              />
            }
          </h1>
          <i
            className='fa fa-cart-plus cart-icon'
            value={orderId}
            onClick={() => setVisible(true)}>
            {' '}
            <span>{count}</span>
          </i>
          <Modal
            title='Ordered Items List'
            centered
            visible={visible}
            footer={null}
            onCancel={() => setVisible(false)}
            width={700}>
            <div>{renderPosts()}</div>
            {cartItems.length > 0 && (
              <div className='Item-OrderNow'>
                <h2 className='container-total-price'>
                  Total: {`$ ${totalCartAmount.toFixed(2)}`}
                </h2>
                <button className='Item-OrderNow-Button'>Order Now</button>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Heading;
