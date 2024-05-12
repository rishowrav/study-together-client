import { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";
import axios from "axios";

const FeatureSection = () => {
  const [assignments, setAssingments] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/assignments")
      .then((res) => {
        setAssingments(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="space-y-10">
      <h2 className="text-5xl font-bold text-center">Feature</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {assignments.map((assignment) => (
          <HomeCard key={assignment._id} assignment={assignment}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
