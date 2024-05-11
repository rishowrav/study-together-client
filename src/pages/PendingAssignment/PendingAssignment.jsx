import { Helmet } from "react-helmet";

const PendingAssignment = () => {
  return (
    <div>
      <Helmet>
        <title>STUDY TOGETHER | Pending Assignmen</title>
      </Helmet>

      <section className="container px-4 mx-auto pt-12 space-y-6">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium  ">My Submitted Assignments</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            05 Assignments
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="At nulla temporibus table At nulla temporibus table-zebra border border-base-200">
            {/* head */}
            <thead className="text-[15px]">
              <tr>
                <th></th>
                <th>Title</th>
                <th>Examinee Name </th>
                <th>Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>77</td>
                <td>
                  <button className="btn btn-sm">Give Mark</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>33</td>
                <td>
                  <button className="btn btn-sm">Give Mark</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>44</td>
                <td>
                  <button className="btn btn-sm">Give Mark</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PendingAssignment;
