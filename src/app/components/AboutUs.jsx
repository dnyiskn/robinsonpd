import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-100 text-center" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            The mission of Robinson Painting & Decorators is to provide
            top-quality interior and exterior residential, commercial painting
            services.
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex-shrink-0 flex justify-center">
                  <Image
                    src="/images/paulbio.jpeg" // Replace with the actual path to the image
                    alt="Paul Robinson Jr"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Paul Robinson Jr
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  “Hi my name is Paul Robinson, owner of Robinson Painting &
                  Decorators. I have been in the trade for 15 + years with
                  experience ranging from million dollar residential homes to
                  billion dollar submarines for the Navy. Rest assured, I will
                  be on the job from start to finish—personally making sure
                  everything is done properly. I believe in a quality product
                  for a quality price, and value relationship building with our
                  customers - building a foundation to last.
                  <br />
                  Paul has been married to his wife for over a decade and they
                  share two beautiful children. He is an avid football fan on
                  both the college and professional level, and a dedicated
                  Bostonian fan —everything from baseball to hockey. When he’s
                  not working to provide quality painting, Paul also enjoys
                  traveling and a great concert. “My goal will always be to
                  provide a life for my family while also providing a quality
                  service to yours.”
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex flex-shrink-0 justify-center">
                  <Image
                    src="/images/lindseybio.jpeg"
                    alt="Person 2"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Lindsey Robinson
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Lindsey has been in the healthcare management field for over
                  20+ years with a bachelors degree in Business Administration
                  Management and a Masters in Healthcare Management from
                  University of Massachusetts Dartmouth. It was a no brainer
                  that Paul would involve his wife as the head of the company
                  and team player of operations. With his experience in the
                  field and her experience in management world it made the most
                  sense to create a business of their own. Her experience in the
                  healthcare field as an operations manager allowed her to
                  oversee student operations at Tufts University School of
                  Medicine as well as managing multiple practices throughout the
                  years. Lindsey brings a fine sharp grasp of what the customer
                  wants and focuses her attention on making sure that is done
                  first and foremost and that the customer is always happy with
                  their investment. On her off time Lindsey is a mother of 2
                  beautiful children having best of both worlds with a son and a
                  daughter. They both keep her very busy with baseball at Ocee
                  Park and football as well as her little girls dance and
                  gymnastics classes. Lindsey enjoys traveling and cooking and
                  great concerts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
