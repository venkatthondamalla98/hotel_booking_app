import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

const HotelCard = (props) => {
  const navigation = useNavigate();

  const hotelDetails = props.hotel;

  const cardClicked = () => {
    navigation(`/hotel-details/${hotelDetails.slug}`);
  };

  return (
    <Card
      onClick={cardClicked}
      sx={{ maxWidth: 345, marginBottom: 5, marginTop: 5 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={hotelDetails.thumbnail}
          alt="Hotel-pictures"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              overflow: "hidden",
              height: 40,
            }}
          >
            {hotelDetails.name}
          </Typography>
          <Rating
            name="read-only"
            value={Math.floor(hotelDetails.rating)}
            readOnly
          />
          <Typography variant="body2" color="text.primary">
            ${hotelDetails.pricePerNight}/Night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
