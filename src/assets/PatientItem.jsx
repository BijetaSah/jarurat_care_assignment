import { FaUserAlt } from "react-icons/fa";

function PatientItem({ patient }) {
  const { firstName, lastName, gender, age } = patient;
  return (
    <div className="flex items-center">
      <div className="h-50 w-50 bg-gray-400 ">
        {" "}
        <FaUserAlt />
      </div>
      {/* details */}
      <div></div>
      <h3>
        {firstName} {lastName}{" "}
      </h3>
      <p>
        Gender : <span> {gender}</span>
      </p>
      <p>
        Natinality: <span>{age}</span>
      </p>
    </div>
  );
}

export default PatientItem;
