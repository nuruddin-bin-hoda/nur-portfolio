function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] rounded-full bg-gradient-to-br from-gray-100 to-white opacity-70"></div>
          <div className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 rotate-90 text-[10rem] text-gray-200 font-bold select-none">
            PORTFOLIO
          </div>
        </div>

        {/* Container */}
        <div className="relative z-10 mx-auto mt-10 w-[90%] max-w-5xl rounded-2xl border border-black p-8 shadow-lg">
          <header className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold">N</div>
            <nav className="space-x-6 font-medium">
              <a href="#home" className="text-black hover:underline">
                HOME
              </a>
              <a href="#about" className="text-black hover:underline">
                ABOUT
              </a>
              <a href="#works" className="text-black hover:underline">
                WORKS
              </a>
              <a href="#contact" className="text-black hover:underline">
                CONTACT
              </a>
            </nav>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight mb-4">
                Hello
              </h1>
              <p className="text-5xl mb-6 text-gray-600">- I'm Nuruddin</p>
              <button className="mt-10 bg-black text-white px-6 py-2 rounded-full">
                SEE MY WORKS →
              </button>
              <div className="mt-4 space-x-4 text-sm text-gray-700">
                <a
                  href="https://www.linkedin.com/in/nuruddin-bin-hoda-80240536a/"
                  className="hover:underline"
                  target="_blank"
                >
                  Linkedin
                </a>
                <span>/</span>
                <a
                  href="https://x.com/nuruddinbinhoda?t=kmOqMYe2LzkZVrTj8buDWQ&s=09"
                  className="hover:underline"
                  target="_blank"
                >
                  X
                </a>
                <span>/</span>
                <a
                  href="https://github.com/nuruddin-bin-hoda"
                  className="hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[10rem] font-extrabold text-black opacity-10">
                  X
                </div>
              </div>
              <img
                src="nuruddin-img.png"
                alt="Bust"
                className="relative z-10 w-60 max-w-sm mx-auto"
              />
            </div>
          </main>
        </div>

        <footer className="absolute bottom-6 right-10 text-sm rotate-90 origin-bottom-right text-gray-500">
          SCROLL DOWN
        </footer>
      </div>
    </>
  );
}

export default Portfolio;
