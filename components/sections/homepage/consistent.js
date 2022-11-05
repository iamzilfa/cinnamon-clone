const Consistent = () => {
  return (
    <div className="pt-[60px] pb-24 lg:pt-[140px] lg:pb-40 lg:relative">
      <div className="pb-8 min-h-[132px]">
        <div className="mx-auto container px-6">
          <div className="font-montbold absolute -left-[10px] -top-[26px] text-[175px] text-symbcolor lg:text-[258px] lg:-top-14 ">
            “
          </div>
          <div className="flex flex-cols lg:flex-row  lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h3 className="text-[32px] mb-8 lg:text-[40px] lg:leading-[56px] leading-[44px] font-normal font-montbold pt-12">
                They &apos;re consistent, and the communication is good.
              </h3>

              <div className="text-[16px] leading-[26px] text-matterhorn mb-8">
                <p className="text-matterhorn text-base leading-[26px]">
                  When I have a deadline, they would work extra hours on the
                  weekend and after hours. Cinnamon gives the impression of
                  being a smaller team that’s focused on customers.
                </p>
              </div>
              <div className="mt-16 lg:flex lg:items-center">
                <div className="w-[68px] mr-6 overflow-hidden rounded-[50%]">
                  <img src="images/image (9).png" alt="" />
                </div>
                <div className="">
                  <h5 className="font-montbold font-normal text-[20px] text-titleblack leading-[30px] lg:text-2xl lg:leading-[36px]">
                    Garin Toren,
                  </h5>
                  <p className="lg:text-base lg:leading-[26px] text-xs leading-[26px] text-titleblack">
                    CEO, ping
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[200px] lg:h-[200px]">
              <img
                src="/images/image (10).png"
                alt=""
                className="lg:w-[200px] lg:h-[67.937px]"
              />
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mt-[46px] flex items-center gap-10">
              <img
                src="/images/arrow-left.png"
                alt=""
                className="h-[27px] w-12"
              />
              <img
                src="/images/arrow-right.png"
                alt=""
                className="h-[27px] w-12"
              />
            </div>
            <div className="mt-8 flex items-center gap-5">
              <img src="/vectors/arrowRight.6bd387a0.svg" alt="" />
              <p className="text-base leading-[26px] font-montbold uppercase text-buttonblue border-b border-b-buttonblue">
                View case study
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consistent;
