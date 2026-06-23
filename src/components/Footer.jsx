export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand brand--light">
            <span className="brand__mark" aria-hidden="true">✚</span>
            <span className="brand__name">MediCare<span>+</span></span>
          </a>
          <p>Compassionate, modern healthcare for you and your family — anytime, anywhere.</p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <a href="#services">Cardiology</a>
          <a href="#services">Neurology</a>
          <a href="#services">Pediatrics</a>
          <a href="#services">Diagnostics</a>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <a href="#features">Why Us</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#testimonials">Reviews</a>
          <a href="#appointment">Contact</a>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <a href="tel:+18005550199">+1 (800) 555-0199</a>
          <a href="mailto:care@medicareplus.health">care@medicareplus.health</a>
          <p className="footer__hours">Mon–Sat · 8:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} MediCare+. All rights reserved.</p>
        <p>For emergencies, always call your local emergency number.</p>
      </div>
    </footer>
  )
}
