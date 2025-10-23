import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PatientItem({ patient }) {
  const navigate = useNavigate();

  function handelClick(id) {
    console.log(id);
    navigate(`/patient/${id}`);
  }
  const { firstName, lastName, gender, age, id } = patient;
  return (
    <div className="flex items-start md:items-center gap-5 md:gap-2 space-y-2 p-4 border-b-1 border-stone-200 ">
      <div className="lg:h-40 h-25 w-25 lg:w-40 bg-gray-300 flex items-center justify-center">
        {" "}
        <FaUserAlt className="text-[2.4rem] text-gray-400" />
      </div>
      {/* details */}
      <div className="space-y-1">
        <h3 className=" md:text-xl font-bold">
          {firstName} {lastName}{" "}
        </h3>
        <p className="text-sm">
          Gender :{" "}
          <span className="font-semibold text-sm capitalize"> {gender}</span>
        </p>
        <p className="text-sm">
          Age: <span className="font-semibold text-sm">{age}</span>
        </p>
        <button
          className="text-blue-700  text-sm  md:hidden"
          onClick={() => handelClick(id)}
        >
          View Details &rarr;
        </button>
      </div>
      <button
        className="bg-blue-400 hover:bg-white text-white hover:text-blue-600 border-2 rounded-md border-blue-400 px-2 py-1 cursor-pointer ml-auto hidden md:inline-block"
        onClick={() => handelClick(id)}
      >
        View Details
      </button>
    </div>
  );
}

export default PatientItem;
