import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="bg-gray-800 border-t-[2px] border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-center h-16">
          <div className="block">
            <div className=" flex items-baseline space-x-4">
              <Link href="/">
                <FaFacebook color="white" />
              </Link>
              <Link href="/#about">
                <FaTwitter color="white" />
              </Link>
              <Link href="/#contact">
                <FaInstagram color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
