import { Bars3Icon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b-[0.5px] border-gray-200">
      <h1 className="text-3xl">Danju</h1>
      <nav className="hidden md:flex">
        <ul className="flex items-center space-x-7 text-sm font-bold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <Bars3Icon className="h-6 md:hidden" />
    </header>
  );
}
export default Header;
