const doctors = [
  { emoji: '👩‍⚕️', name: 'Dr. Amelia Reyes', role: 'Cardiologist', exp: '12 yrs' },
  { emoji: '👨‍⚕️', name: 'Dr. James Okafor', role: 'Neurologist', exp: '15 yrs' },
  { emoji: '👩‍⚕️', name: 'Dr. Sofia Haddad', role: 'Pediatrician', exp: '9 yrs' },
  { emoji: '👨‍⚕️', name: 'Dr. Liam Chen', role: 'Orthopedic Surgeon', exp: '18 yrs' },
]

export default function Doctors() {
  return (
    <section className="section" id="doctors">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Meet the Team</span>
          <h2>Caring experts you can trust</h2>
          <p>Board-certified specialists dedicated to your health and wellbeing.</p>
        </div>

        <div className="grid grid--4">
          {doctors.map((d) => (
            <article key={d.name} className="card doctor">
              <div className="doctor__avatar">{d.emoji}</div>
              <h3>{d.name}</h3>
              <p className="doctor__role">{d.role}</p>
              <p className="doctor__exp">{d.exp} experience</p>
              <div className="doctor__rating">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
