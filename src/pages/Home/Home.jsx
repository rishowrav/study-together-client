import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>STUDY TOGETHER | Home</title>
      </Helmet>
      <Slider></Slider>
    </div>
  );
};

export default Home;
