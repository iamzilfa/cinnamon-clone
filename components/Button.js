const Button = ({ children, primary, className }) => {
  return (
    <div>
      <button
        className={`${
          primary
            ? "bg-buttonblue text-white flex justify-center items-center cursor-pointer text-base border-2 border-buttonblue  font-sans  w-[343px] h-12"
            : "bg-red-400"
        } ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
