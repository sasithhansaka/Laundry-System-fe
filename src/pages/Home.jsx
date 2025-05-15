import { useNavigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const LoginClick = () => {
    navigate("/signin");
  };

  return (
    <div>
      <div className="relative mx-auto w-full">
        <Navbar LoginClick={LoginClick} />

        <div className="relative w-full h-screen sm:h-screen bg-custom-gradient space-y-1">
          <img
            src="./src/assets/LaundryBackground.png"
            className="absolute inset-0 top-1 w-full h-full object-cover opacity-20"
            alt="Background"
          />
          <div className="absolute inset-0 bg-custom-gradient opacity-100 top-0"></div>

          <div className="absolute top-1/2 sm:top-2/3 transform -translate-y-1/2 left-4 sm:left-28 text-center sm:text-left space-y-4 mt-5">
            <h1 className="text-4xl sm:text-7xl font-bold font-poppins mb-3 animate-slideInY text-white">
              WE'LL DO YOUR
            </h1>
            <h1 className="text-5xl sm:text-8xl font-extrabold font-poppins animate-slideInY text-white ">
              DIRTY WORK
            </h1>
            <h4 className="text-lg sm:text-xl font-light font-poppins mb-10 opacity-90 animate-slideInY text-white ">
              Reliable Convenient and Affordable Laundry Services.
            </h4>
            <button className="w-5/6 px-6 py-1 sm:px-7 sm:py-3 h-14 bg-gray-300 text-purple-950 font-quantico text-xl sm:text-3xl tracking-widest rounded-md animate-slideButton opacity-0">
              SCHEDULE PICKUP
            </button>
          </div>
        </div>

        <div className="mt-14 mb-8 w-full md:w-3/4 lg:w-2/4 mx-auto px-4">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-barlow mb-10 font-medium">
            OUR SERVICES
          </h1>
          <div className="space-y-10 ">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Washing Machine.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left ">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Laundry Service
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  From everyday wear to special items, our laundry service
                  handles it all with meticulous attention to detail.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Eco-friendly Cleaning.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Dry Cleaning
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Trust us with your delicate fabrics and formal wear. Our dry
                  cleaning service ensures your clothes are cleaned and pressed
                  to perfection.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/In Transit.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Pickup & Delivery
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Enjoy the convenience of our pickup and delivery service.
                  Schedule a time that works for you, and we'll handle the rest.
                </p>
              </div>
            </div>
            <hr className="bg-slate-950 mt-5 mb-10" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="bg-circle-color w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  <img
                    src="./src/images/Honesty.png"
                    alt="Eco-friendly Cleaning"
                    className="w-12 h-12 object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-xl font-barlow text-black font-medium">
                  Specialized Care
                </h2>
                <p className="text-gray-500 font-barlow font-medium">
                  Need special care for unique fabrics or items? We offer
                  customized solutions for all your laundry needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
