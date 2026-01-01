import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
      <h2 className="logo">MentalHealthCare</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/testimonial">Testimonials</Link></li>
      </ul>
    </nav>
      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Mental Health <br />
            <span>Matters</span>
          </h1>

          <p>
            Connect with certified psychologists and therapists.
            Book confidential sessions and start your healing journey today.
          </p>

          <div className="hero-actions">
            <Link to="/appointment">
              <button className="primary-btn">Book Appointment</button>
            </Link>

            <Link to="/therapist">
              <button className="secondary-btn">Meet Therapists</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-box"></div>
        </div>
      </section>
       <footer className="footer">
      <div className="footer-content">
        <h3>MentalHealthCare</h3>
        <p>Supporting your mental health, every step of the way.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Contact 0192345678</span>
        </div>

        <small>© {new Date().getFullYear()} MindCare. All rights reserved.</small>
      </div>
      
    </footer>
    </div>
    
     
  );
}


export default Home;
