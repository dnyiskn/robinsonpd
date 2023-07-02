import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className={styles.logo}>
                <Image
                  src="/images/robinsonpdlogoshort.png"
                  alt="Logo"
                  width={50}
                  height={50}
                ></Image>
                <h1>Robinson Painting & Decorators</h1>
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
              <Link href="/about">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  About
                </span>
              </Link>
              {/* Add more links here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
