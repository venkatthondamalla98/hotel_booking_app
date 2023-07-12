import { Button, Container, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userName = result.user.displayName;
        navigate("/home", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={onLoginClick}
            sx={{ boxShadow: 10 }}
          >
            <GoogleIcon sx={{ mr: 2 }} />
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
