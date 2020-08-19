import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Highlight from "../components/highlight";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "./Menu";


const SendOrder = () => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const { getAccessTokenSilently } = useAuth0();


 const placeOrder = async () => {
     try {
       //SHOULD BE EXPLICIT
       const token = await getAccessTokenSilently({
         audience: 'sample.express-api.com',
         //scope: "read:current_user",
       });
      //It is likely it is an opaque access token and not jwt
      //console.log(`debugg token/ JWT call: ${token}`)
       const response = await fetch(`${apiUrl}/order`,
         {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
      const responseData = await response.json();
      console.log(`responseData: ${responseData}`)
      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  //skipping consent for verifiable first party clients. If your client is
  //hosted on localhost, Auth0 has no reason to believe that it’s truly a 1st party

  return (
      <div>
        <ButtonGroup>
          <Button onClick={placeOrder} variant="primary">
            Place Order
          </Button>
        </ButtonGroup>
        <p>
          {`Order Status: ${JSON.stringify(message, null, 2)}`}
        </p>
        <Menu/>
      </div>
    );
  };

export default SendOrder;
