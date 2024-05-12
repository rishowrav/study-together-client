import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCard = ({ assignment }) => {
  return (
    <div className="card realNest-card rounded-none bg-base-200 hover:shadow-xl duration-300 cursor-pointer">
      <figure className=" ">
        <div className="  w-full md:h-[280px] flex justify-center items-center  ">
          <img
            src={assignment?.thumbnailURL}
            alt="Shoes"
            className="w-full h-full object-cover"
          />
        </div>
      </figure>
      <div className="card-body p-6 space-y-4  font-[500] ">
        <div className="flex justify-between items-center">
          <span
            className="border-2 border-gray-300 px-3 py-2 rounded 
           text-sm"
          >
            <span className="font-bold text-xl ">
              {assignment?.difficultyLevel}
            </span>
          </span>
          <span className="  ">
            Marks:{" "}
            <span className="font-bold text-3xl">{assignment?.marks}</span>
          </span>
        </div>

        <h2 className=" text-xl font-bold  ">{assignment?.assignmentTitle}</h2>

        <hr className="border border-dashed my-2 mt-2" />

        <div className="flex justify-between items-center font-[500]">
          <div className="flex items-center gap-1"></div>
          <div className=" space-x-3">
            <Link to={`/view_assignment/${assignment._id}`}>
              <button className="btn btn-md text-[#E35353] hover:text-white duration-300 hover:border-[#E35353] border-1  rounded-sm border-[#E35353] bg-transparent  hover:bg-[#E35353]  ">
                View Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
HomeCard.propTypes = {
  assignment: PropTypes.object,
};
