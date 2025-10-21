import { useLoaderData } from "react-router-dom";
import PatientItem from "../components/PatientItem";
import Loader from "../ui/Loader";

function Patient() {
  const patientData = useLoaderData();

  return (
    <div className="md:px-30">
      <h2 className="text-[42px] text-center mt-8 font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Patient Details
      </h2>
      {patientData.users.map((patient) => (
        <PatientItem patient={patient} key={patient.id} />
      ))}
    </div>
  );
}

async function getPatientData() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw Error("Failed getting patient data");
  const data = await res.json();
  return data;
}

export async function loader() {
  const pateintData = await getPatientData();
  return pateintData;
}

export default Patient;
