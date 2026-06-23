const features = [
  {
    icon: '⚡',
    title: 'Same-day appointments',
    text: 'See a doctor when you need one — no long waits.',
  },
  {
    icon: '💻',
    title: 'Telemedicine',
    text: 'Secure video visits from the comfort of home.',
  },
  {
    icon: '🛡️',
    title: 'Insurance friendly',
    text: 'We work with all major insurance providers.',
  },
  {
    icon: '📱',
    title: 'Digital records',
    text: 'Access your history, results, and prescriptions anytime.',
  },
]

export default function Features() {
  return (
    <section className="section section--alt" id="features">
      <div className="container features__inner">
        <div className="features__copy">
          <span className="eyebrow">Why MediCare+</span>
          <h2>Healthcare designed around you</h2>
          <p className="muted">
            We combine experienced clinicians with modern technology to make care
            simpler, faster, and more personal.
          </p>
          <a href="#appointment" className="btn btn--primary">Get started today</a>
        </div>

        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="card feature">
              <div className="feature__icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
