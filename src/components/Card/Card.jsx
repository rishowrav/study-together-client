import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OwnCreateCraft = () => {
  // delete method
  const handleDelete = () => {};

  return (
    <div className="card realNest-card rounded-none bg-base-200 hover:shadow-xl duration-300 cursor-pointer">
      <figure className=" ">
        <div className="  w-full md:h-[280px] flex justify-center items-center  ">
          <img
            src={"/img/slider3.jpg"}
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
            <span className="font-bold text-xl ">Hard</span>
          </span>
          <span className="  ">
            Marks: <span className="font-bold text-3xl">98</span>
          </span>
        </div>

        <h2 className=" text-xl font-bold  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </h2>

        <hr className="border border-dashed my-2 mt-2" />

        <div className="flex justify-between items-center font-[500]">
          <div className="flex items-center gap-1">
            <button className="btn btn-md text-[#E35353] hover:text-white duration-300 hover:border-[#E35353] border-1  rounded-sm border-[#E35353] bg-transparent  hover:bg-[#E35353]  ">
              View Assignment
            </button>
          </div>
          <div className=" space-x-3">
            <Link to="">
              <button className="btn btn-md text-white   bg-[#E35353]   rounded-sm  hover:bg-[#E35353] border-none  ">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete()}
              className="btn btn-md text-white   bg-[#E35353]   rounded-sm  hover:bg-[#E35353] border-none  "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnCreateCraft;
OwnCreateCraft.propTypes = {
  craft: PropTypes.array,
};

OwnCreateCraft.propTypes = {
  setUserCrafts: PropTypes.func,
};
OwnCreateCraft.propTypes = {
  userCrafts: PropTypes.array,
};
