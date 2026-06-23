const stats = [
  { value: '50k+', label: 'Patients served' },
  { value: '200+', label: 'Expert doctors' },
  { value: '30+', label: 'Specialties' },
  { value: '24/7', label: 'Support available' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat__value text-grad">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
