import { motion } from 'framer-motion'
import PhotoSlot from '../components/PhotoSlot'
import SilverLineAccent from '../components/SilverLineAccent'
import ScrollReveal from '../components/ScrollReveal'
import ProjectCard, { SkillList, ProfileLinks } from '../components/ProfileSections'
import './Profile.css'

const projects = [
  {
    title: 'Automatic Chicken Coop Door',
    role: 'Project Manager — NC State, E101',
    description:
      'Ran the engineering design process: figured out the design, identified parts to buy, and planned the build.',
  },
  {
    title: 'FTC Robotics — 4 years',
    role: 'Lead Mechanical Head & Build Team',
    description:
      'Team 8300 PiRho Eagles: lead mechanical head, managing the robot\'s design, creation, and upkeep. Team 24789 Split Second: build team — assembled the telescoping rail and helped generate ideas like the hooks on the telescoping arm to pull the robot up.',
  },
  {
    title: 'Eagle Scout Project',
    role: 'Patterson Springs, NC',
    description:
      'Park revitalization — tore out the old wooden border and weed-filled sand, rebuilt the border, laid contractor paper, filled it with rubber mulch under the playground, planted two shade trees, and built two benches beneath them.',
  },
]

export default function William() {
  return (
    <>
      <section className="profile-hero" aria-label="William Stockham">
        <div className="profile-hero__inner">
          <motion.div
            className="profile-hero__photo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhotoSlot
              src="/william.png"
              alt="William Stockham"
              name="William"
              className="photo-slot--round"
            />
          </motion.div>
          <div className="profile-hero__meta">
            <motion.p
              className="profile-hero__title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Strategist / Creative Director
            </motion.p>
            <motion.h1
              className="profile-hero__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              William Stockham
            </motion.h1>
            <SilverLineAccent align="left" width="80px" delay={0.3} />
            <motion.p
              className="profile-hero__tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              I bring the ideas most people can&apos;t see yet
            </motion.p>
            <motion.div
              className="profile-hero__details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <span className="profile-hero__detail"><strong>From:</strong> Shelby, NC</span>
              <span className="profile-hero__detail"><strong>Education:</strong> NC State — Materials Science &amp; Engineering</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="profile-section section--deep">
        <div className="profile-section__inner container">
          <ScrollReveal>
            <h2 className="profile-section__heading">About</h2>
            <p className="body-text">
              William is the idea guy — he manages many streams of thought at once and sees
              angles others miss. Personable, a quick thinker, and a strong presenter, he
              thrives in high-pressure and unfamiliar situations when he can see the goal and
              the path to it. An Eagle Scout, he brings discipline and follow-through to
              everything he touches.
            </p>
            <p className="body-text" style={{ marginTop: '1.25rem' }}>
              What he brings to the table is multitasking and analysis — identifying the pros
              and cons of many things at once and managing multiple lines of thought with ease.
              He&apos;s been into tech his whole life (PC games since preschool) and has been deeply
              interested in AI since the Covid-era boom, always pushing it to its fullest potential.
              He&apos;s fascinated by tech at the brink of human ability — think the Mjolnir armor from Halo.
            </p>
            <p className="body-text" style={{ marginTop: '1.25rem' }}>
              His research interests span Materials Science — amorphous metals for armor, Shear
              Thickening Fluid as a Kevlar enhancement, graphene production, exoskeletons, and
              piezoelectric materials for human enhancement. Previously at NCSSM (Morganton), where
              he did independent research on body armor, and Pinnacle Classical Academy before that.
            </p>
            <p className="body-text" style={{ marginTop: '1.25rem' }}>
              What sets him apart: highly motivated and knowledgeable, in pitches he makes
              connections few others will — about product quality, psychology, and what it
              means to stand out and shape perception.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-section__inner container">
          <ScrollReveal>
            <h2 className="profile-section__heading">Skills &amp; tools</h2>
          </ScrollReveal>
          <div className="skills-grid">
            <SkillList
              title="Technical"
              items={[
                'Proficient with AI tools',
                'Coding fundamentals & Python',
                'Mathematical modeling & linear algebra',
                'Analytics & quantitative evidence',
                'Strong grasp of aesthetic principles',
              ]}
            />
            <SkillList
              title="Soft skills"
              items={[
                'Public speaking & off-the-cuff speaking',
                'Presenting',
                'Easy to talk to',
                'Quick thinking under pressure',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="profile-section profile-section--alt">
        <div className="profile-section__inner container">
          <ScrollReveal>
            <SilverLineAccent align="left" width="80px" />
            <h2 className="profile-section__heading" style={{ marginTop: '1.5rem' }}>Key projects</h2>
          </ScrollReveal>
          <div className="projects-list">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-section__inner container">
          <ScrollReveal>
            <h2 className="profile-section__heading">In progress</h2>
            <ul className="in-progress-list">
              <li>Sewing capes from craft-store supplies</li>
              <li>Building a personal &ldquo;AI stack&rdquo; to continuously collect information to guide his ventures</li>
              <li>Early research toward graphene production, a full-body exoskeleton with force amplification, and a personal &ldquo;shirt radiator&rdquo;</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="profile-section profile-section--alt">
        <div className="profile-section__inner container container--narrow">
          <ScrollReveal>
            <h2 className="profile-section__heading">Connect</h2>
          </ScrollReveal>
          <ProfileLinks
            links={[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/william-stockham', external: true },
            ]}
          />
        </div>
      </section>
    </>
  )
}
