const TypoName = () => {
  return (
    <div className=" flex flex-col relative  justify-start items-start px-3">
      <div className="h-fit flex items-center">
        <h1 className="font-popfun leading-none text-yzz_blue text-[100px]">
          YICKZZ
        </h1>
      </div>
      <div className="h-fit flex items-center absolute -bottom-3  left-10">
        <h1 className="font-andersonL leading-none text-yzz_blue text-[30px]">
          PHOTOGRAPHY
        </h1>
      </div>
      <img
        className="h-4 absolute -bottom-1"
        src="/src/assets/icons/plus.svg"
        alt=""
      />
    </div>
  );
};
export default TypoName;
