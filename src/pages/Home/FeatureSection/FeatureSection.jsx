import { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";
import axios from "axios";

const FeatureSection = () => {
  const [assignments, setAssingments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

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
    return <h1 className="text-4xl font-bold text-center my-20">Loading...</h1>;
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold ">All Assignments</h2>
        <p className="mx-auto md:w-3/5">
          Discover and manage all your assignments conveniently in one place.
          Stay organized, meet deadlines, and excel in your academic journey
          with ease.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {assignments.map((assignment) => (
          <HomeCard key={assignment._id} assignment={assignment}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
