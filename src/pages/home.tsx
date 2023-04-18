import { Header } from "../layouts/Header";
import { HomeSectionHero } from "../components/home/HomeSectionHero";
import { HomeSectionMobile } from "../components/home/HomeSectionMobile";
import { HomeSectionTest } from "../components/home/HomeSectionTest";

const Home = () => {
  return (
    <>
      <Header />
      <HomeSectionHero />
      <HomeSectionMobile />
      <HomeSectionTest />
    </>
  );
};

export default Home;
