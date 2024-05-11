// import FAQ_img from "/img/faq.jpg";

const FAQ = () => {
  return (
    <section className="space-y-10">
      {/* text */}
      <div>
        <h2 className="md:text-5xl text-3xl font-bold text-center">
          Questions? Look Here
        </h2>
      </div>
      <div className=" flex lg:flex-row  flex-col-reverse gap-4">
        {/* faq all */}
        <div className="flex flex-col gap-4 lg:w-3/5">
          {/* qus-1 */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            tabIndex={0}
            className="collapse collapse-open rounded-sm p-2  bg-base-200 "
          >
            <div className="collapse-title text-xl font-medium">
              1 - What is the process for buying a home?
            </div>
            <div className="collapse-content">
              <p>
                The home buying process involves financial preparation, defining
                preferences, house hunting, making an offer, home inspection,
                finalizing financing, closing the deal, and moving in. It
                includes steps such as assessing finances, viewing properties,
                negotiating offers, conducting inspections, and completing
                paperwork to secure ownership of the property.
              </p>
            </div>
          </div>
          {/* qus-2 */}
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-sm p-2  bg-base-200 "
          >
            <div className="collapse-title text-xl font-medium">
              2 - How can I get pre-approved for a mortgage?
            </div>
            <div className="collapse-content">
              <p>
                To get pre-approved for a mortgage, contact lenders to submit
                financial information such as income, assets, debts, and credit
                history. They will assess your eligibility and provide a
                pre-approval letter indicating the amount you can borrow, aiding
                in your home search.
              </p>
            </div>
          </div>
          {/* qus-3 */}
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-sm p-2  bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              3- What is the difference between a buyers agent?
            </div>
            <div className="collapse-content">
              <p>
                A buyers agent represents the buyers interests in a real estate
                transaction, providing guidance, negotiating offers, and helping
                find suitable properties. They work exclusively for the buyer,
                whereas a sellers agent represents the sellers interests. Both
                agents facilitate the buying process but advocate for different
                parties.
              </p>
            </div>
          </div>
          {/* qus-4 */}
          <div
            tabIndex={0}
            className="collapse collapse-plus rounded-sm p-2 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              4- Contrary to popular Lorem Ipsum this item is not simply ?
            </div>
            <div className="collapse-content">
              <p>
                Contrary to popular Lorem Ipsum, this item is not simply
                placeholder text. It serves a specific purpose, conveying
                meaningful information or prompting action. Whether its
                descriptive content, a call-to-action, or informative text, it
                engages readers and adds value to the communication, rather than
                merely filling space.
              </p>
            </div>
          </div>
        </div>
        {/* faq img */}
        <div className="lg:w-2/5">
          <img
            src={"https://i.ibb.co/FxLqMXN/pexels-ann-h-6266316.jpg"}
            alt="faq"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
