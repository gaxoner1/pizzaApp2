require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
var jwtAuthz = require('express-jwt-authz');


const app = express();

const port = process.env.API_PORT; // TODO change to 5000 for heroku
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}
//middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the [Key ID]
  //(https://tools.ietf.org/html/rfc7515#section-4.1.4) header parameter ("kid")
  //and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  audience: audience,
  //audience:'https://dev-99jq8v4p.us.auth0.com/api/v2/',
  issuer: issuer,
  algorithms: ["RS256"],
});

//app.use(jwtCheck);


app.get("/api/public-message", (req, res) => {
  res.send({
    msg: "The API doesn't require an access token to share this message.",
  });
});

app.get("/api/private-message", checkJwt, (req, res) => {
  res.send({
    msg: "The API successfully validated your access token.",
  });
});

//pass checkJwt to get req to ensure auth.
// app.get("/order", checkJwt, (req, res) => {
//   res.send({
//     msg: "Order Recieved.",
//   });
// });
const checkScopes = jwtAuthz([ 'read:messages' ]);
app.get('/order', checkJwt, checkScopes, function(req, res) {
  res.json({ message: "Order recieved" });
});



app.listen(port, () => console.log(`API Server listening on port ${port}`));
