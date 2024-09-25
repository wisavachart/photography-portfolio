import { useState } from "react";
import Menu from "../menu/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsmenuOpen(true);
  };
  return (
    <>
      {isMenuOpen && <Menu />}
      <div className="flex justify-between items-center px-4 py-1">
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
