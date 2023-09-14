import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { postRequest } from "../hooks/useEmailService";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function VerifyEmail() {
  const { user, updateUser } = useContext(useRegister);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const emailToken = searchParams.get("emailToken");

  console.log(user);
  console.log("emailToken", emailToken);

  useEffect(() => {
    async function fetchData() {
      if (user?.isVerified) {
        setTimeout(() => {
          return navigate("/login");
        }, 3000);
      } else {
        if (emailToken) {
          setIsLoading(true);

          try {
            const response = await postRequest("/api/user/verify-email", {
              emailToken,
            }); // Pass emailToken as a parameter
            setIsLoading(false);
            console.log("res", response);

            if (response.error) {
              setError(response);
            } else {
              updateUser(response);
            }
          } catch (error) {
            setError(error);
          }
        }
      }
    }

    fetchData();
  }, [emailToken, user]);
  return (
    <div>
      {isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {user?.isVerified ? (
            <div>
              <Alert severity="success">
                Email Successfully verified,redirectiong..
              </Alert>
            </div>
          ) : (
            <div>
              {error.error ? (
                <Alert severity="error">{error.message}</Alert>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
