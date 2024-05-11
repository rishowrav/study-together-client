import { Helmet } from "react-helmet";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../../components/Card/Card";

const Assignments = () => {
  // condision on customization

  return (
    <div className="container lg:w-[1200px] mx-auto">
      <Helmet>
        <title>STUDY TOGETHER | Assignments</title>
      </Helmet>
      ;
      <h2 className="text-5xl font-bold text-center mb-10 mt-6">
        Number of Assignments - 01
      </h2>
      {/* filter button */}
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="mb-10 btn bg-[#E35353] border-none hover:bg-[#E35353] text-white rounded-md btn-md px-4 pl-7">
            Assignment Difficulty Leve <IoIosArrowDown className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={""}>Hard</a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={""}>Medium</a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={""}>Easy</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Assignments;
