import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import Otp from "./pages/auth/Otp";
import ChangePassword from "./pages/auth/ChangePassword";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Stores from "./pages/stores/Stores";
import Notifications from "./pages/notifications/Notifications";
import Pricing from "./pages/pricing/Pricing";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import AddAddress from "./pages/profile/AddAddress";
import MyOrders from "./pages/orders/MyOrders";
import StoreDetails from "./pages/stores/StoreDetails";
import ScheduleService from "./pages/stores/ScheduleService";
import BillingDetails from "./pages/stores/BillingDetails";

function App() {
  return (
    <section className="font-poppins">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route exact path="/verify-otp" element={<Otp />} />
            <Route exact path="/change-password" element={<ChangePassword />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/stores" element={<Stores />} />
            <Route exact path="/store-details" element={<StoreDetails />} />
            <Route exact path="/schedule-service" element={<ScheduleService />} />
            <Route exact path="/billing-details" element={<BillingDetails />} />
            <Route exact path="/contact-us" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/notifications" element={<Notifications />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/add-address" element={<AddAddress />} />
            <Route exact path="/my-orders" element={<MyOrders />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </section>
  );
}

export default App;
