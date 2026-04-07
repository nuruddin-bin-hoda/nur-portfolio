const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Vite, and Tailwind CSS. Fully responsive with smooth animations and a modern dark design.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/nuruddin-bin-hoda/nur-portfolio",
    live: "#",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with CRUD operations, user authentication, and real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nuruddin-bin-hoda",
    live: "#",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time data from a public API and displays it with clean charts and animations.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/nuruddin-bin-hoda",
    live: "#",
    featured: false,
  },
  {
    title: "E-Commerce UI",
    description:
      "A modern e-commerce front-end with product listings, cart functionality, and responsive layout.",
    tags: ["React", "Tailwind CSS", "Redux"],
    github: "https://github.com/nuruddin-bin-hoda",
    live: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A markdown-based blog platform with dynamic routing, syntax highlighting, and SEO optimizations.",
    tags: ["React", "Node.js", "Markdown"],
    github: "https://github.com/nuruddin-bin-hoda",
    live: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app with WebSocket support, rooms, and typing indicators.",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/nuruddin-bin-hoda",
    live: "#",
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
      {project.featured && (
        <span className="mb-4 self-start px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          Featured
        </span>
      )}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white">
            Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/nuruddin-bin-hoda"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold transition-colors duration-200"
          >
            View All on GitHub
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
