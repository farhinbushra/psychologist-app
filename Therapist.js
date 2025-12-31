export default function Therapist({ therapists }) {
    return (
        <div className="card">
            <h2>Therapists</h2>
            <ul>
                {therapists.map(t => (
                    <li key={t.id}>
                        {t.name} - {t.specialization} ({t.experience} yrs)
                    </li>
                ))}
            </ul>
        </div>
    );
}
