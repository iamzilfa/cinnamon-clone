const Service = ({ images, title, subtitle }) => {
  return (
    <div className="flex flex-col gap-y-7">
        <img src={images} alt="" className="w-12 h-12" />
        <h1 className="font-montbold text-[20px] font-normal leading-[30px] text-white">{title}</h1>
        <p className="text-lightgrey text-base leading-[26px] font-montregular">{subtitle}</p>
    </div>
  );
};

export default Service;
