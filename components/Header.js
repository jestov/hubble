import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import Logo from '../components/Logo';
import ChevronIcon from '../components/icons/ChevronIcon';
import LinkedInIcon from '../components/icons/LinkedinIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import InstagramIcon from '../components/icons/InstagramIcon';
import ButtonBook from './ButtonBook';

export default function Menu() {
  const [openSubOptions, setOpenSubOptions] = useState(false);
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Nuevo estado para controlar el menú móvil
  const { pathname, asPath } = useRouter();
  const isHomePage = pathname === '/';
  const router = useRouter();


  const [isMobileView, setIsMobileView] = useState(false); // Estado para determinar si es vista móvil

  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkIfMobileView);
    checkIfMobileView(); // Inicializa en la carga para establecer si es vista móvil

    const handleScroll = () => {
      const main = document.querySelector('main');
      if (main) {
        const mainOffset = main.offsetTop + main.offsetHeight - (main.offsetHeight - 150);
        setIsScrolledPastMain(window.pageYOffset > mainOffset);
      }
    };

    if (isHomePage) { // Solo escucha el evento de scroll en la página de inicio
      window.addEventListener('scroll', handleScroll);
    }

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', checkIfMobileView);
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]); // Agrega isHomePage como dependencia para reinstalar el listener si es necesario

  const isActive = (route) => {
    // Para "Programs" que utiliza un hash en la misma página
    if (route === '/#programs') {
      return asPath === route;
    }
    // Para otras páginas/rutas
    return pathname === route;
  };


  const menuOptions = [
    {
      name: 'Solutions',
      subOptions: ['HR as a Service', 'Hiring', 'Culture', 'OKRs', 'HR Training and Development'],
    },
    { name: 'Programs' },
    { name: 'Blog' },
    { name: 'Careers' },
    { name: 'Contact' },
  ];
  const iconColor = isHomePage ? (isScrolledPastMain ? '#31304F' : (isMobileView ? '#31304F' : '#FFFFFF')) : '#31304F';

  const socialOptions = [
    { name: 'LinkedIn', icon: <LinkedInIcon color={iconColor}/>, link: 'https://www.linkedin.com/company/wehubble' },
    { name: 'Facebook', icon: <FacebookIcon color={iconColor}/>, link: 'https://www.facebook.com/hubblewe' },
    { name: 'Instagram', icon: <InstagramIcon color={iconColor}/>, link: 'https://www.instagram.com/wehubble/' },
  ];

  const detailsRef = useRef(null); // Referencia para el elemento <details>
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // Estado para controlar la rotación del icono

  useEffect(() => {
    // Función para actualizar el estado basado en la apertura/cierre de <details>
    const toggleRotation = () => {
      setIsDetailsOpen(detailsRef.current?.open);
    };

    // Agrega el event listener
    const detailsElement = detailsRef.current;
    detailsElement?.addEventListener('toggle', toggleRotation);

    // Limpieza del event listener
    return () => detailsElement?.removeEventListener('toggle', toggleRotation);
  }, []);


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


  const handleSolucionesClick = (e) => {
    e.preventDefault();
    // Cambia el estado para abrir/cerrar las subopciones.
    // Si ya están abiertas, las cierra. Si están cerradas, las abre.
    setOpenSubOptions(!openSubOptions);
  };
  
  useEffect(() => {
    // Asegúrate de que el menú desplegable se cierre cuando el usuario
    // selecciona una opción del menú, incluso si es una subopción de "Solutions".
    const closeSubOptionsOnRouteChange = () => {
      if (openSubOptions) {
        setOpenSubOptions(false);
      }
    };
  
    router.events.on('routeChangeStart', closeSubOptionsOnRouteChange);
  
    return () => {
      router.events.off('routeChangeStart', closeSubOptionsOnRouteChange);
    };
  }, [openSubOptions, router.events]);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };




// Clases base que siempre se aplican
let baseClasses = "flex flex-col md:flex-row gap-12 md:gap-4 justify-between items-center w-full";

// Clases específicas para cuando se ha desplazado más allá de un punto en la página de inicio
let scrolledClasses = isScrolledPastMain ? "bg-white bg-opacity-90 backdrop-blur-lg text-primary p-5 border-b border-color-gray-200 shadow-sm text-primary" : "p-5 bg-white md:bg-transparent md:text-white";

// Clases específicas para la página de inicio independientemente del desplazamiento
let homePageClasses = isHomePage ? "fixed z-20" : "p-6 !text-primary";

// Combinando las clases
const headerClasses = `${baseClasses} ${scrolledClasses} ${homePageClasses}`;

  return (
    <>
      <nav className={headerClasses}>
        <div className='flex justify-between w-full md:w-auto'> 
        <Logo color={iconColor} />
                <div className="hamburger-icon text-3xl" onClick={toggleMobileMenu}>
                  <span>&#9776;</span> 
                </div>
        </div>
        <div className={`menu-container ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          <div className='flex gap-12 items-center desktop-menu'>
            <ul className='flex gap-12 items-center'>
                {menuOptions.map((option, index) => {
                  const linkPath = option.name === 'Programs' ? '/#programs' : `/${option.name.toLowerCase().replace(/\s+/g, '-')}`;
                  const linkClassName = `text-inherit text-base ${isActive(linkPath) ? 'text-secondary' : ''}`;

                  return (
                    <li key={index} className='relative'>
                      {option.name !== 'Solutions' ? (
                        // Usamos passHref para pasar la herencia del href correctamente a <a>
                        <Link href={linkPath} passHref>
                          <span className={linkClassName} style={{cursor: 'pointer'}}>
                            {option.name}
                          </span>
                        </Link>
                      ) : (
                        // Para 'Solutions', que abre subopciones, seguimos usando un <a>
                        <a href="#" onClick={handleSolucionesClick} className={`text-inherit text-base flex items-center gap-2 ${isActive(`/${option.name.toLowerCase().replace(/\s+/g, '-')}`) ? 'activeClassName' : ''}`}>
                          {option.name} <ChevronIcon color={iconColor} />
                        </a>
                      )}
                      {option.subOptions && openSubOptions && (
                        <ul className='absolute border border-gray-200 rounded-lg p-2 bg-white bg-opacity-60 backdrop-blur-xl gap-4 flex flex-col -left-[20px] min-w-[280px] top-[50px] z-5'>
                        {option.subOptions.map((subOption, subIndex) => (

                            <Link href={`/${option.name.toLowerCase()}/${subOption.toLowerCase().replace(/\s+/g, '-')}`} className='text-primary text-base hover:bg-white hover:bg-opacity-30 cursor-pointer rounded-lg p-3 backdrop-blur-xl' >
                              {subOption}
                            </Link>

                        ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
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
          <div className={`mobile-menu flex flex-col gap-8 pb-6 px-6 items-start w-full ${isMobileMenuOpen ? 'open' : 'closed'}`}>
            <ul className='flex flex-col gap-6'>
              {menuOptions.map((option, index) => {
                if (option.name === 'Solutions') {
                  // Uso de <details> para 'Solutions'
                  return (
                    <details key={index} className='w-full' ref={detailsRef}>
                      <summary className='text-inherit text-xl cursor-pointer flex items-center gap-2'>
                        {option.name} <ChevronIcon color={iconColor} className={`${isDetailsOpen ? 'transform rotate-180' : ''} w-4 h-4`} />
                      </summary>
                      <ul className='flex flex-col gap-3 pl-8 mt-5 text-primary'>
                        {option.subOptions.map((subOption, subIndex) => (
                          <li key={subIndex}>
                            <Link href={`/${option.name.toLowerCase()}/${subOption.toLowerCase().replace(/\s+/g, '-')}`} className='text-primary text-base'>
                                {subOption}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                } else {
                  return (
                    <li key={index} className='relative'>
                      <Link href={option.name === 'Programs' ? '/#programs' : `/${option.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className='text-inherit cursor-pointer text-xl'>{option.name}</span>
                      </Link>
                    </li>
                  );
                }
              })}
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
        </div>
      </nav>
      <style jsx>{`
        .hamburger-icon {
          display: none;
        }
        .desktop-menu {
          display: flex; // Asume un diseño horizontal para escritorio
        }
        .mobile-menu {
          display: none; // Inicialmente oculto en escritorio
        }
        @media (max-width: 768px) {
          .hamburger-icon {
            display: block; // Hace visible el ícono de hamburguesa en móviles
          }
          .desktop-menu {
            display: none; // Oculta el menú de escritorio en móviles
          }

          .menu-container {
            width: 100%;
          }

          .menu-container.open, .menu-container.closed {
            display: flex;
            flex-direction: column;
            align-items: flex-start; // Alinea los elementos del menú a la izquierda
          }
          .menu-container.closed {
            display: none; // Asegura que el menú de escritorio esté oculto cuando debe
          }
          .mobile-menu {
            display: flex; // Hace visible el menú móvil
            flex-direction: column;
            width: 100%;
          }
          .mobile-menu.closed {
            display: none; // Asegura que el menú móvil esté oculto cuando debe
            height: 0;
            visibility: hidden;
          }
        }

        /* Estilo para quitar la flecha predeterminada de <details> */
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
        /* Estilo opcional para ajustar la apariencia del <summary> al expandir */
        .group-open > summary {
          /* Tus estilos aquí */
        }
      `}</style>
    </>
  );
}
