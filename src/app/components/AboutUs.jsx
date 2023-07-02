import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="py-16 bg-gray-100">
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
                <div className="flex-shrink-0">
                  <Image
                    src="/images/paulbio.jpeg" // Replace with the actual path to the image
                    alt="Paul Robinson Jr"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Paul Robinson Jr
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  “Hi my name is Paul Robinson. I am the owner of Robinson
                  Painting & Decorators. My role in the business is the day to
                  day operations. I will be on the job from start to finish
                  personally making sure everything is done properly. I have
                  been in the trade for 15 + years. I have done everything from
                  residential home to submarines for the Navy. I believe in
                  quality product for a quality price. I value the relationship
                  with the customer and building a foundation to last.”
                  <br />
                  Paul has been married to his wife for 10 years and they share
                  2 beautiful children. He enjoys football both college and
                  professional. He is a dedicated Bostonian fan from football to
                  hockey. When he’s not working to provide quality painting Paul
                  also enjoys traveling and a great concert.
                  <br />
                  “My goal will always be to provide a life for my family while
                  also providing a quality service to yours”
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/lindseybio.jpeg"
                    alt="Person 2"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
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
