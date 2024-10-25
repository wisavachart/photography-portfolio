import useMenuState from "../../store/menuState";
import style from "./pixel.module.css";
import { motion } from "framer-motion";

const PixelBackground = () => {
  const { isMenuOpen } = useMenuState();

  const shuffle = (a: any) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const animation = {
    initial: {
      opacity: 0,
    },
    open: (i: any) => ({
      opacity: 1,
      transition: { duration: 0, delay: 0.005 * i },
    }),
    close: (i: any) => ({
      opacity: 0,
      transition: { duration: 0, delay: 0.005 * i },
    }),
  };

  const getFactor = (screenWidth: number) => {
    let factor = 0.05;
    if (screenWidth >= 1024 && screenWidth <= 1339) {
      factor = 0.03;
    } else if (screenWidth >= 1440 && screenWidth <= 1559) {
      factor = 0.02;
    } else if (screenWidth >= 1600) {
      factor = 0.015;
    } else {
      factor = 0.05;
    }
    return factor;
  };

  const getBlocks = () => {
    const { innerHeight, innerWidth } = window;
    const factor = getFactor(innerWidth);
    const blockSize = innerWidth * factor;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    const delay = shuffle([...Array(amountOfBlocks)].map((_, i) => i));
    return delay.map((randomDelay: any, i: any) => {
      return (
        <motion.div
          key={i}
          variants={animation}
          initial="initial"
          animate={isMenuOpen ? "open" : "close"}
          custom={randomDelay}
          className={style.block}></motion.div>
      );
    });
  };

  return (
    <div className={style.pixelBackground}>
      {[...Array(20)].map((_, i) => {
        return (
          <div className={style.column} key={i}>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
};

export default PixelBackground;
