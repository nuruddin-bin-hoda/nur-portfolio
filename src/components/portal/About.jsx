const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Years Learning", value: "3+" },
  { label: "Open Source Contributions", value: "5+" },
];

function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-stone-900 dark:text-white">About Me</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Text block */}
          <div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
              A developer who loves building things for the web
            </h3>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed mb-4">
              I&apos;m Nuruddin Bin Hoda, a web developer passionate about
              creating clean, efficient, and accessible web applications. I
              enjoy turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed mb-8">
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "REST APIs"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors duration-200"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-stone-50 dark:bg-gray-800 border border-stone-200 dark:border-gray-700 p-6 text-center hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors duration-300"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-stone-500 dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
