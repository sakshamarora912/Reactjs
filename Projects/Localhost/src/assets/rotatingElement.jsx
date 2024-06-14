import React, { useEffect, useRef } from 'react';

const RotatingElement = () => {
 const svgRef = useRef(null);

 useEffect(() => {
    const el = svgRef.current;

    el.addEventListener('mousemove', (e) => {
      const yRotation = 20 * ((e.layerX - el.clientHeight / 2) / el.clientHeight);
      const xRotation = -20 * ((e.layerY - el.clientWidth / 2) / el.clientWidth);
      el.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    })

    el.addEventListener('mouseout', () => {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
     });
     
     el.addEventListener('mousedown', () => {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
     });
     
     el.addEventListener('mouseup', () => {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
     });
 }, []);

 return <div className="svg" ref={svgRef}></div>;
};

export default RotatingElement;