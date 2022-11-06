import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faLoc } from "@fortawesome/free-regular-svg-icons";

const Office = () => {
  return (
    <div className="lg:mt-[140px] lg:mx-auto lg:mb-[160px] lg:overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid gap-14">
          <h2 className="lg:text-[54px] lg:leading-[72px] font-montbold font-normal">
            Our offices
          </h2>
          <div className="overflow-x-inherit">
            <div className="flex gap-8 overflow-x-auto">
              <div className="min-w-[544px]">
                <div>
                  <img src="/images/zagreb.png" alt=""  />
                </div>
                <div className="flex py-8 space-x-3">
                  <div className="mr-3 mt-2">
                    <img src="/vectors/location.svg" alt="" className="h-18 w-18" />
                  </div>
                  <div className=" flex justify-center flex-col">
                    <h2 className="lg:text-2xl lg:leading-[36px] font-montbold font-normal text-titleblack mb-2">Zagreb</h2>
                    <p className="text-matterhorn text-base leading-[26px]">Slavonska avenija 6, 10000, Zagreb, Croatia</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[544px]">
                <div>
                  <img src="/images/new-york.png" alt="" />
                </div>
                <div className="flex py-8 space-x-3">
                  <div className="mr-3 mt-2">
                    <img src="/vectors/location.svg" alt="" className="h-18 w-18" />
                  </div>
                  <div className="flex justify-center flex-col">
                    <h2 className="lg:text-2xl lg:leading-[36px] font-montbold font-normal text-titleblack mb-2">New York</h2>
                    <p className="text-matterhorn text-base leading-[26px]">500 7th Ave, New York, NY 10018, United States</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[544px]">
                <div>
                  <img src="/images/belgrade.png" alt="" />
                </div>
                <div className="flex py-8 space-x-3">
                  <div className="mr-3 mt-2">
                    <img src="/vectors/location.svg" alt="" className="h-18 w-18" />
                  </div>
                  <div className="flex justify-center flex-col">
                    <h2 className="lg:text-2xl lg:leading-[36px] font-montbold font-normal text-titleblack mb-2">Belgrade</h2>
                    <p className="text-matterhorn text-base leading-[26px]">Bulevar vojvode Mišića 37 11000, Belgrade, Serbia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
