import { Helmet } from "react-helmet";
import { VscFilePdf } from "react-icons/vsc";

const PendingAssignment = () => {
  return (
    <div>
      <Helmet>
        <title>STUDY TOGETHER | Pending Assignmen</title>
      </Helmet>

      {/* modal give mark */}
      <dialog id="my_modal_2" className="At nulla temporibus modal">
        <div className="At nulla temporibus modal-box">
          <div className="text-center">
            <div className="flex justify-between items-center">
              <h5 className="font-bold text-2xl">Name of Eximinar</h5>
              <a
                className=""
                href="https://www.clickdimensions.com/links/TestPDFfile.pdf"
                target="_blank"
              >
                <div className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 ">
                  <span
                    className="px-4 py-3 font-bold flex gap-2"
                    href="https://www.clickdimensions.com/links/TestPDFfile.pdf"
                    target="_blank"
                  >
                    <VscFilePdf className="text-2xl" /> <span>PDF Link</span>
                  </span>
                </div>
              </a>
            </div>

            <form>
              <div className=" mb-4">
                {/* marks */}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Marks</span>
                  </label>
                  <label className="input-group">
                    <input
                      required
                      type="text"
                      name="marks"
                      placeholder="Marks"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* feedback */}
              <div className="mb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Feedback</span>
                  </label>
                  <label className="input-group">
                    <textarea
                      required
                      className="textarea textarea-bordered w-full"
                      name="description"
                      rows="2"
                      placeholder="..."
                    ></textarea>
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-block bg-[#e35353] text-white hover:bg-[#e35353]"
              />
            </form>
          </div>
        </div>
        <form method="dialog" className="At nulla temporibus modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

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
                <td>0</td>
                <td>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="btn btn-sm btn-success text-white"
                  >
                    Give Mark
                  </button>
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
