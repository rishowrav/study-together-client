const ViewAssignment = () => {
  return (
    <section>
      {/* modal give mark */}
      <dialog id="my_modal_2" className="At nulla temporibus modal">
        <div className="At nulla temporibus modal-box">
          <div className="text-center">
            <div className="my-2">
              <h5 className="font-bold text-2xl">Name of Who submit it</h5>
            </div>

            <form>
              <div className=" mb-4">
                {/* marks */}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">PDF doc Link</span>
                  </label>
                  <label className="input-group">
                    <input
                      required
                      type="text"
                      name="pdf_link"
                      placeholder="PDF doc Link"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* feedback */}
              <div className="mb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Note</span>
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
      <div className="At flex flex-col lg:flex-row   card lg:At  card-side bg-base-100 shadow-xl container lg:w-[1200px] mx-auto">
        <figure className="lg:w-5/12 rounded-tr-2xl rounded-bl-none lg:rounded-tr-none">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="At  card-body lg:w-7/12">
          <p>
            <span className="font-bold">Date:</span> <span>12/02/2024</span>
          </p>
          <div className="flex justify-between items-center">
            <h2 className="At card-title text-4xl font-bold">
              New album is released!
            </h2>
            <button className="btn font-bold text-2xl">Hard</button>
          </div>
          <p>
            <span className="font-bold">Description: </span>Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Deserunt vero quas aperiam
            numquam dolor facere, accusamus atque iusto praesentium iure eaque
            itaque ex quaerat. Unde quam saepe alias eum quasi consequuntur
            maiores voluptatum tempore hic sint magnam impedit aperiam debitis
            incidunt reiciendis optio, excepturi et nam quia porro aliquam ipsam
            enim explicabo qui! Repellendus fuga dignissimos quis eveniet
            commodi ratione vitae recusandae harum, delectus natus libero? Nisi
            facilis eligendi harum inventore? Maxime asperiores labore
            perferendis error. Cupiditate, nemo nam. Incidunt animi quasi,
            cumque voluptatum soluta esse molestiae maiores culpa unde nostrum,
            suscipit vel et, corrupti similique ea possimus cupiditate vero.
          </p>
          <h3>
            <span className="font-bold">Marks: </span>
            <span className="text-5xl font-bold">98</span>
          </h3>

          <div className="At  card-actions justify-end">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="At  btn At  btn-error"
            >
              Take Assignment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAssignment;
