import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Motion Landing Page',
    description: 'A high-performance marketing page with micro-interactions and scroll-triggered animations.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    link: 'https://example.com'
  },
  {
    title: '3D Product Viewer',
    description: 'Interactive product showcase integrating Spline scenes and custom shaders.',
    tags: ['React', 'Spline', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    link: 'https://example.com'
  },
  {
    title: 'Design System',
    description: 'Reusable component library with accessibility baked in and modern aesthetics.',
    tags: ['Radix', 'Tailwind', 'Design'],
    image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW18ZW58MHwwfHx8MTc2MzIwODE5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://example.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">A curated set of projects that blend performance, aesthetics, and usability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
