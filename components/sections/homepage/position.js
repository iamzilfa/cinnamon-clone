import Button from "../../ui/Button";

const Position = () => {
  return (
    <div className="bg-footerBanner bg-blackrussian py-24">
      <div className="mx-auto container px-6 max-w-[1120px]">
        <div className="grid lg:grid-cols-2 lg:gap-64">
          <div className="mb-16 flex flex-col space-y-8">
            <h1 className="text-[40px] leading-[56px] text-greywhite font-normal font-montbold lg:mb-6 lg:text-[54px] ">
              We’re growing
            </h1>
            <p className="text-base leading-[26px] text-lightgrey font-sans">
              Jump on board with Cinnamon and get the privilege of working on
              challenging projects for leading global companies! Make the world
              a better, more connected place.
            </p>
            <Button primary>See All Positions</Button>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                  Android Developer
                </p>
                <img src="/images/arrowRightWhite.png" alt="" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                  Android Developer
                </p>
                <img src="/images/arrowRightWhite.png" alt="" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                  Backend Development Team Lead
                </p>
                <img src="/images/arrowRightWhite.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
