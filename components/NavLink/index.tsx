import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkTypes } from './types'

const NavLink:React.FC<NavLinkTypes> = ({ path, name, className, style, isOnlyView = false }) => {
  const router = useRouter();
  return (
    <>
      {
        isOnlyView &&
        <Link
          href={'/'}
        >
          <a  className={` text-white text-base  text-dark font-normal cursor-pointer transition border-primary hover:border-b before:block before:transition before:absolute before:-bottom-1.5   before:bg-dark  before:h-line before:transform before:scale-x-0 relative before:w-full hover:before:scale-x-1 ${className}`}>
          {name}
          </a>
        </Link>

      }
      {
        !isOnlyView &&
        <Link href={path} passHref>
          <a
            className={`px-5 text-dark font-light cursor-pointer hover:text-primary ${className}`}
          >
            {name}
          </a>
        </Link>
      }
    </>
  );
};

export default NavLink;
