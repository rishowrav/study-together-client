import { Helmet } from "react-helmet";
import Slider from "../../../components/Slider/Slider";
import FeatureSection from "../FeatureSection/FeatureSection";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>STUDY TOGETHER | Home</title>
      </Helmet>
      <div className="space-y-24">
        <Slider></Slider>

        <div className="container lg:w-[1200px] mx-auto space-y-24">
          <FeatureSection></FeatureSection>

          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;
