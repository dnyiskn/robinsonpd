import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b-[2px] border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className={styles.logo}>
                <Image
                  src="/images/robinsonpdlogoshort.png"
                  alt="Logo"
                  width={30} // Adjust the width as per your requirement
                  height={30} // Adjust the height as per your requirement
                />
                <h1 className="font-serif text-2xl sm:text-lg text-white">
                  Robinson Painting & Decorators
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/#about">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/#contact">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
