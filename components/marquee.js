import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Marquee = ({ words, separator1, separator2 }) => {
  const marqueeRef = useRef();
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    // Asume un ancho estimado por palabra y separador para inicializar el estado
    const estimateWidth = words.join('').length * 10 + words.length * 40;
    setContentWidth(estimateWidth);
  }, [words]);

  // Cálculo simplificado para la duplicación de contenido
  const displayContent = [...words, ...words]; // Duplica el contenido

  return (
    <div ref={marqueeRef} className="w-full overflow-hidden">
      <div className="animate-marquee flex">
        {displayContent.map((word, index) => (
          <React.Fragment key={index}>
            <span className="text-6xl text-primary font-belgro inline-block mx-10">{word}</span>
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
