import Button from "../../ui/Button";

const Together = () => {
  return (
    <div className="bg-whitesmoke relative">
      <div className="hidden lg:block absolute bottom-0 left-0">
        <img src="images/image (4).png" alt="" className="w-[428px]" />
      </div>
      <div className="mx-auto container max-w-[1120px]">
        <div className="flex flex-col items-center gap-y-14 lg:py-[160px]">
          <div className="flex flex-col text-titleblack items-center lg:flex-col-reverse text-[40px] lg:text-[54px] lg:leading-[72px] font-montbold text-center leading-[56px] px-6 pt-8">
            <h1>Let &apos;s work together.</h1>
            <h1 className="hidden lg:block">Have a project in mind?</h1>
          </div>
          <div>
            <Button primary className="w-[170px]">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="block lg:hidden">
          <img src="images/image (4).png" alt="" className="w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Together;
