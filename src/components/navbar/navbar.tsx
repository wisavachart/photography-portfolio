import Menu from "../menu/Menu";
import useMenuState from "../../store/menuState";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuState();
  const handleClick = () => {
    setIsMenuOpen();
  };
  return (
    <>
      {/* {isMenuOpen && <Menu />} */}
      <div className="relative flex justify-between items-center px-4 py-1 z-20">
        <h6 className="font-popfun text-[28px]   text-yzz_blue cursor-pointer">
          yzz
        </h6>
        <h6
          onClick={handleClick}
          className="font-andersonR  text-yzz_blue cursor-pointer text-[16px]">
          MENU
        </h6>
      </div>
    </>
  );
};

export default Navbar;
