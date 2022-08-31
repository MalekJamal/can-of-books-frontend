import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>

        <NavItem>
          <Link
            to="/"
            className="nav-link"
            style={{ color: "white", margin: "5px 20px" }}
          >
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/about"
            className="nav-link"
            style={{ color: "white", margin: "5px 20px" }}
          >
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/profile"
            className="nav-link"
            style={{ color: "white", margin: "5px 20px" }}
          >
            Profile
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/dashboard"
            className="nav-link"
            style={{ color: "white", margin: "5px 20px" }}
          >
            DashBoard
          </Link>
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <div style={{ float: "right", position: "relative" }}>
          <Login />
          <Logout />
        </div>
      </Navbar>
    );
  }
}

export default Header;
