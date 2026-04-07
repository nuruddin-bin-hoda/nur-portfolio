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

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-indigo-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
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
    <section id="skills" className="py-24 bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            What I Know
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-white">
            My Skills
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl bg-gray-900 border border-gray-800 p-8 hover:border-indigo-500/40 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-white mb-6">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
