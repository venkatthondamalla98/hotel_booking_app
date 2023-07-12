import { useEffect } from "react";
import { useNavigate } from "react-router";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { auth } from "../firebase";

const Layout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
