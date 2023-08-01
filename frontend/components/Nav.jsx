import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full px-2 flex justify-between items-center">
      <div className="py-2 text-sky-400 font-bold text-2xl">
        <Link href="/">
          <span className="text-2xl text-sky-400 font-bold py-2">Server </span>Configurator
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
