const FooterMenu = () => {
  return (
    <>
      <div className="p-2 mx-auto flex gap-8 w-full justify-center text-yzz_blue desktop:hidden">
        <h6 className="cursor-pointer">WORK</h6>
        <h6 className="cursor-pointer">ABOUT</h6>
        <h6 className="cursor-pointer">CONTACT</h6>
      </div>
      <div className="hidden py-2 mx-auto desktop:flex gap-8 w-full justify-start text-yzz_blue px-4 ">
        <h6>Copyright © 2024 Yickzz-Photographer</h6>
      </div>
    </>
  );
};

export default FooterMenu;
