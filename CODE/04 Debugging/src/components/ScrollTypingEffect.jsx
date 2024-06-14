import React, { useState, useEffect } from 'react';

function ScrollTypingEffect({ text }) {
 const [visibleText, setVisibleText] = useState('');
 const [startTyping, setStartTyping] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-trigger');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setStartTyping(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
    if (startTyping) {
      let index = 0;
      const interval = setInterval(() => {
        setVisibleText((prevText) => prevText + text.charAt(index));
        index++;
        if (index > text.length - 1) {
          clearInterval(interval);
        }
      }, 100); // Adjust the interval as needed

      return () => clearInterval(interval); // Cleanup on component unmount
    }
 }, [startTyping, text]);

 return <div id="scroll-trigger">{visibleText}</div>;
}

export default ScrollTypingEffect;