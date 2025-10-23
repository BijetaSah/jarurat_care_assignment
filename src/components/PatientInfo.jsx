import { useLoaderData, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function PatientInfo() {
  const patientInfo = useLoaderData();
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    age,
    address,
    birthDate,
    bloodGroup,
    gender,
    weight,
  } = patientInfo;

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <button
        onClick={handleBack}
        className="cursor-pointer text-blue-600 mt-5 ml-6 text-sm lg:text-base"
      >
        &larr; Go Back
      </button>
      <div className="w-[20rem]  shadow-lg mx-auto my-5 rounded-lg">
        <div className="h-40 w-full bg-gray-300 flex items-center justify-center">
          <FaUserAlt className="text-[2.4rem] text-gray-400" />
        </div>
        {/* details  */}
        <div className="space-y-2 px-5 py-6">
          <h3 className="md:text-xl font-bold text-blue-700">
            {firstName} {lastName}
          </h3>
          <p className="text-sm">
            Gender : <span className="capitalize font-semibold">{gender}</span>
          </p>
          <p className="text-sm">
            Blood Group :{" "}
            <span className="capitalize font-semibold">{bloodGroup}</span>
          </p>
          <p className="text-sm">
            Address :{" "}
            <span className="capitalize font-semibold">
              {address.address}, {address.city}, {address.state}
            </span>
          </p>
          <p className="text-sm">
            Gender : <span className="capitalize font-semibold">{gender}</span>
          </p>
          <p className="text-sm">
            Weight : <span className="capitalize font-semibold">{weight}</span>
          </p>{" "}
          <p className="text-sm">
            Birth Date :{" "}
            <span className="capitalize font-semibold">{birthDate}</span>
          </p>{" "}
          <p className="text-sm">
            Age : <span className="capitalize font-semibold">{age}</span>
          </p>
        </div>
      </div>
    </>
  );
}

async function getUserInfo(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw Error("Failed fetching patient personal info");
  const data = await res.json();
  return data;
}

export async function loader({ params }) {
  const userInfo = await getUserInfo(params.patientId);
  return userInfo;
}

export default PatientInfo;
