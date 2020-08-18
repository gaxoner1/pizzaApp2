import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      variant="success"
      className="btn-margin"
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
