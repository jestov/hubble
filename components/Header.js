import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import ChevronIcon from '../components/icons/ChevronIcon';
import LinkedInIcon from '../components/icons/LinkedinIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import ButtonBook from './ButtonBook';

export default function Menu() {
  const [openSubOptions, setOpenSubOptions] = useState(false);
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  const menuOptions = [
    {
      name: 'Solutions',
      subOptions: ['HR as a Service', 'Hiring', 'Cultura', 'OKRs', 'HR Training and Development'],
    },
    { name: 'Programs' },
    { name: 'Blog' },
    { name: 'Careers' },
    { name: 'Contact' },
  ];
  const iconColor = isHomePage ? (isScrolledPastMain ? '#31304F' : '#FFFFFF') : '#31304F';

  const socialOptions = [
    { name: 'LinkedIn', icon: <LinkedInIcon color={iconColor}/>, link: 'https://www.linkedin.com/company/wehubble' },
    { name: 'Facebook', icon: <FacebookIcon color={iconColor}/>, link: 'https://www.facebook.com/hubblewe' },
    { name: 'Instagram', icon: <InstagramIcon color={iconColor}/>, link: 'https://www.instagram.com/wehubble/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Intenta obtener el elemento 'main'
      const main = document.querySelector('main');
    
      // Verifica si 'main' existe antes de continuar
      if (main) {
        const mainOffset = main.offsetTop + main.offsetHeight - (main.offsetHeight-150);
        if (window.pageYOffset > mainOffset) {
          setIsScrolledPastMain(true);
        } else {
          setIsScrolledPastMain(false);
        }
      }
    };

    // Añadir el event listener
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejador para clic en 'Soluciones'
  const handleSolucionesClick = (e) => {
    e.preventDefault();
    setOpenSubOptions(!openSubOptions);
  };

// Clases base que siempre se aplican
let baseClasses = "flex justify-between items-center fixed z-20 w-full";

// Clases específicas para cuando se ha desplazado más allá de un punto en la página de inicio
let scrolledClasses = isScrolledPastMain ? "bg-white bg-opacity-90 backdrop-blur-lg text-primary p-5 border-b border-color-gray-200 shadow-sm" : "text-white p-8";

// Clases específicas para la página de inicio independientemente del desplazamiento
let homePageClasses = isHomePage ? "" : "bg-white !text-primary p-6 border-b border-color-gray-200 shadow-sm !p-6";

// Combinando las clases
const headerClasses = `${baseClasses} ${scrolledClasses} ${homePageClasses}`;

  return (
    <>
      <nav className={headerClasses}>
        <Logo color={iconColor} />
        <div className='flex gap-12 items-center'>
          <ul className='flex gap-12 items-center'>
            {menuOptions.map((option, index) => (
              <li key={index} className='relative'>
                {option.name !== 'Solutions' ? (
                  <Link href={`/${option.name.toLowerCase().replace(/\s+/g, '-')}`} className='text-inherit text-base'>
                    {option.name}
                  </Link>
                ) : (
                  <a href={`/${option.name.toLowerCase().replace(/\s+/g, '-')}`} onClick={handleSolucionesClick} className='text-inherit text-base flex items-center gap-2'>
                    {option.name} <ChevronIcon color={iconColor} />
                  </a>
                )}
                {option.subOptions && openSubOptions && (
                  <ul className='absolute border border-gray-200 rounded-lg p-2 bg-white bg-opacity-60 backdrop-blur-xl gap-4 flex flex-col -left-[20px] min-w-[280px] top-[50px] z-5'>
                    {option.subOptions.map((subOption, subIndex) => (
                      <li key={subIndex} className='hover:bg-white hover:bg-opacity-30 cursor-pointer rounded-lg p-3 ackdrop-blur-xl'>
                        <Link href={`/${option.name.toLowerCase()}/${subOption.toLowerCase().replace(/\s+/g, '-')}`} className='text-primary text-base'>
                          {subOption}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className='flex items-center gap-4'>
            {socialOptions.map((social, index) => (
              <li key={index}>
                <Link href={social.link} target='_blank' className='text-inherit'>
                    {social.icon}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonBook href="https://calendly.com/doravaldez">
            Free consultation
          </ButtonBook>
        </div>
      </nav>
    </>
  );
}
