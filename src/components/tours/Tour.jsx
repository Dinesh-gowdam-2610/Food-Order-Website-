import React, { useState } from 'react';
import data from '../data/Data';
import '../css/index.css';
import OrderList from './OrderList';

const Tour = ({ handleIncrement }) => {
  const [clonedData, setClonedData] = useState(data);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0);

  const handleIncrementCount = (id, item) => {
    setCount((prev) => prev + 1);
    handleIncrement(count, id, item);
  };

  // const deleteItem = (id) => {
  //   const finalData = clonedData.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setClonedData(finalData);
  // };

  const descriptionShow = (index) => {
    let cloneData = [...clonedData];
    cloneData[index] = {
      ...cloneData[index],
      readMore: !cloneData[index].readMore,
    };
    setClonedData(cloneData);
  };

  if (clonedData.length === 0) {
    return (
      <>
        <h2>No Photography Left..</h2>
        <button className='reload-Btn' onClick={() => window.location.reload()}>
          Refresh
        </button>
      </>
    );
  }

  return (
    <div className='container'>
      {clonedData &&
        clonedData.map((item, index) => {
          const { id, img, title, desc, category, readMore, price } = item;
          return (
            <div className='container-card' key={id}>
              <h1 className='container-modal-title'>{title}</h1>
              <div className='tour-price-container'>
                <div className='tour-price-container-div'>
                  <span className='tour-price'>{`$ ${price}`}</span>
                </div>
              </div>
              <div>
                <img
                  style={{ width: '300px', height: '200px' }}
                  src={img}
                  alt={category}
                />
                <p className='container-paragraph'>
                  {readMore ? desc : `${desc.substring(0, 100)}...`}
                  <button
                    className='showBtn'
                    onClick={() => descriptionShow(index)}>
                    {readMore ? 'show less' : 'show more'}
                  </button>
                </p>
                <div className='container-interestBtn'>
                  <OrderList
                    orderId={index}
                    order={item}
                    orderListItems={() => handleIncrementCount(id, item)}
                  />
                  {/* <div>
                    <button
                      onClick={() => deleteItem(id)}
                      className='interestBtn'>
                      Not Intrested
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tour;
