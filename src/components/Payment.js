import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth } from "../firebase";
import axios from "axios";

const Payment = () => {

  const navigate = useNavigate();

  const amount = useLocation();

  const amountPerNight = amount.state?.productDetails?.pricePerNight;
  const userDetails = auth.currentUser;

  let [user, setUser] = useState({
    email: userDetails ? userDetails.email : "",
    phoneNumber: userDetails ? userDetails.phoneNumber : "",
    adhaarNumber: "",
    upi: "",
    days: "",
    price: amountPerNight || "",
  });

  let { email, phoneNumber, upi, adhaarNumber, price, days } = user;

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const buttonClicked = (e) => {
    e.preventDefault();
    if (!email || !phoneNumber || !upi || !adhaarNumber || !price || !days) {
      alert("Please fill all input fields");
    } else if (phoneNumber.length !== 10) {
      alert("Please enter a valid Phone number");
    } else if (adhaarNumber.length !== 16) {
      alert("Please enter a valid Adhaar number");
    } else {
      axios
        .post(
          "https://book-hotel-624ec-default-rtdb.firebaseio.com/userData.json",
          user
        )
        .then(() =>
          alert("Thanks for using BookYourRoom to book a Hotel room!! ")
        )
        .then(() =>
          setUser({
            email: "",
            phoneNumber: "",
            adhaarNumber: "",
            upi: "",
            days: "",
            price: "",
          })
        ).then(() => navigate('/home'))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column", marginTop: 70 }}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        <label>Mobile Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        <label>Adhaar Number</label>
        <input
          type="number"
          placeholder="Adhaar Number"
          name="adhaarNumber"
          value={adhaarNumber}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        <label>UPI</label>
        <input
          type="text"
          placeholder="UPI"
          name="upi"
          value={upi}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        <label>Number of days</label>
        <input
          type="number"
          placeholder="Number of days"
          name="days"
          value={days}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        {days ? <label>price</label> : ""}
        <input
          type={days ? "number" : "hidden"}
          placeholder="money"
          name="price"
          value={price}
          onChange={handleOnChange}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "5px" }}
        />
        <button
          onClick={buttonClicked}
          style={{
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "blue",
            opacity: "0.7",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
