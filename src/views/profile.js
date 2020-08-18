import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Highlight, Loading } from "../components";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const [userMetadata] = useState(null);

  console.log(user)

  return (
    <Container className="mb-5">
       <Row className="align-items-center profile-header mb-5 text-center text-md-left">
         <Col md={2}>
           <img
             src={picture}
             alt="Profile"
             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
           />
         </Col>
         <Col md>
           <h2>{name}</h2>
           <p className="lead text-muted">{email}</p>
         </Col>
       </Row>
       <Row>
         <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
       </Row>
       <div>
       <h3>User Metadata</h3>
       {userMetadata ? (
         <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
       ) : (
         "No user metadata defined"
       )}
     </div>
     </Container>
   );
 };

 export default Profile;
