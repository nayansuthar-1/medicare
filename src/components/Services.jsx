const services = [
  {
    icon: '🫀',
    title: 'Cardiology',
    text: 'Comprehensive heart care, from screenings to advanced treatment.',
  },
  {
    icon: '🧠',
    title: 'Neurology',
    text: 'Expert diagnosis and care for the brain and nervous system.',
  },
  {
    icon: '🦷',
    title: 'Dental Care',
    text: 'Gentle, modern dentistry for healthy smiles at every age.',
  },
  {
    icon: '👶',
    title: 'Pediatrics',
    text: 'Trusted care for infants, children, and adolescents.',
  },
  {
    icon: '🦴',
    title: 'Orthopedics',
    text: 'Bone, joint, and muscle care to keep you moving freely.',
  },
  {
    icon: '🔬',
    title: 'Lab & Diagnostics',
    text: 'Fast, accurate testing with results you can trust.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Our Services</span>
          <h2>Complete care under one roof</h2>
          <p>From routine checkups to specialized treatment, our experts are here for you.</p>
        </div>

        <div className="grid grid--3">
          {services.map((s) => (
            <article key={s.title} className="card service">
              <div className="service__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#appointment" className="link-arrow">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
