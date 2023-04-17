export const Mobile = () => {
  return (
    <div className=" lg:py-32">
      <section className="relative flex flex-col-reverse flex-wrap items-center max-w-6xl mx-auto lg:flex-row ">
        <video
          loop
          autoPlay
          playsInline
          className="w-full max-w-full my-4 lg:w-1/2 lg:px-8 lg:my-0"
        >
          <source src="/public/videos/medus-mobile-1.mp4" type="video/mp4" />
        </video>
        <div className="w-full my-4 lg:w-1/2 lg:px-8 lg:my-0 ">
          <h2 className="text-3xl font-semibold text-center md:text-left text-medus-darkblue-100 md:text-5xl font-Poppins md:leading-[3.875rem]">
            All the learning tools you need to help you to
            <span className="relative flex px-2 mx-auto mt-2 md:ml-0 bg-medus-lemon-100 lg:mt-0 lg:inline lg:ml-3 w-max font-Poppins">
              succeed.
              <svg
                width="53"
                height="48"
                viewBox="0 0 53 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[80%] -right-9"
              >
                <path
                  d="M31.222 33.2637L21.1238 19.9"
                  stroke="#C9FB02"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M44.8371 14.1244L28.1385 11.8003"
                  stroke="#C9FB02"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M11.5012 23.4073L9.1771 40.1059"
                  stroke="#C9FB02"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};
