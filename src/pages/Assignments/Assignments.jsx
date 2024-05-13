import { Helmet } from "react-helmet";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../../components/Card/Card";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Assignments = () => {
  const loaderData = useLoaderData();
  const [assignments, setAssignments] = useState(loaderData);
  const [hard] = useState(loaderData);
  const [medium] = useState(loaderData);
  const [easy] = useState(loaderData);

  return (
    <div className="container lg:w-[1200px] mx-auto">
      <Helmet>
        <title>STUDY TOGETHER | Assignments</title>
      </Helmet>
      ;
      <h2 className="text-5xl font-bold text-center mb-10 mt-6">
        Number of Assignments - 0{assignments.length}
      </h2>
      {/* filter button */}
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="mb-10 btn bg-[#E35353] border-none hover:bg-[#E35353] text-white rounded-md btn-md px-4 pl-7">
            Assignment Difficulty Leve <IoIosArrowDown className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a
                onClick={() => {
                  setAssignments(loaderData);
                }}
              >
                All
              </a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a
                onClick={() => {
                  setAssignments(
                    hard.filter((hard) => hard.difficultyLevel === "Hard")
                  );
                }}
              >
                Hard
              </a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a
                onClick={() => {
                  setAssignments(
                    medium.filter(
                      (medium) => medium.difficultyLevel === "Medium"
                    )
                  );
                }}
              >
                Medium
              </a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a
                onClick={() => {
                  setAssignments(
                    easy.filter((easy) => easy.difficultyLevel === "Easy")
                  );
                }}
              >
                Easy
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {assignments.map((assignment) => (
          <Card
            key={assignment._id}
            assignment={assignment}
            setAssignments={setAssignments}
            assignments={assignments}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
