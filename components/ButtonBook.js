import Link from 'next/link';
import CalendarIcon from './icons/Calendaricon';

export default function ButtonBook({ children, href, className }) {
    return (
      <Link href={href} >
        <div className={`flex text-base items-center gap-2 bg-gradient-to-r from-green to-secondary text-white text-violet font-semibold py-2 px-5 rounded-full hover:from-secondary hover:to-green cursor-pointer transition duration-300 ${className}`}>
          <span className="inline-block mr-2"><CalendarIcon /></span>
          {children}
        </div>
      </Link>
    );
  }
  