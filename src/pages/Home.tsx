import FooterMenu from "../components/footerMenu/FooterMenu";
import HomeGallary from "../components/home-gallary/HomeGallary";
import TypoName from "../components/typo/TypoName";

const Home = () => {
  return (
    <section>
      <TypoName />
      <HomeGallary />
      <FooterMenu />
    </section>
  );
};

export default Home;
