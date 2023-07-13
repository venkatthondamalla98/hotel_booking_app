import React from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NavBar = () => {
  const navigate = useNavigate();

  const homeButton = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        component="nav"
        style={{
          borderRadius: "5px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookYourRoom
          </Typography>

          <Box>
            <Button sx={{ color: "#fff" }} onClick={homeButton}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
