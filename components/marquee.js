import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Marquee = ({ words, separator1, separator2 }) => {
  const marqueeRef = useRef();
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    // Make sure the component is mounted and the ref is attached
    if (marqueeRef.current) {
      // Get the width of the content
      const updateWidth = marqueeRef.current.offsetWidth;
      setContentWidth(updateWidth);
    }
  }, [marqueeRef.current, words]); // Depend on marqueeRef.current to re-calculate when it changes
  

  // Cálculo simplificado para la duplicación de contenido
  const displayContent = [...words, ...words]; // Duplica el contenido

  return (
    <div ref={marqueeRef} className="w-full overflow-hidden">
      <div className="animate-marquee flex">
        {displayContent.map((word, index) => (
          <React.Fragment key={index}>
            <span className="text-5xl text-primary font-belgro inline-block mx-10">{word}</span>
            {index % 2 === 0 ? (
              <Image src={separator1} alt="Separator 1" width={20} height={20} className="inline-block" />
            ) : (
              <Image src={separator2} alt="Separator 2" width={20} height={20} className="inline-block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
