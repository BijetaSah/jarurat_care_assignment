import { FaUserAlt } from "react-icons/fa";

function PatientItem({ patient }) {
  const { firstName, lastName, gender, age } = patient;
  return (
    <div className="flex items-center space-y-2">
      <div className="h-40 w-40 bg-gray-300 flex items-center justify-center">
        {" "}
        <FaUserAlt className="text-[2.4rem] text-gray-400" />
      </div>
      {/* details */}
      <div>
        <h3 className="text-xl font-bold">
          {firstName} {lastName}{" "}
        </h3>
        <p className="text-sm">
          Gender : <span className="font-semibold text-sm"> {gender}</span>
        </p>
        <p className="text-sm">
          Age: <span className="font-semibold text-sm">{age}</span>
        </p>
      </div>
    </div>
  );
}

export default PatientItem;
