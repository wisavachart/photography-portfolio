import useMenuState from "../../store/menuState";

const Menu = () => {
  const { setIsMenuOpen } = useMenuState();
  const handleClick = () => {
    setIsMenuOpen();
  };
  return (
    <div className="bg-yzz_blue w-screen h-screen px-4 flex flex-col justify-between absolute z-50 top-0">
      <div>
        <h6
          onClick={handleClick}
          className="font-popfun text-[28px]  text-white cursor-pointe mt-2 cursor-pointer">
          yzz
        </h6>
      </div>
      <div>
        <h1 className="text-yzz_green text-[150px] leading-none font-popfun">
          HOME
        </h1>
        <h1 className="text-yzz_green text-[150px] leading-none font-popfun">
          WORK
        </h1>
        <h1 className="text-yzz_green text-[150px] leading-none font-popfun">
          ABOUT
        </h1>
        <h1 className="text-yzz_green text-[150px] leading-none font-popfun">
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default Menu;
