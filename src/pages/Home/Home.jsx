import { Helmet } from "react-helmet-next";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ProductSection from "../../components/ProductSection/ProductSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import HelpSection from "../../components/HelpSection/HelpSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lmark Ceramic - Premium Tiles</title>
        <meta
          name="description"
          content="Discover premium ceramic, porcelain, and GVT/PGVT tiles at Lmark Ceramic. Transform your space with our modern and durable tile collections."
        />
      </Helmet>

      <HeroSlider />
      <ProductSection />
      <WhyChooseUs />
      <HelpSection />
    </>
  );
};

export default Home;
