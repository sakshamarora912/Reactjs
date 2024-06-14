import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

function ScrollTriggeredTypewriter({ text }) {
 const [isTyping, setIsTyping] = useState(false);
 const ref = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsTyping(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
    <div ref={ref}>
      {isTyping && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(text).start();
          }}
        />
      )}
    </div>
 );
}

export default ScrollTriggeredTypewriter;
