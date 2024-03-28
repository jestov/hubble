import React from 'react';
// Asumiendo que Button es un componente previamente definido o importado de una librería
import Button from './Button';

const CTA = ({ titleElement, buttonLabel = "Free consultation", buttonLink = "https://calendly.com/doravaldez" }) => {
  return (
    <section className="w-full rounded-lg mb-24 items-center px-[15px] lg:px-48">
      <div className="container mx-auto p-4 flex flex-col ">
        <div className='w-full bg-secondary bg-opacity-5 border border-secondary border-opacity-10 backdrop-blur-lg text-primary font-violet py-12 px-14 flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-6 rounded-[24px]'>
          <h4 className='text-3xl lg:text-4xl'>{titleElement}</h4>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary !text-lg text-white w-full" href={buttonLink}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
