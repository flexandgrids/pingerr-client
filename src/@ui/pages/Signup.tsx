import logo from "../../assets/pingerr-logo.png";
import loginPic from "../../assets/login-pic-2.png";
import { version } from "../shared/version";

const Signup = () => {
  return (
    <div className="w-screen h-auto mt-3 gap-3 flex justify-center">
      <div className="w-[1000px] justify-between h-[800px] flex bg-white rounded-2xl shadow-sm p-5">
        {/* Sidebar */}
        <div className="h-full flex items-center justify-between p-3 w-full bg-gray-100 rounded-xl">
          <div className="flex flex-col justify-between p-10 items-center bg-white rounded-lg shadow-sm w-[400px] h-full">
            <h1 className="flex gap-2 items-center font-bold text-[24px]">
              New
              <img src={logo} alt="Pingerr" className="mt-2" width={90} />
              Account
            </h1>
            <div className="flex flex-col w-full justify-start">
              <form action="" className="flex flex-col w-full mt-10">
                <label htmlFor="username" className="font-semibold text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border px-3 text-sm py-2 rounded-md outline-none"
                  placeholder="Enter name"
                />
                <label
                  htmlFor="username"
                  className=" mt-3 font-semibold text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border px-3 text-sm py-2 rounded-md outline-none"
                  placeholder="Enter email"
                />
                <label
                  htmlFor="username"
                  className=" mt-3 font-semibold text-sm"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border px-3 text-sm py-2 rounded-md outline-none"
                  placeholder="Enter username"
                />
                <label
                  className="mt-3 text-sm font-semibold"
                  htmlFor="password"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  className="border px-3 text-sm py-2 rounded-md outline-none"
                  placeholder="Enter password"
                />
                <label
                  className="mt-3 text-sm font-semibold"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="border px-3 text-sm py-2 rounded-md outline-none"
                  placeholder="Confirm your password"
                />
                <button
                  type="submit"
                  className="rounded-md mt-3 text-white text-sm flex justify-center items-center w-[70px] h-[35px] bg-blue-500"
                >
                  Signup
                </button>
              </form>
              <div className="w-full flex flex-col justify-start items-start mt-5">
                <p className="font-semibold text-sm text-gray-500 flex items-center gap-2">
                  <input type="checkbox" /> I agree to terms and conditions.
                </p>
                <p className="text-sm mt-1 text-gray-400">
                  Already have an account?{" "}
                  <a className="font-semibold text-sm text-blue-500" href="">
                    Login.
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start mt-10">
              <ul className="flex gap-5 text-xs w-full text-wrap">
                <li>
                  <a className="whitespace-nowrap" href="">
                    terms of use
                  </a>
                </li>
                <li>
                  <a className="whitespace-nowrap" href="">
                    cookies policy
                  </a>
                </li>
                <li>
                  <a className="whitespace-nowrap" href="">
                    privacy policy
                  </a>
                </li>
                <li>
                  <a className="whitespace-nowrap" href="">
                    services
                  </a>
                </li>
              </ul>
              <ul className="flex gap-5 mt-1 text-xs w-full text-wrap">
                <li>
                  <a className="whitespace-nowrap" href="">
                    developers
                  </a>
                </li>
                <li>
                  <a className="whitespace-nowrap" href="">
                    about us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-500">
              <span>version {version}</span>
              <span>Copyright &copy; 2025 Pingerr. All rights reserved</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-white rounded-lg w-[525px] h-full">
            <img
              src={loginPic}
              alt="login-img"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
