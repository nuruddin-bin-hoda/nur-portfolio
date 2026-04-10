const skillCategories = [
  {
    category: "Frontend",
    icon: "🖥",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "SQL / NoSQL", level: 65 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vite / Webpack", level: 78 },
      { name: "Docker (basics)", level: 55 },
      { name: "Figma / Design", level: 65 },
    ],
  },
];

const promptTags = ["GPT-4", "Claude", "Chain-of-Thought", "RAG", "LLM Fine-tuning"];

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-stone-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-indigo-500 dark:text-indigo-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-stone-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-stone-50 dark:bg-gray-950 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-500 dark:text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            What I Know
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-stone-900 dark:text-white">My Skills</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-800 p-8 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors duration-300 shadow-sm dark:shadow-none"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-6">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skill — Prompt Engineering */}
        <div className="mt-8 relative rounded-2xl p-px overflow-hidden shadow-lg">
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-pulse opacity-70 rounded-2xl" />

          <div className="relative rounded-2xl bg-white dark:bg-gray-900 p-8">
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                Featured Skill
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold tracking-wide">
                Expert
              </span>
            </div>

            {/* Skill name + bar */}
            <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white mb-3">
              Prompt Engineering
            </h3>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-stone-500 dark:text-gray-400">Proficiency</span>
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold">87%</span>
            </div>
            <div className="h-2.5 rounded-full bg-stone-200 dark:bg-gray-700 overflow-hidden mb-5">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </div>

            {/* Tagline */}
            <p className="text-stone-500 dark:text-gray-400 italic text-sm mb-5">
              &ldquo;I don&apos;t just use AI &mdash; I speak its language fluently.&rdquo;
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {promptTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
