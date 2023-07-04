import Link from "next/link";

const Footer = () => {
  return (
    <nav className="bg-gray-800 border-t-[2px] border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-center h-16">
          <div className="block">
            <div className=" flex items-baseline space-x-4">
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

export default Footer;
