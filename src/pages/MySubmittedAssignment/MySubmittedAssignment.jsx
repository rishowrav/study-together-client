import { Helmet } from "react-helmet";

const MySubmittedAssignment = () => {
  return (
    <section>
      <Helmet>
        <title>STUDY TOGETHER | My Submitted Assignment</title>
      </Helmet>
      <div className="container px-4 mx-auto pt-12 space-y-6">
        <div className="flex items-center gap-x-3 ">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Submitted Assignments
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            03 Assignments
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="At nulla temporibus table At nulla temporibus table-zebra border border-base-200">
            {/* head */}
            <thead className="text-[15px]">
              <tr>
                <th></th>
                <th>Title</th>
                <th>Status </th>
                <th>Marks</th>
                <th>Obtain Marks</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>This is my first assignment</td>
                <td>
                  <button className="btn btn-sm btn-warning">Pending</button>
                </td>
                <td>77</td>
                <td>77</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing...</td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>This is my first assignment</td>
                <td>
                  {" "}
                  <button className="btn btn-sm btn-warning">Pending</button>
                </td>
                <td>33</td>
                <td>33</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing...</td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>This is my first assignment</td>
                <td>
                  {" "}
                  <button className="btn btn-sm btn-warning">Pending</button>
                </td>
                <td>44</td>
                <td>55</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing...</td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MySubmittedAssignment;
