import { useState } from "react";

export default function Testimonial({ testimonials }) {
  const [form, setForm] = useState({ name: "", feedback: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert("Feedback submitted"); setForm({ name: "", feedback: "" }) };

  return (
    <div className="card">
      <h2>Patient Testimonials</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="feedback" placeholder="Your Feedback" value={form.feedback} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {testimonials.map(t => <li key={t.id}>{t.name}: {t.feedback}</li>)}
      </ul>
    </div>
  );
}
