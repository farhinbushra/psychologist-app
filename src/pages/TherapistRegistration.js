
import { useNavigate } from "react-router-dom";


function TherapistRegistration() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      specialization: form.specialization.value,
      experience: form.experience.value,
      bio: form.bio.value,
    };

    const slug = data.fullName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/therapist/${slug}`, { state: data });
  };

  return (
    <div className="therapist-register">
      <h2 className="animated-text">Join as a Therapist</h2>
      <h1>Therapist Registration</h1>

      <form className="register-form" onSubmit={handleSubmit}>
        <input name="fullName" type="text" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
        <input name="specialization" type="text" placeholder="Specialization" required />
        <input name="experience" type="number" placeholder="Years of Experience" required />

        <textarea
          name="bio"
          placeholder="Short Bio / About You"
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default TherapistRegistrat
