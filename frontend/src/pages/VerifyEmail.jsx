import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { postRequest } from "../hooks/useEmailService";
import { Circularprogress, Alert } from "@mui/material";

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
    async () => {
      if (user?.isVerified) {
        setTimeout(() => {
          return navigate("/login");
        }, 3000);
      } else {
        if (emailToken) {
          setIsLoading(true);

          const response = await postRequest("/api/user/verify-email");
          JSON.stringify({ emailToken });
        }

        setIsLoading(false);
        console.log("res", response);

        if (response.error) {
          return setError(response);
        }

        updateUser(response);
      }
    };
  }, [emailToken, user]);

  return (
    <div>
      {isLoading ? (
        <div>
          <Circularprogress />
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
