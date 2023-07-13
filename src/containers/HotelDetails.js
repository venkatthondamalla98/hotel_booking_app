import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Grid, Typography } from "@mui/material";

const HotelDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [hotelInfo, setHotelInfo] = useState({});

  const bookCliked = () => {
    const productDetails = hotelInfo;
    navigate("/payments", {
      state: {
        productDetails,
      },
    });
  };

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.id}`)
      .then((response) => setHotelInfo(response.data))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 15, objectFit: "contain" }}>
      <Typography variant="h4">{hotelInfo.name}</Typography>
      <Grid container justifyContent={"center"}>
        {hotelInfo.images?.map((image) => {
          return (
            <Grid item lg={4}>
              <img
                src={image.img}
                alt="Hotel"
                style={{
                  width: "95%",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px grey",
                  margin: "10px",
                  marginTop: "20px",
                  height: "150px",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography sx={{ mr: 5, fontWeight: "bold" }}>
        Rating: {hotelInfo.rating}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        Price: ${hotelInfo.pricePerNight}
      </Typography>
      <Typography variant="body2">
        <h4 style={{ marginBottom: 2 }}>Features:</h4>
        {hotelInfo.features?.map((feature) => {
          return <li>{feature.text}</li>;
        })}
      </Typography>
      <Typography variant="body2">
        <h4 style={{ marginBottom: 2 }}>About the place:</h4>{" "}
        {hotelInfo.aboutThePlace}
      </Typography>
      <Typography variant="body2" style={{ marginTop: 10, marginBottom: 20 }}>
        <h4 style={{ display: "inline" }}>Address:</h4> {hotelInfo.address}
      </Typography>
      <Button
        variant="contained"
        style={{ marginBottom: 20 }}
        onClick={bookCliked}
      >
        Book now
      </Button>
    </Container>
  );
};

export default HotelDetails;
