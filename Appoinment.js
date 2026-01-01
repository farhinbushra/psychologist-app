
import "./Appointment.css";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>

      <form className="appointment-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="date" required />

        <select required>
          <option value="">Select Therapist</option>
          <option>Dr. Sarah Ahmed</option>
          <option>Dr. Rahim Khan</option>
          <option>Dr. Nusrat Jahan</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* Soft navigation for user */}
      <p style={{ marginTop: "20px" }}>
        Want to feel confident?{" "}
        <Link to="/testimonial">See patient reviews
         <button>Done</button>
        </Link>
    

      </p>
    </div>
  );
}

export default Appointment;
