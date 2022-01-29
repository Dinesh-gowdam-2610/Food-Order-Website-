import React, { useState } from 'react';
import './App.css';
import Heading from './components/tours/Heading';
import Tour from './components/tours/Tour';
function App() {
  const [count, setCount] = useState([]);
  const [item, setItem] = useState([]);
  const [id, setId] = useState([]);

  const handleIncrementCount = (handleIncrement, id, item) => {
    setCount(handleIncrement);
    setId(id);
    setItem(item);
  };

  return (
    <div className='App'>
      <Heading count={count} orderItem={item} orderId={id} />
      <Tour handleIncrement={handleIncrementCount} />
    </div>
  );
}

export default App;
