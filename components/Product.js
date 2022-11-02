const Product = ({ images, title, subtitle, tags, className }) => {
  return (
    <div className="flex flex-col gap-y-5 mb-16">
      <div className={`group ${className}`}>
        <img
          src={images}
          alt=""
          className="group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="uppercase flex flex-wrap items-center gap-5 text-xs leading-3 text-[#666666] font-montbold">
          {tags.map((el, key) => (
            <div key={key}>{el}</div>
          ))}
        </div>
        <h1 className="text-titleblack text-[32px] font-montbold leading-[44px]">
          {title}
        </h1>
        <p className="text-matterhorn text-base leading-[26px] font-montregular">{subtitle}</p>
      </div>
    </div>
  );
};

export default Product;
