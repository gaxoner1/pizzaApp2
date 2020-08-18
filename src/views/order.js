import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Highlight from "../components/highlight";
import { useAuth0 } from "@auth0/auth0-react";


const SendOrder = () => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const { getAccessTokenSilently } = useAuth0();


 const placeOrder = async () => {
     try {
       const token = await getAccessTokenSilently();

       const response = await fetch(`${apiUrl}/order`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
      const responseData = await response.json();
      const tempVar = setMessage(responseData);
      console.log(tempVar)
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
      <div>
        <ButtonGroup>
          <Button onClick={placeOrder}color="primary">
            Place Order
          </Button>
        </ButtonGroup>
        <p>
          {`Here is the api call response: ${setMessage}`}
        </p>
      </div>
    );
  };

export default SendOrder;
