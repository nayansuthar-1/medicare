export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="pill">
            <span className="pill__dot" /> Trusted by 50,000+ patients
          </span>
          <h1>
            Compassionate care, <span className="text-grad">modern medicine</span>
          </h1>
          <p className="hero__lead">
            Book appointments, consult top specialists, and access your health records —
            all in one place. Quality healthcare that fits your life, 24/7.
          </p>

          <div className="hero__actions">
            <a href="#appointment" className="btn btn--primary btn--lg">Book an Appointment</a>
            <a href="#services" className="btn btn--ghost btn--lg">Explore Services</a>
          </div>

          <ul className="hero__trust">
            <li>✓ Same-day appointments</li>
            <li>✓ Board-certified doctors</li>
            <li>✓ Insurance accepted</li>
          </ul>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__card hero__card--main">
            <div className="hero__avatar">🩺</div>
            <div>
              <strong>Dr. Amelia Reyes</strong>
              <span>Cardiologist · Available now</span>
            </div>
            <span className="badge badge--green">Online</span>
          </div>

          <div className="hero__card hero__card--float1">
            <span className="hero__icon">❤️</span>
            <div>
              <strong>72 bpm</strong>
              <span>Heart rate · Normal</span>
            </div>
          </div>

          <div className="hero__card hero__card--float2">
            <span className="hero__icon">📅</span>
            <div>
              <strong>Appointment set</strong>
              <span>Tomorrow · 10:30 AM</span>
            </div>
          </div>

          <div className="hero__blob" />
        </div>
      </div>
    </section>
  )
}
