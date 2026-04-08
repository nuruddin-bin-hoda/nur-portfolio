function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-stone-50 dark:bg-gray-950 px-6 transition-colors duration-300"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-200/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-wide">
            Available for Freelance
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-white leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Nuruddin
            </span>
          </h1>
          <p className="text-lg text-stone-600 dark:text-gray-400 mb-8 leading-relaxed">
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
              className="px-7 py-3 rounded-full border border-stone-300 dark:border-gray-600 hover:border-indigo-500 text-stone-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white font-semibold transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/" },
              { label: "GitHub", href: "https://github.com/nuruddin-bin-hoda" },
              { label: "X / Twitter", href: "https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-stone-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Image card */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 blur-xl opacity-20 dark:opacity-30" />
            <div className="relative w-full h-full rounded-3xl border border-stone-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center shadow-lg dark:shadow-none">
              <img
                src="nuruddin-img.jpg"
                alt="Nuruddin"
                className="w-full h-full object-cover"
              />
              {/* Brand watermark — top-left */}
              <span className="absolute top-3 left-4 text-2xl font-extrabold text-white opacity-40 select-none z-20 tracking-tight">
                N<span className="text-indigo-400">.</span>
              </span>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-700 rounded-2xl px-4 py-2 shadow-xl">
              <p className="text-xs text-stone-400 dark:text-gray-400">Status</p>
              <p className="text-sm font-semibold text-green-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                Open to work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 dark:text-gray-600 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
