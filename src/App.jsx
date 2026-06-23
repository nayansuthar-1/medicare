import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import Features from './components/Features.jsx'
import Doctors from './components/Doctors.jsx'
import Testimonials from './components/Testimonials.jsx'
import Appointment from './components/Appointment.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Doctors />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
