import { useEffect, useState } from "react";
import TherapistList from "./components/TherapistList";
import AppointmentForm from "./components/AppointmentForm";
import Testimonial from "./components/Testimonial";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [therapists, setTherapists] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/therapists").then(r => r.json()).then(setTherapists);
    fetch("http://localhost:5000/testimonials").then(r => r.json()).then(setTestimonials);
  }, []);

  return (
    <div>
      <h1>Psychologist Platform</h1>
      <TherapistList therapists={therapists} />
      <AppointmentForm therapists={therapists} />
      <Testimonial testimonials={testimonials} />
      <AdminPanel />
    </div>
  );
}

export default App;
