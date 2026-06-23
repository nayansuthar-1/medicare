import { useState } from 'react'

const departments = [
  'Cardiology',
  'Neurology',
  'Dental Care',
  'Pediatrics',
  'Orthopedics',
  'General Checkup',
]

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    date: '',
  })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section appointment" id="appointment">
      <div className="container appointment__inner">
        <div className="appointment__copy">
          <span className="eyebrow eyebrow--light">Book Now</span>
          <h2>Schedule your appointment</h2>
          <p>
            Tell us a little about you and pick a time. Our team will confirm your
            visit within 24 hours.
          </p>
          <ul className="appointment__list">
            <li>📞 +1 (800) 555-0199</li>
            <li>✉️ care@medicareplus.health</li>
            <li>📍 124 Wellness Ave, Suite 300</li>
          </ul>
        </div>

        <div className="appointment__form-wrap">
          {submitted ? (
            <div className="appointment__success" role="status">
              <div className="appointment__check">✓</div>
              <h3>Request received!</h3>
              <p>
                Thanks, {form.name || 'there'}. We'll email you at{' '}
                <strong>{form.email || 'your inbox'}</strong> to confirm your{' '}
                {form.department || 'appointment'}.
              </p>
              <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>
                Book another
              </button>
            </div>
          ) : (
            <form className="appointment__form" onSubmit={onSubmit}>
              <label>
                Full name
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Jane Doe"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="jane@email.com"
                />
              </label>
              <label>
                Department
                <select name="department" value={form.department} onChange={update} required>
                  <option value="" disabled>
                    Select a department
                  </option>
                  {departments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Preferred date
                <input type="date" name="date" value={form.date} onChange={update} required />
              </label>
              <button type="submit" className="btn btn--primary btn--lg btn--block">
                Confirm Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
