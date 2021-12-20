import React, { useState } from 'react';
 
function Calculate() {
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)

  function averageCount(v) {
    setAverage(prevAverage => (prevAverage + v))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements
    setCount(prevCount => prevCount + 1)

    averageCount(parseInt(value.value))
  }

  return (
    <div className="calculate">
      <form onSubmit={handleSubmit}>
        <input type="number" id="value"/>
        <button type="submit">Submit</button>
      </form>
      <span>total: {average} average: {average/count}</span>
    </div>
  );
}

export default Calculate;
