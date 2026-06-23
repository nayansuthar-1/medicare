const reviews = [
  {
    text: 'Booking was effortless and the doctor truly listened. Best healthcare experience I have had.',
    name: 'Priya N.',
    meta: 'Cardiology patient',
  },
  {
    text: 'The telemedicine visit saved me a trip and I got my prescription within minutes. Amazing.',
    name: 'Marcus T.',
    meta: 'Telemedicine patient',
  },
  {
    text: 'Friendly staff, short wait times, and they handled all my insurance paperwork. Highly recommend.',
    name: 'Elena R.',
    meta: 'Pediatrics parent',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Patient Stories</span>
          <h2>Loved by the people we care for</h2>
          <p>Real experiences from our community of patients.</p>
        </div>

        <div className="grid grid--3">
          {reviews.map((r) => (
            <figure key={r.name} className="card review">
              <div className="review__stars">★★★★★</div>
              <blockquote>"{r.text}"</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
