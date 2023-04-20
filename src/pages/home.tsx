import { Header } from "../layouts/Header";
import { HomeSectionHero } from "../components/home/HomeSectionHero";
import { HomeSectionMobile } from "../components/home/HomeSectionMobile";
import { HomeSectionTest } from "../components/home/HomeSectionTest";
import { AccordionDemo } from "../components/home/AccordionDemo";

const Home = () => {
  return (
    <>
      <Header />
      <HomeSectionHero />
      <HomeSectionMobile />
      <HomeSectionTest />
      <AccordionDemo />
    </>
  );
};

export default Home;
