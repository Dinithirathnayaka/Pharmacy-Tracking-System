import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");
    localStorage.removeItem("currentLocation");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
