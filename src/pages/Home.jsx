import { motion } from 'framer-motion'
import SilverLineAccent from '../components/SilverLineAccent'
import ScrollReveal from '../components/ScrollReveal'
import PhotoSlot from '../components/PhotoSlot'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import './Home.css'

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const services = [
  {
    title: 'Brand-new websites & redesigns',
    description: 'Clean, professional sites built from the ground up — or a full refresh of what you already have.',
    featured: true,
  },
  {
    title: 'Admin panel',
    description: 'Manage your content without touching code.',
  },
  {
    title: 'Appointment booking',
    description: 'Let customers schedule with you online, anytime.',
  },
  {
    title: 'Payment integration',
    description: 'Accept payments securely, right on your site.',
  },
  {
    title: 'Contact forms',
    description: 'Capture leads and inquiries with forms that actually work.',
  },
]

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero" aria-label="Hero">
        <div className="hero__content">
          <h1 className="hero__headline">
            <motion.span
              className="hero__line hero__line--white"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              Your business deserves a
            </motion.span>
            <motion.span
              className="hero__line hero__line--silver silver-line-wordmark silver-line-wordmark--lg"
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              Silver Line
            </motion.span>
          </h1>

          <SilverLineAccent delay={0.45} width="160px" className="hero__accent" />

          <motion.p
            className="hero__subheadline"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
          >
            Bridging the gap between your business and its digital potential.
          </motion.p>

          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
          >
            <button type="button" className="btn-pill" onClick={scrollToContact}>
              Get in touch
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section section--deep" aria-labelledby="who-heading">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Who we are</p>
            <h2 id="who-heading" className="section-heading">Two builders. One standard.</h2>
          </ScrollReveal>

          <div className="team-grid">
            <ScrollReveal delay={0.1}>
              <Link to="/evan" className="team-card">
                <PhotoSlot src="/evan.png" alt="Evan Bridges" name="Evan" />
                <span className="team-card__name">Evan Bridges</span>
                <span className="team-card__role">Consultant / Web Designer</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link to="/william" className="team-card">
                <PhotoSlot src="/william.png" alt="William Stockham" name="William" />
                <span className="team-card__name">William Stockham</span>
                <span className="team-card__role">Strategist / Creative Director</span>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <p className="body-text team-description">
              Most customers decide whether to trust a business before they ever walk
              through the door — and that decision happens on your website. Silver Line
              helps local businesses make that first impression count with clean,
              professional websites that turn visitors into paying customers. We&apos;re two
              college students who are affordable, easy to work with, and genuinely invested
              in watching your business grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <SilverLineAccent align="left" width="80px" />
            <p className="section-label" style={{ marginTop: '1.5rem' }}>What we do</p>
            <h2 id="services-heading" className="section-heading">Websites that work as hard as you do</h2>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <article className={`service-card ${service.featured ? 'service-card--featured' : ''}`}>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="services-quote">Contact us for a quote.</p>
          </ScrollReveal>
        </div>
      </section>

      {/*
        OUR WORK — HIDDEN FOR NOW
        To enable: import ProjectsGrid and { projects } from src/data/projects.js
        Uncomment the section below and add "Our Work" to NAV_LINKS in Navbar.jsx

      <section className="section section--deep" id="work" aria-labelledby="work-heading">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Our work</p>
            <h2 id="work-heading" className="section-heading">Selected projects</h2>
          </ScrollReveal>
          <ProjectsGrid projects={projects} />
        </div>
      </section>
      */}

      <section className="section section--deep" id="contact" aria-labelledby="contact-heading">
        <div className="container container--narrow">
          <ScrollReveal>
            <SilverLineAccent align="left" width="80px" />
            <p className="section-label" style={{ marginTop: '1.5rem' }}>Contact</p>
            <h2 id="contact-heading" className="section-heading">Let&apos;s build something together</h2>
            <p className="body-text" style={{ marginBottom: '2.5rem' }}>
              Tell us about your business and what you&apos;re looking for. We&apos;ll get back to you soon.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
