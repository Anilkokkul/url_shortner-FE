import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between h-20 p-3 bg-green-400 text-white shadow-md">
        <div>
          <h1>URL Shortner</h1>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <Link to={"/login"}>
            {" "}
            <button className=" p-2  bg-orange-600 text-white text-xl rounded-md ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
