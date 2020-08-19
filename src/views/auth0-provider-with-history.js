import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUDIENCE;

  const history = useHistory();

  const onRedirect Callback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      // domain="dev-99jq8v4p.us.auth0.com"
      //  clientId="YJf7yDFIzxje3UNtEYih2sa54Vgg6OPX"
      //  redirectUri={window.location.origin}
      //  //audience='https://dev-99jq8v4p.us.auth0.com/api/v2/'
      //  audience="sample.express-api.com"
      //  scope="read:current_user read:message update:current_user_metadata"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
