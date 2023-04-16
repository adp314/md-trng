import { Link } from "react-router-dom";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import BurgerMenu from "../assets/icons/BurgerMenu";
import CrossMenu from "../assets/icons/CrossMenu";

interface Size {
  width: number;
  height: number;
}

export const Header = () => {
  const size: Size = useWindowSize();
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <>
      {size.width > 1023 ? (
        <header className="flex justify-center w-full bg-white shadow-lg shadow-gray-200 font-Nunito">
          <div className="flex items-center justify-between py-6 w-[80rem] px-4 h-24 ">
            <div className="flex items-center justify-center w-32 h-auto">
              <img
                src="/svgs/meduslogo.svg"
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center justify-start gap-6">
              <ul className="flex items-center gap-6 text-base font-semibold text-medus-blue-100 justify-normal">
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#FAQ's">FAQ's</a>
                </li>
              </ul>
              <div className="flex items-center justify-start gap-6">
                <Link
                  to="/signup"
                  className="flex items-center justify-center h-12 px-10 py-3 duration-200 ease-in-out rounded-full bg-medus-aqua-100 hover:bg-medus-lemon-100 hover:shadow-lg"
                >
                  5 day free trial
                </Link>
                <Link
                  to="/signin"
                  className="flex items-center justify-center h-12 px-10 py-3 duration-200 ease-in-out border rounded-full border-medus-aqua-100 hover:border-medus-lemon-100"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="flex justify-center w-full bg-white shadow-lg shadow-gray-200 font-Nunito">
          <div className="flex items-center justify-between py-6 w-[80rem] px-4 h-24 ">
            <div className="flex items-center justify-center w-32 h-auto">
              <img
                src="/svgs/meduslogo.svg"
                alt="Logo"
                className="w-full h-full"
              />
            </div>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <span>
                  <BurgerMenu />
                </span>
              ) : (
                <>
                  <span>
                    <CrossMenu />
                  </span>
                  <div className="absolute right-0 z-50 flex flex-col w-full h-screen gap-6 px-6 py-10 bg-white top-20 ">
                    <ul className="flex flex-col gap-6 text-base font-semibold text-medus-blue-100">
                      <li className="">
                        <a href="#features">Features</a>
                      </li>
                      <li className="">
                        <a href="#features">Pricing</a>
                      </li>
                      <li className="">
                        <a href="#features">FAQ's</a>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-6">
                      <Link
                        to="/signup"
                        className="flex items-center justify-center h-12 px-10 py-3 duration-200 ease-in-out rounded-full w-max bg-medus-aqua-100 hover:bg-medus-lemon-100 hover:shadow-lg"
                      >
                        5 day free trial
                      </Link>
                      <Link
                        to="/signin"
                        className="flex items-center justify-center h-12 px-10 py-3 duration-200 ease-in-out border rounded-full w-max border-medus-aqua-100 hover:border-medus-lemon-100"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
};
