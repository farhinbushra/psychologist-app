import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PaymentSuccess from "./pages/PaymentSuccess";
import Therapist from "./components/Therapist";
import Testimonial from"./components/Testimonial";
import Appointment from "./components/Appointment";
import TherapistRegistration from "./pages/TherapistRegistration";
import TherapistProfile from "./pages/TherapistProfile";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/therapist/:id" element={<TherapistProfile />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/therapistregistration" element={<TherapistRegistration/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
