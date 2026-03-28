import "./Therapist.css";
import { Link } from "react-router-dom";

function Therapist() {
  const therapists = [
    {
      name: "Dr. Sarah Ahmed",
      specialty: "Clinical Psychologist",
      experience: "5+ Years Experience",
    },
    {
      name: "Dr. Rahim Khan",
      specialty: "Mental Health Counselor",
      experience: "7+ Years Experience",
    },
    {
      name: "Dr. Nusrat Jahan",
      specialty: "Child Psychologist",
      experience: "4+ Years Experience",
    },
  ];

  return (
    <div className="therapist-page">
      <h1>Meet Our Therapists</h1>
      <p className="subtitle">
        Certified professionals ready to support your mental health journey
      </p>

      <div className="therapist-container">
        {therapists.map((t, index) => (
          <div className="therapist-card" key={index}>
            <div className="avatar">{t.name.charAt(0)}</div>

            <h3>{t.name}</h3>
            <p className="specialty">{t.specialty}</p>
            <span className="experience">{t.experience}</span>

            <div className="actions">
              <Link to="/appointment">
                <button className="book">Book</button>
              </Link>
              <button className="profile">Profile</button>
            </div>
          </div>
        ))}
      </div>
       <section id="slide" class="slide">
            
            <a href="#slide" class="arrow left">‹</a>
            <a href="#slide" class="arrow right">›</a>
        </section>
    </div>
  );
}

export default Therapist;
