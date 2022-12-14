const Button = ({ children ="hf", primary, className }) => {
  return (
    <div>
      <button
        className={`${
          primary
            ? "bg-bgButton text-white flex justify-center items-center cursor-pointer text-base border-2 border-bgButton hover:bg-white hover:text-buttonblue font-sans px-8 pt-4 pb-3"
            : "bg-red-400"
        } ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
