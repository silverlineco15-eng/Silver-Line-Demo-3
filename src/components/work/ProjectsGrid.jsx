import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import './ProjectsGrid.css'

/**
 * Hidden work grid — not rendered on any page yet.
 * See src/data/projects.js for enable instructions.
 */
export default function ProjectsGrid({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <ScrollReveal key={project.id} delay={i * 0.1}>
          <Link to={`/work/${project.id}`} className="projects-grid__card">
            <div className="projects-grid__image">
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <div className="projects-grid__placeholder" aria-hidden="true" />
              )}
            </div>
            <div className="projects-grid__info">
              <span className="projects-grid__category">{project.category}</span>
              <h3 className="projects-grid__title">{project.title}</h3>
              <p className="projects-grid__desc">{project.description}</p>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  )
}
