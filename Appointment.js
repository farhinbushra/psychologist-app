import { useState } from "react";

export default function Appointment({ therapists }) {
  const [form, setForm] = useState({ patientName: "", email: "", therapist: "", date: "" });
  const [appointments, setAppointments] = useState([]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setAppointments([...appointments, { ...form, id: Date.now() }]);
    setForm({ patientName: "", email: "", therapist: "", date: "" });
    alert("Appointment booked successfully!");
  };

  return (
    <div className="card">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="patientName" placeholder="Your Name" value={form.patientName} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
        <select name="therapist" value={form.therapist} onChange={handleChange} required>
          <option value="">Select Therapist</option>
          {therapists.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
        </select>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Book</button>
      </form>

      <h3>Appointments</h3>
      <ul>
        {appointments.map(a => <li key={a.id}>{a.patientName} with {a.therapist} on {a.date}</li>)}
      </ul>
    </div>
  );
}
