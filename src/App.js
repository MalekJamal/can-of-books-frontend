import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./About";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/Welcome";
function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {isAuthenticated && (
            <Route exact path="/" element={<BestBooks />}></Route>
          )}
          {!isAuthenticated && (
            <Route exact path="/" element={<Welcome />}></Route>
          )}

          {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          <Route exact path="/about" element={<About />}></Route>
          {isAuthenticated && (
            <Route exact path="/profile" element={<Profile />}></Route>
          )}
          {!isAuthenticated && (
            <Route
              exact
              path="/profile"
              element={
                <Welcome
                  msg={"You Can't see your profile if didn't login!😊"}
                />
              }
            ></Route>
          )}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
