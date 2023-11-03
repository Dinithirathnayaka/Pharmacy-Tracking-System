import { useEffect, useState } from "react";

export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUserDetails(storedUser);
  }, []);

  console.log(userDetails);

  return userDetails;
};
