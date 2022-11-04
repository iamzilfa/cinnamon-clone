import Paragraph from "../../Paragraph";

const College = () => {
  return (
    <div className="py-24 bg-white lg:py-40 lg:relative">
      <div className="hidden lg:block absolute right-0 -bottom-[13px]">
        <img
          src="/images/image (7).png"
          alt=""
          className="lg:w-[556px] lg:h-[402px]"
        />
      </div>
      <div className="mx-auto container">
        <div className="px-6 container mx-auto">
          <div className="grid lg:grid-cols-3 lg:items-center lg:gap-8">
            <div className="">
              <img
                src="/images/image (8).png"
                alt=""
                className="lg:w-[300px]"
              />
            </div>
            <Paragraph
              paragraph="Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.
         "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
