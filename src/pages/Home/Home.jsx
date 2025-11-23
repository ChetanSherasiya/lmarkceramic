import { Helmet } from "react-helmet-next";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ProductSection from "../../components/ProductSection/ProductSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import HelpSection from "../../components/HelpSection/HelpSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lmark Ceramic | Home</title>
        <meta name="description" content="Discover premium ceramic tiles and surfaces from Lmark Ceramic." />
      </Helmet>

      <HeroSlider />
      <ProductSection />
      <WhyChooseUs />
      <HelpSection />
    </>
  );
};

export default Home;
