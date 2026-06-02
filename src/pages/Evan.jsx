import { motion } from 'framer-motion'
import PhotoSlot from '../components/PhotoSlot'
import SilverLineAccent from '../components/SilverLineAccent'
import ScrollReveal from '../components/ScrollReveal'
import ProjectCard, { SkillList, ProfileLinks } from '../components/ProfileSections'
import './Profile.css'

const projects = [
  {
    title: 'Red Ventures Case Study — 1st Place',
    role: 'Consultant',
    description:
      'Led a 4-member team to first place in a 5-hour strategy case competition. Developed three growth initiatives using the Three A\'s framework (Attract, Assist, Advance) to improve user acquisition, engagement, and conversion. Ran SEO and competitive analysis to evaluate keyword gaps and AI Overview (AIO) disruption risk. Presented a strategic product proposal: a personalized college-matching tool, a university partnership pipeline for career pathways, and a user/alumni review platform. Analyzed data and helped drive a back-end AI solution to optimize and streamline workflow.',
  },
  {
    title: 'Truist Immersive Learning Experience',
    role: 'Designer & Implementer',
    description:
      'Designed and implemented a 3-level structured SharePoint system with role-based access (workers, managers, executives) to resolve disorganization and lost files. Used Power BI, Power Automate, and Microsoft Lists to automate workflows and assign file ownership. Built two key automations: an approval-based email access system and an AI-powered search agent for faster file retrieval and collaboration.',
  },
]

export default function Evan() {
  return (
    <>
      <section className="profile-hero" aria-label="Evan Bridges">
        <div className="profile-hero__inner">
          <motion.div
            className="profile-hero__photo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhotoSlot
              src="/evan.png"
              alt="Evan Bridges"
              name="Evan"
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
              Consultant / Web Designer
            </motion.p>
            <motion.h1
              className="profile-hero__name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Evan Bridges
            </motion.h1>
            <SilverLineAccent align="left" width="80px" delay={0.3} />
            <motion.p
              className="profile-hero__tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              I turn digital platforms into real business growth
            </motion.p>
            <motion.div
              className="profile-hero__details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <span className="profile-hero__detail"><strong>From:</strong> Shelby, NC</span>
              <span className="profile-hero__detail"><strong>Education:</strong> UNC Charlotte — Business Analytics &amp; Finance</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="profile-section section--deep">
        <div className="profile-section__inner container">
          <ScrollReveal>
            <h2 className="profile-section__heading">About</h2>
            <p className="body-text">
              Evan got into web design after recognizing an opportunity most businesses
              overlook — a strong digital presence lets businesses elevate their portfolio
              and reach new heights. He&apos;s driven by solving real problems for local businesses
              and turning creative execution into measurable results.
            </p>
            <p className="body-text" style={{ marginTop: '1.25rem' }}>
              What sets him apart is how he builds genuine, non-transactional relationships with
              clients. He approaches every project as a consultant, taking a holistic view of the
              business to find growth opportunities well beyond the screen.
            </p>
            <p className="body-text" style={{ marginTop: '1.25rem' }}>
              Outside of work, you&apos;ll find him doing anything active — gym, hiking, rock climbing.
              He&apos;s into basketball and always keeping up with the latest in tech.
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
                'Excel (Pivot Tables, VLOOKUP, data analysis)',
                'SQL',
                'Tableau',
                'Power BI',
                'PowerPoint & Microsoft Office',
                'ChatGPT & Claude Code',
              ]}
            />
            <SkillList
              title="Soft skills"
              items={[
                'Leadership',
                'Accountability',
                'Verbal & Written Communication',
                'Structured Problem Solving',
                'Critical Thinking',
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
        <div className="profile-section__inner container container--narrow">
          <ScrollReveal>
            <h2 className="profile-section__heading">Connect</h2>
          </ScrollReveal>
          <ProfileLinks
            links={[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/evan-bridges', external: true },
              { label: 'Email', href: 'mailto:eb@silverlinestudios.net' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
