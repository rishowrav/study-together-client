import { Helmet } from "react-helmet";
import Slider from "../../../components/Slider/Slider";
import FeatureSection from "../FeatureSection/FeatureSection";
import FAQ from "../FAQ/FAQ";
import Lottie from "lottie-react";
import DataLoading from "../../../../public/img/loading.json";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const { dataLoading, setDataLoading } = useAuth();

  const [assignments, setAssingments] = useState([]);

  useEffect(() => {
    axios("https://online-study-server-iota.vercel.app/assignments/")
      .then((res) => {
        setDataLoading(true);
        setAssingments(res.data);
        setDataLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (dataLoading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] ">
        <Lottie className="w-32 " animationData={DataLoading} loop={true} />
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>STUDY TOGETHER | Home</title>
      </Helmet>
      <div className="space-y-24">
        <Slider></Slider>

        <div className="container lg:w-[1200px] mx-auto space-y-24">
          <FeatureSection assignments={assignments}></FeatureSection>

          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;
