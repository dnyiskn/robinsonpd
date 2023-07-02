import Link from "next/link";

const HeroImage = () => {
  return (
    <div className="bg-gray-900">
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroImage.jpeg')",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-white">
            Robinson Painting & Decorators
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Quality is remembered long after the price is forgotten
          </p>
          <Link href="/contact">
            <span className="inline-block bg-blue-950 hover:bg-blue-600 text-white font-semibold px-6 py-3 mt-8 rounded cursor-pointer">
              Get an Estimate
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
