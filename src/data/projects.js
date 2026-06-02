/**
 * Sample project data for the hidden "Our Work" section.
 *
 * TO ENABLE OUR WORK:
 * 1. Import ProjectsGrid in Home.jsx and render it in a new section.
 * 2. Add { label: 'Our Work', to: '/#work' } to NAV_LINKS in Navbar.jsx.
 * 3. Replace placeholder projects below with real client work.
 * 4. Route /work/:id is already wired in App.jsx via ProjectDetail page.
 */

export const projects = [
  {
    id: 'sample-redesign',
    title: 'Sample Client Redesign',
    category: 'Website Redesign',
    description: 'Placeholder project — swap with real case study when ready.',
    image: null,
    year: '2025',
  },
  {
    id: 'sample-build',
    title: 'Sample New Build',
    category: 'New Website',
    description: 'Placeholder project — swap with real case study when ready.',
    image: null,
    year: '2025',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
