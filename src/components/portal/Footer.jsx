const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {year}{" "}
          <span className="text-indigo-400 font-semibold">Nuruddin Bin Hoda</span>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/" },
            { label: "GitHub", href: "https://github.com/nuruddin-bin-hoda" },
            { label: "X", href: "https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
