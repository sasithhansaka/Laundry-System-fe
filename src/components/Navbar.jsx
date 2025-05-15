import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Navbar({ LoginClick }) {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-1 left-0 w-full bg-transparent flex items-center p-4 z-50">
      <div className="flex-shrink-0 ml-4 sm:ml-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-white font-quantico">
          LMS
        </h1>
      </div>

      <div className="flex-grow flex justify-center mx-4 sm:mx-10">
        <div className="relative w-full max-w-xs sm:max-w-xl">
          <img
            className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-45 hidden sm:block"
            src="./src/images/iconamoon_search-light.png"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-12 px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-500 shadow-md"
          />
        </div>
      </div>

      <div>
        <ul>
          <li onClick={() => navigate("/contact")}>Contact-us</li>
          <li onClick={() => navigate("/about")}>About-us</li>
        </ul>
      </div>

      <div className="flex-shrink-0 mr-4 sm:mr-10">
        <button
          className="px-4 py-2 bg-gray-300 text-purple-950 rounded-md font-quantico"
          onClick={LoginClick}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
