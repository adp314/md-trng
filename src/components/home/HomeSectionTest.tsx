import CrossMedusHome from "../../assets/visuals/CrossMedusHome";
import CheckHome from "../../assets/visuals/CheckHome";

export const HomeSectionTest = () => {
  return (
    <section className=" lg:pt-20 px-4 mx-auto w-full max-w-7xl border-solid border-2 border-red-500 pb-10 mb-10 lg:mb-20;">
      <div className="relative border-2 border-black">
        <div className="flex flex-col-reverse flex-wrap items-center max-w-6xl mx-auto lg:flex-row">
          <CrossMedusHome />
          <div className="w-full border-2 border-green-500 z-20 lg:w-1/2 flex;">
            <video className="max-w-full shadow-lg rounded-2xl">
              <source src="/public/videos/medus-tests-2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="w-full border-2 flex relative border-blue-500 z-20 lg:justify-end lg:w-1/2 flex;">
            <div className="mb-8 border-2 border-orange-500 md:max-w-sm lg:mb-0">
              <h2 className="relative mb-8 text-3xl font-semibold leading-8 text-center md:text-left lg:text-5xl text-medus-darkblue-100 isolate font-Poppins">
                <span>Prepare for success</span>
                <span>
                  <CheckHome />
                </span>
              </h2>
              <p className="text-lg lg:text-xl leading-8 text-grey-900 relative;">
                Simulate real IMLE test environments from a library of 2,800+
                past questions.
              </p>
            </div>
          </div>
        </div>
        {/* /// */}
        <div></div>
      </div>
    </section>
  );
};
