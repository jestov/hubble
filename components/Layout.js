import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappIcon from './icons/WhatsappIcon';
import Link from 'next/link';
import Button from '../components/Button';


export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);


  

  return (
    <div className="relative font-violet overflow-hidden box-border">
      <Header />
      <div className="flex flex-col items-center w-full mx-auto">
        {children}
      </div>
      <Footer />
      <Link href="https://web.whatsapp.com/send?phone=528112776495" target="_blank" className='z-5'>
        <WhatsappIcon className='fixed z-5 bottom-10 left-10 w-14 h-14 cursor-pointer'/>
      </Link>
      <div className='bg-secondary fixed z-5 right-6 bottom-6 w-[400px] min-h-32 rounded-tl-[45px] text-white p-7 flex flex-col gap-6'>
        <h4 className='font-violet'>Have HR difficulties? <br /> Contact us to explore potential solutions.</h4>
        <Button href="https://calendly.com/doravaldez" className="bg-white text-primary hover:bg-gray-100">Book your free consultation</Button>
      </div>
    </div>
  );
}
