import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const [isOneline, setIsOnline] = useState(navigator.onLine);

  useEffect(function () {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return function () {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOneline)
    return (
      <div>
        <h1>⚠️ Internet connection error</h1>
        <p>Please check your Internet connection</p>
      </div>
    );

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
