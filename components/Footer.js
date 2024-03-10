import Logo from "./Logo";
import Link from 'next/link';
import LinkedInIcon from '../components/icons/LinkedinIcon';
import FacebookIcon from '../components/icons/FacebookIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

const socialOptions = [
  { name: 'LinkedIn', icon: <LinkedInIcon color="#fff" />, link: 'https://www.linkedin.com/company/wehubble' },
  { name: 'Facebook', icon: <FacebookIcon color="#fff" />, link: 'https://www.facebook.com/hubblewe' },
  { name: 'Instagram', icon: <InstagramIcon color="#fff" />, link: 'https://www.instagram.com/wehubble/' },
];

const menuItems = [
  {
    title: "Our solutions",
    links: [
      { name: "HR as a Service", href: "#" },
      { name: "Hiring", href: "#" },
      { name: "People & culture", href: "#" },
      { name: "OKRS", href: "#" },
      { name: "HR Training & Development", href: "#" },
    ],
  },
  {
    title: "Our programs",
    links: [
      { name: "Hubble Partners", href: "#" },
      { name: "Hubble Benefits", href: "#" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const footerInfo = [
  { text: "+52 81 1498 9796", href: "#" },
  { text: "HOLA@WEHUBBLE.COM", href: "mailto:hola@wehubble.com" },
];

const policyLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="py-16 flex flex-col py-24 px-48 justify-center gap-32 text-white bg-[url('/img/footer-bg.jpg')] bg-cover min-h-[80vh]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-14 min-w-[250px]">
          <Logo color="#fff" />
          <ul className="flex flex-col gap-3 uppercase tracking-widest font-violet text-sm">
            {footerInfo.map((info, index) => (
              <li key={index}>
                <Link href={info.href} className="hover:text-gray-200">
                  {info.text}
                </Link>
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
        </div>
        {menuItems.map((menu, index) => (
          <div key={index} className="flex flex-col gap-10 min-w-[250px]">
            <h3 className="font-violet tracking-widest uppercase text-sm">{menu.title}</h3>
            <ul className="flex flex-col gap-3 font-violet text-2xl font-medium">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.href} className="hover:text-gray-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <ul className="flex gap-6 uppercase tracking-widest font-violet text-sm">
            {policyLinks.map((policy, index) => (
              <li key={index}>
                <Link href={policy.href} className="hover:text-gray-200">
                  {policy.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} WeHubble.
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
