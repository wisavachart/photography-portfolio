import useMenuState from "../../store/menuState";
import { motion } from "framer-motion";
const Menu = () => {
  const { setIsMenuOpen } = useMenuState();
  const handleClick = () => {
    setIsMenuOpen();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-yzz_blue w-screen h-screen px-4 flex flex-col justify-between absolute z-50 top-0">
      <div>
        <h6
          onClick={handleClick}
          className="font-popfun text-[28px] text-white mt-1 cursor-pointer">
          yzz
        </h6>
      </div>
      <div>
        <h1 className="text-yzz_green text-[150px] leading-none font-popfun hover:text-white">
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
    </motion.div>
  );
};

export default Menu;
