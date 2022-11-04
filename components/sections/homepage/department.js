import Button from "../../ui/Button";

const Department = () => {
  return (
    <div className="bg-whitesmoke py-24 lg:py-[245px]">
      <div className="px-6 container mx-auto">
        <h2 className="text-[40px] leading-[56px] mb-4 font-montbold font-normal text-titleblack lg:mb-8 lg:text-[54px] lg:leading-[72px]">
          Who we are
        </h2>
        <div className="hidden lg:block mb-6 lg:absolute lg:right-0 lg-top[50%]">
          <img
            src="/images/image (6).png"
            alt=""
            className="lg-w-[340px] lg:h-[539.212px]"
          />
        </div>
        <p className="text-base leading-[26px] mb-8 max-w-md text-matterhorn lg:mb-16">
          Meet our international teams made up of 86 innovators, branched into 8
          departments, that influence the market throughout 20 different
          countries.
        </p>
        <div className="block lg:hidden mb-6 max-w-[280px]">
          <img src="/images/image (6).png" alt="" />
        </div>
        <div className="lg:flex lg:gap-40">
          <div className="hidden lg:flex lg:flex-col lg:flex-wrap lg:max-h-[310px] lg:w-[70%] lg:mb-[72px]">
            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Product design
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Web development
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Mobile development
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Quality assurance
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Marketing
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Project management
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Human resources
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Sales
            </p>

            <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
              Fluffy friends
            </p>
          </div>
        </div>

        <Button primary>Read About Us</Button>
      </div>
    </div>
  );
};

export default Department;
