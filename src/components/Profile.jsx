import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
function Profile() {
  const { isAuthenticated, user } = useAuth0();

  function provider() {
    let start = user.email.indexOf("@");
    let end = user.email.lastIndexOf(".");
    let emailProvider = user.email.substring(start + 1, end);
    return emailProvider;
  }

  return (
    isAuthenticated && (
      <>
        <h3 style={{ textAlign: "center" }}>Hello Below Is Your Info 👇🏻👇🏻</h3>
        <Card style={{ width: "18rem", margin: "auto", marginBottom: "30px" }}>
          <Card.Img variant="top" src={user.picture} alt={user.name} />
          <Card.Body>
            <Card.Text>
              <p>User Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>
                You logged using: <b>{provider()}</b>
              </p>
              <p>
                Your <b>{provider()}</b> language is: {user.locale}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  );
}

export default Profile;
