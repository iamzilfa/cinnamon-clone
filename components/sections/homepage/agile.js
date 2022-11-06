import Paragraph from "../../Paragraph";

const AgileTeam = () => {
  return (
    <div className="py-24 bg-whitesmoke lg:relative lg:pt-44 lg:pb-40 lg:py-40">
      <div className="hidden lg:block lg:absolute right-0 -bottom-2">
        <img
          src="images/image (5).png"
          alt=""
          className="w-[265px] lg:w-[338px] lg:h-[220px]"
        />
      </div>
      <div className="container mx-auto px-6 max-w-[1120px]">
        <div className="grid lg:grid-cols-2 lg:gap-8">
          <h2 className="text-[40px] leading-[56px] mb-8 font-montbold lg:text-[54px] lg:leading-[72px] text-titleblack">
            Agile team <br /> on demand
          </h2>
          <div className="pt-8  block lg:hidden">
            <img src="images/image (5).png" alt="" className="w-[265px]" />
          </div>
          <Paragraph
            paragraph="By hiring and managing talented people with skills specific to
          your project, we build you a team that’s accomplished, agile
          and scalable in both directions."
          />
        </div>
      </div>
    </div>
  );
};

export default AgileTeam;
