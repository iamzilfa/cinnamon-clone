import Service from "../../Service";

const Services = () => {
  return (
    <div className="bg-footerBanner text-white bg-blackrussian py-24 lg:pt-44 lg:pb-40">
      <div className="px-6 mx-auto container">
        <div>
          <div className="grid lg:grid-cols-2 lg:gap-8">
            <div className=" lg:mb-72px] ">
              <h1 className="font-montbold text-[40px] lg:text-[54px] lg:leading-[72px]  leading-[56px] font-normal">
                Our services
              </h1>
            </div>
            <div className="grid gap-16  lg:gap-y-[120px]">
              <div className="grid  gap-16 lg:grid-cols-2 lg:gap-x-32">
                <div>
                  <Service
                    images={"/images/image (2).png"}
                    title="Product design"
                    subtitle="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
                  ></Service>
                </div>
                <div>
                  <Service
                    images={"/images/image (3).png"}
                    title="Development"
                    subtitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
                  ></Service>
                </div>
              </div>
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-32 items-center">
                <div>
                  <Service
                    images={"/images/image.png"}
                    title="Quality assurance"
                    subtitle="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
                  ></Service>
                </div>
                <div>
                  <Service
                    images={"/images/image (1).png"}
                    title="Marketing & growth"
                    subtitle="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
                  ></Service>
                </div>
              </div>
              <div>
                <button className="bg-buttonblue text-white flex justify-center items-center cursor-pointer text-base border-2 border-buttonblue  font-sans  w-[238.312px] h-12">
                  See our services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
