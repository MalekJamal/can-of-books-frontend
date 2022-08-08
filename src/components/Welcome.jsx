import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Welcome extends Component {
  render() {
    return (
      <div>
        <Alert variant="success">
          <Alert.Heading>
            Hey ✋🏻, nice to see you, {this.props.msg}
          </Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. Please
            login to see our content.
          </p>
          <hr />
        </Alert>
      </div>
    );
  }
}

export default Welcome;
