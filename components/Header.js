import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-[0.5px] p-4 border-gray-200">
      <div className="relative w-[80px] h-[80px] overflow-hidden">
        <Image src="/assets/images/logo.png" fill alt="logo" />
      </div>

      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-7 font-bold">
          <Link href="/" className="text-xs">
            HOME
          </Link>
          <Link href="/" className="text-xs">
            ABOUT
          </Link>
          <Link href="/" className="text-xs">
            PROJECTS
          </Link>
          <Link href="/" className="text-xs">
            CONTACT
          </Link>
        </ul>
      </nav>
      <Bars3Icon className="h-8 md:hidden font-bold" />
    </header>
  );
}
export default Header;
