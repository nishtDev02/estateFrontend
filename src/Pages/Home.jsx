import React from "react";
import SectionA from "../sections/SectionA";
import SectionB from "../sections/SectionB";
import SectionC from "../sections/SectionC";
import SectionD from "../sections/SectionD";
import SectionE from "../sections/SectionE";
import SectionF from "../sections/SectionF";

const Home = () => {
  return (
    <>
      {/* // section - 1 */}
      {/* <section className="min-h-[90vh] text-center">
        <div className="h-34 max-w-5xl mx-auto p-25 flex flex-col gap-4 items-center mt-5">
          <h1 className="text-[#F9FAFB] text-5xl font-bold leading-snug">
            Stop wasting money on dead leads
          </h1>

          <p className="text-[#9CA3AF] text-lg">
            Our system brings real customers to your door and books qualified
            appointments. No contacts, No guessing. Just results, that matter.
          </p>

          <div className="flex gap-3 mt-4">
            <button className="bg-emerald-500 rounded-md hover:bg-emerald-600 text-black px-4 py-3">
              Get Started
            </button>
            <button className="text-gray-200 rounded-md hover:text-white border px-4 py-3">
              Learn more
            </button>
          </div>
        </div>
      </section> */}
      <SectionA />

      {/* <div className="h-px bg-[#585a5e]"></div> */}

      {/* section - 2 */}
      {/* <section className="min-h-[80vh] p-5">
        <div className="flex flex-col text-center gap-6 mt-15">
          <span className="text-[#9CA3AF] text-md">Built</span>
          <span className="text-[#F9FAFB] text-3xl font-bold">
            Three things that work
          </span>
          <span className="text-[#9CA3AF] text-md">Everything you need to grow</span>
        </div>

        <div className="cards flex gap-10 my-18 justify-center">
          <div className="bg-emerald-500 w-[28vw] flex flex-col justify-between items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
              color="#000"
              fill="none"
              stroke="#000"
              stroke-width="1.5"
            >
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
              <path d="M17 14C17 14 13.3176 10 12 10C10.6824 9.99999 7 14 7 14" />
            </svg>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-[#161718]">
                Done-for-you system
              </h2>
              <p className="text-sm text-[#272729]">
                We handle the work so you book appointments
              </p>
            </div>
            <div className="text-[#272729] hover:underline">
              <a href="/">Learn <span>&gt;</span></a>
            </div>
          </div>

          <div className="bg-emerald-500 w-[28vw] flex flex-col justify-between items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
              color="#000"
              fill="none"
              stroke="#000"
              stroke-width="1.5"
            >
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
              <path d="M17 14C17 14 13.3176 10 12 10C10.6824 9.99999 7 14 7 14" />
            </svg>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-[#161718]">
                No long contracts
              </h2>
              <p className="text-sm text-[#272729]">
                Cancel anytime without panelties and complications.
              </p>
            </div>
            <div className="text-[#272729] hover:underline">
              <a href="/">Learn <span>&gt;</span></a>
            </div>
          </div>

          <div className="bg-emerald-500 w-[28vw] flex flex-col justify-between items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
              color="#000"
              fill="none"
              stroke="#000"
              stroke-width="1.5"
            >
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
              <path d="M17 14C17 14 13.3176 10 12 10C10.6824 9.99999 7 14 7 14" />
            </svg>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-[#161718]">
                No wasted ad spend
              </h2>
              <p className="text-sm text-[#272729]">
                Every dollar work toward qualified leads
              </p>
            </div>
            <div className="text-[#272729] hover:underline">
              <a href="/">Learn <span>&gt;</span></a>
            </div>
          </div>
        </div>
      </section> */}
      <SectionB />


      {/* <div className="h-px bg-[#585a5e]"></div> */}

      {/* section - 3 */}
      <SectionC />

      {/* section - 4 */}
      <SectionD />

      {/* section- 5 */}
      <SectionE />

      {/* section - 6 */}
      <SectionF />
    </>
  );
};

export default Home;
