// import React, { useRef, useState, useEffect } from 'react';

// function Basic() {
//   const inputRef = useRef(null);
// const [isDragging, setIsDragging] = useState(false);
//   const [offsetX, setOffsetX] = useState(0);
//   const [offsetY, setOffsetY] = useState(0);
//   const [initialX, setInitialX] = useState(0);
//   const [initialY, setInitialY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (isDragging) {
//         setOffsetX(event.clientX - initialX);
//         setOffsetY(event.clientY - initialY);
//       }
//     };

//     const handleMouseUp = () => setIsDragging(false);

//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
//     } else {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging, initialX, initialY]);

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setInitialX(event.clientX - offsetX);
//     setInitialY(event.clientY - offsetY);
//   };

//   return (
//     <div style={{ position: 'relative', width: '100em', height: '100em' }}>
//       <input ref={inputRef} onMouseDown={handleMouseDown}
//         style={{ position: 'absolute', top: `${offsetY}px`, left: `${offsetX}px`, cursor: isDragging ? 'grabbing' : 'grab',}}
//       />
//     </div>
//   );
// }

// export default Basic;

import React, { useState } from 'react';

export default function InputSorting() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const Data = () => {
    const DataArray = inputValue.split(',').map(item => item)
    const combinedData = [...data, ...DataArray];
    setData(combinedData);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={Data}>Enter</button>
      <div className="sorted-list">
      {data.map((item, index) => 
        <div key={index} style={{ width: '5em', marginLeft: index % 2 !== 0 && '5em' }}>{item}</div>
    )}
       
      </div>
    </div>
  );
}
