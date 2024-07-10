import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between h-20 p-3 bg-green-400 text-white shadow-md">
        <div>
          <h1 className=" text-3xl font-semibold">URL Shortner</h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <Link
                to={"/login"}
                className=" p-2  bg-orange-600 text-white text-xl rounded-md "
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
