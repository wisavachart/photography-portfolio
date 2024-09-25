const TypoName = () => {
  return (
    <div className=" flex flex-col relative justify-start items-start px-4 mb-5 lg:flex-1 lg:justify-end ">
      <div className="h-fit flex items-center">
        <h1 className="font-popfun leading-none text-yzz_blue text-[100px] max_mb:text-[160px] lg:text-[200px] xl:text-[300px] 2xl:text-[350px] ">
          YICKZZ
        </h1>
      </div>
      <div className="h-fit flex items-center absolute -bottom-3 left-10 max_mb:left-14 xl:left-16 max_mb:-bottom-4 2xl:-bottom-6">
        <h1 className="font-andersonL leading-none text-yzz_blue text-[30px] max_mb:text-[50px] xl:text-[80px] 2xl:text-[100px] ">
          PHOTOGRAPHY
        </h1>
      </div>
      <img
        className="h-4 max_mb:h-6 xl:h-8  absolute -bottom-1 xl:bottom-0 "
        src="/src/assets/icons/plus.svg"
        alt=""
      />
    </div>
  );
};
export default TypoName;
