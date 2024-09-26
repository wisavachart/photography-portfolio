import HomeGallary from "../components/home-gallary/HomeGallary";
import PixelBackground from "../components/pixelbackground/Pixel";
import TypoName from "../components/typo/TypoName";

const Home = () => {
  return (
    <>
      <div className="h-screen content-end ">
        <div className="flex flex-col-reverse desktop:flex-row desktop:h-[90%] 2xl:h-full">
          <HomeGallary />
          <TypoName />
        </div>
      </div>
      <PixelBackground />
    </>
  );
};

export default Home;
