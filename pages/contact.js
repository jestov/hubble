import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import React, { useState } from "react";
import ArrowIcon from '../components/ArrowIcon';
import Link from 'next/link';
import LocationIcon from '../components/icons/LocationIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import MailIcon from '../components/icons/MailIcon';  

export function Contact() {


    const [formSubmitted, setFormSubmitted] = useState(false);
    const fields = [
      { id: "name", type: "text", required: true, placeholder: "Full Name" },
      { id: "email", type: "email", required: true, placeholder: "email@example.com" },
      { id: "phone", type: "phone", required: true, placeholder: "000 000 00 00" },
      { id: "company", type: "text", required: false, placeholder: "Company Name" },
      { id: "message", type: "textarea", required: true, placeholder: "Describe how can we help to you or your company" },
    ];


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                //access_key: "test",
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                company: e.target.company.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormSubmitted(true);
          
            setTimeout(() => {
              setFormSubmitted(false);
            }, 10000); 
        }
    }

    if (formSubmitted) {
      return <div className="bg-white bg-opacity-15 shadow-sm p-5 text-base text-primary" role="alert">Thank you for submitting the form. We will be in touch soon!</div>;
    }
  
    return (
      <form onSubmit={handleSubmit} className={formSubmitted ? "hidden" : "flex flex-col gap-6 w-full items-start bg-white bg-opacity-20 p-12 rounded-[24px] shadow-md"}>

        {fields.map(field => (
          <div key={field.id} className="flex flex-col gap-4 w-full">
            <label htmlFor={field.id} className="block text-base font-medium text-primary uppercase tracking-widest">{field.id.charAt(0).toUpperCase() + field.id.slice(1)}{field.required ? ' *' : ''}</label>
            {field.type === "textarea" ? (
              <textarea name={field.id} required={field.required} rows="3" placeholder={field.placeholder} className="px-6 py-5 w-full rounded-[12px] bg-white bg-opacity-60 shadow-sm tracking-wide text-base"></textarea>
            ) : (
              <input type={field.type} name={field.id} required={field.required} placeholder={field.placeholder} className="px-6 py-5 w-full rounded-[12px] bg-white bg-opacity-60 shadow-sm tracking-wide text-base" />
            )}
          </div>
        ))}
        <legend className='text-base text-secondary mb-2'>Fields marked with an * are required.</legend>
        <button type="submit" className="flex text-sm justify-between items-center gap-2 font-semibold py-3 px-5 min-w-1/3 rounded-full hover:bg-opacity-95 cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary !text-lg text-white">
        <div>
          Send Message
          </div>
        <span className="inline-block ml-2"><ArrowIcon /></span>
        
        </button>
      </form>
    );
}

export default function Index({ posts, globalData }) {



  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />

      <section className="flex flex-col lg:flex-row gap-8 my-20 lg:my-40 max-w-7xl mx-auto min-w-[70vw] items-start px-[30px]">
        <div className='flex flex-col gap-12 items-start w-full'>
          <h2 className="text-4xl lg:text-5xl font-violet text-primary relative">
            <span className='z-10 relative'>Contact Us</span>
            <span className="absolute bottom-1.5 z-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-300"></span>
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 font-violet text-primary max-w-xl">
          We want to help you grow your company, add value and add to your strategy. We would love to assist you and meet your needs.
          </p>
          <div className='flex flex-col gap-8'>
            <Link href="tel:+52 81 1498 9796" className='text-primary tracking-wider text-opacity-80 uppercase text-sm flex gap-4 items-center' target='_blank'><PhoneIcon /><span>+52 81 1498 9796</span></Link>
            <Link href="mailto:hola@wehubble.com" className='text-primary text-opacity-80 tracking-wider uppercase text-sm flex gap-4 items-center' target='_blank'><MailIcon />HOLA@WEHUBBLE.COM</Link>
            <Link href="https://maps.app.goo.gl/wcBw4eTjUSTRKdTx9" className='text-primary text-opacity-80 tracking-wider uppercase text-sm flex gap-4 items-start' target='_blank'>
              <LocationIcon />Av. Lazaro Cardenas 2400, Zona San Agustin,
C.P. 66278, San Pedro Garza García, Nuevo León, México</Link>
          </div>
        </div>
        <Contact />
        </section>

      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData }};
}
