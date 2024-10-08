import { HomeGallaryImage } from "../../utils/images";

const HomeGallary = () => {
  return (
    <div className="relative mx-4 flex aspect-square overflow-hidden max_mb:h-[450px] desktop:flex-1 desktop:mr-0 desktop:h-full 2xl:max-w-[700px]">
      <img className="object-cover w-full " src={HomeGallaryImage[0]} alt="" />
    </div>
  );
};
export default HomeGallary;
