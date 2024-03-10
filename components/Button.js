import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function Button({ children, href, className }) {
    return (
      <Link href={href} >
        <div className={`flex text-sm justify-between items-center gap-2 font-semibold py-2 px-5 rounded-full hover:bg-opacity-95 cursor-pointer  ${className}`}>
        {children}
        <span className="inline-block ml-2"><ArrowIcon /></span>
        </div>
      </Link>
    );
  }
  