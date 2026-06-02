import { Link, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import SilverLineAccent from '../components/SilverLineAccent'
import ScrollReveal from '../components/ScrollReveal'
import './ProjectDetail.css'

/**
 * Hidden project detail page — accessible at /#/work/:id
 * Not linked from nav until Our Work section is enabled.
 */
export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className="project-detail section">
        <div className="container container--narrow">
          <h1 className="section-heading">Project not found</h1>
          <p className="body-text">This project doesn&apos;t exist yet.</p>
          <Link to="/" className="btn-pill" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="project-detail__hero">
        <div className="container">
          <ScrollReveal>
            <Link to="/" className="project-detail__back">&larr; Back</Link>
            <p className="section-label">{project.category} · {project.year}</p>
            <h1 className="project-detail__title">{project.title}</h1>
            <SilverLineAccent align="left" width="100px" />
          </ScrollReveal>
        </div>
      </div>
      <div className="project-detail__body section">
        <div className="container container--narrow">
          <ScrollReveal delay={0.1}>
            <div className="project-detail__image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-detail__placeholder" aria-hidden="true" />
              )}
            </div>
            <p className="body-text project-detail__desc">{project.description}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
