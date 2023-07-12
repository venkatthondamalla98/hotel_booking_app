import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import Layout from "./components/Layout";
import Payment from "./components/Payment";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/hotel-details/:id"
            element={
              <Layout>
                <HotelDetails />
              </Layout>
            }
          />
          <Route
            path="/payments"
            element={
              <Layout>
                <Payment />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
