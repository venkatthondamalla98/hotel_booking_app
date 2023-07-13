import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import HotelCard from "../components/HotelCard.js";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [hotel, setHotel] = useState([]);

  const loginDetails = useLocation();

  const userName = loginDetails?.state?.userName;

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then((response) => {
        setHotel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: 15 }}>
        <Typography variant="h5">welcome {userName}</Typography>
        <Grid container spacing={2}>
          {hotel.map((hotel) => {
            return (
              <Grid key={hotel.id} md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
