const Topic = () => {
  return (
    <div className="lg:mb-[160px]">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="lg:mb-16 lg:max-w-[480px] lg:text-[54px] lg:leading-[72px] font-montbold fomt-normal">
          Stay in the loop on tech topics
        </h2>
        <div className="flex overflow-x-auto scrollbar-hide over gap-8 lg:inline-flex">
          <div className=" bg-transparent hover:text-buttonblue">
            <div className="lg:min-w-[75%] lg:max-w-[352px] cursor-pointer block">
              <div className="overflow-hidden mb-6 w-[175.53px] h-[107.69px] lg:w-[352px] lg:h-[215.94px]">
                <img src="/images/Freelance_VS.png" alt="" className="" />
              </div>
              <h4 className="uppercase text-xs leading-[12px] font-montbold text-titleblack">
                sales
              </h4>
              <div className="flex items-center space-x-2 py-4">
                <p className="text-matterhorn text-[16px] leading-[26px] hidden lg:block">
                  Matija Bermanec & L...
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px]">
                  2022-10-13
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px] ">
                  6min
                </p>
              </div>
              <div className="cursor-pointer text-titleblack">
                <h1 className="lg:text-2xl leading-[36px] font-montbold font-normal">
                  Differences in Hiring an Agency vs. Freelancers 2.0
                </h1>
              </div>
            </div>
          </div>

          <div className=" bg-transparent">
            <div className="lg:min-w-[75%] lg:max-w-[352px] cursor-pointer block">
              <div className="overflow-hidden mb-6 w-[175.53px] h-[107.69px] lg:w-[352px] lg:h-[215.94px]">
                <img src="/images/pattern.png" alt="" className="" />
              </div>
              <h4 className="uppercase text-xs leading-[12px] font-montbold text-titleblack">
                development
              </h4>
              <div className="flex items-center space-x-2 py-4">
                <p className="text-matterhorn text-[16px] leading-[26px] hidden lg:block">
                  Samantha Holstead
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px]">
                  2022-10-13
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px]">
                  3min
                </p>
              </div>
              <div className="cursor-pointer text-titleblack">
                <h1 className="lg:text-2xl leading-[36px] font-montbold font-normal">
                  Cinnamon Flutter Template Overview
                </h1>
              </div>
            </div>
          </div>

          <div className=" bg-transparent">
            <div className="lg:min-w-[75%] lg:max-w-[352px] cursor-pointer block">
              <div className="overflow-hidden mb-6 w-[175.53px] h-[107.69px] lg:w-[352px] lg:h-[215.94px]">
                <img src="/images/ikibiriti.png" alt="" className="" />
              </div>
              <h4 className="uppercase text-xs leading-[12px] font-montbold text-titleblack">
                sales
              </h4>
              <div className="flex items-center space-x-2 py-4">
                <p className="text-matterhorn text-[16px] leading-[26px] hidden lg:block">
                  Jan Marin
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px]">
                  2022-09-15
                </p>
                <div class="w-[6px] h-[6px] rounded-[50%] bg-dotColor"></div>
                <p className="text-matterhorn text-[16px] leading-[26px]">
                  10min
                </p>
              </div>
              <div className="cursor-pointer text-titleblack">
                <h1 className="lg:text-2xl leading-[36px] font-montbold font-normal">
                  How Tinder Swindled User Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center gap-5">
          <img src="/vectors/arrowRight.6bd387a0.svg" alt="" />
          <p className="text-base leading-[26px] font-montbold uppercase text-buttonblue border-b border-b-buttonblue">
            View more blogs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
