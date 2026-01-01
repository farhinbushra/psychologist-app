import "./Testimonial.css";
import { Link } from "react-router-dom";

function Testimonial() {
  const reviews = [
    {
      name: "Ayesha",
      text: "This platform helped me regain confidence and peace.",
    },
    {
      name: "Rahman",
      text: "The therapists are very professional and supportive.",
    },
    {
      name: "Nabila",
      text: "Booking was easy and the session really helped me.",
    },
  ];

  return (
    <div className="testimonial">
      <h1>What Our Patients Say</h1>

      <div className="testimonial-container">
        {reviews.map((r, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>

      {/* Soft CTA */}
      <div className="testimonial-cta">
        <p>Ready to start your healing journey?</p>
        <Link to="/appointment">
          <button>Book Your Session</button>
        </Link>
      </div>
    </div>
  );
}

export default Testimonial;
