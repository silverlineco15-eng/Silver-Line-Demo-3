import ScrollReveal from './ScrollReveal'

export default function ProjectCard({ title, role, description }) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      {role && <p className="project-card__role">{role}</p>}
      <p className="project-card__desc">{description}</p>
    </article>
  )
}

export function SkillList({ title, items }) {
  return (
    <ScrollReveal>
      <div className="skill-block">
        <h3 className="skill-block__title">{title}</h3>
        <ul className="skill-block__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}

export function ProfileLinks({ links }) {
  return (
    <ScrollReveal>
      <div className="profile-links">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            className="profile-links__item"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span className="profile-links__label">{label}</span>
            <span className="profile-links__value">{href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}</span>
          </a>
        ))}
      </div>
    </ScrollReveal>
  )
}
