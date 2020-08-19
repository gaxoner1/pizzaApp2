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
       //FEEDBACK: SHOULD BE EXPLICIT
       const token = await getAccessTokenSilently({
         audience: 'sample.express-api.com',
         scope: "read:current_user",
       });
      //It is likely it is an opaque access token and not jwt
       console.log(`debugg token/ JWT call: ${token}`)
       const response = await fetch(`${apiUrl}/order`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
      const responseData = await response.json();
      console.log(`responseData: ${responseData}`)
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
