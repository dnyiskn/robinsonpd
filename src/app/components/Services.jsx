const Services = () => {
  return (
    <div id="services">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-950 font-semibold tracking-wide uppercase">
            Painting Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            For your next project, we offer a wide range of painting services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We specialize in residential and commercial painting services, as
            well as decorating services for homes and offices. Our experienced
            team of professionals is dedicated to providing high-quality work
            that meets your unique needs.
          </p>
        </div>

        <div className="mt-10">
          <ul className="space-y-10">
            <li>
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Residential Painting
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We offer residential painting services for homes,
                    apartments, and other commercial properties. Our
                    professional painters use only high-quality materials and
                    techniques to create a unique look for your space.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Commercial Painting
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We offer commercial painting services for offices,
                    warehouses, and other commercial properties. Our
                    professional painters use only high-quality materials and
                    techniques to create a professional image for your brand.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Decorating Services
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We offer decorating services for homes, offices, and other
                    commercial properties. Our professional designers use only
                    high-quality materials and techniques to create a unique and
                    personalized look for your space.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
