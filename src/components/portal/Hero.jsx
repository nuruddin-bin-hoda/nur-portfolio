function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium tracking-wide">
            Available for Freelance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Nuruddin
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            A passionate web developer crafting clean, performant, and
            user-friendly digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-gray-600 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-6">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/",
              },
              {
                label: "GitHub",
                href: "https://github.com/nuruddin-bin-hoda",
              },
              {
                label: "X / Twitter",
                href: "https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image card */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-30" />
            <div className="relative w-full h-full rounded-3xl border border-gray-700 bg-gray-900 overflow-hidden flex items-center justify-center">
              <img
                src="nuruddin-img.jpg"
                alt="Nuruddin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("items-center", "justify-center");
                }}
              />
              {/* Brand watermark — top-left */}
              <span className="absolute top-3 left-4 text-2xl font-extrabold text-white opacity-40 select-none z-20 tracking-tight">
                N<span className="text-indigo-400">.</span>
              </span>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-700 rounded-2xl px-4 py-2 shadow-xl">
              <p className="text-xs text-gray-400">Status</p>
              <p className="text-sm font-semibold text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                Open to work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
