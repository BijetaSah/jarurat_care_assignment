import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-8 items-center md:px-30">
      <h1 className="text-[42px] text-center mt-8 font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        JARURAT CARE
      </h1>
      <p className="text-center mt-2 text-lg">
        At Jarurat Care, we are dedicated to supporting cancer patients and
        their families in their fight against cancer. Our mission is to provide
        care, guidance, and resources to help patients navigate treatment and
        improve their quality of life. Through awareness programs, emotional
        support, and community outreach, we strive to make every step of the
        journey a little easier for those affected by cancer
      </p>
      <button className=" px-6 hover:cursor-pointer py-2 text-white capitalize font-semibold rounded-full bg-blue-600 text-lg hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700 transition-all duration-200">
        <a href="#">seek cancer support</a>
      </button>
    </div>
  );
}

export default Home;
