import './App.css';
import { useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const CARD = darkMode
    ? 'bg-neutral-700/50 backdrop-blur-sm rounded-3xl border border-neutral-500/50 transition-all duration-300 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-400/20'
    : 'bg-stone-600/60 backdrop-blur-sm rounded-3xl border border-stone-500/50 transition-all duration-300 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-400/20';

  const text = 'text-white';
  const subtext = 'text-neutral-300';
  const hover = darkMode
    ? 'hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]'
    : 'hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]';
  const titleColor = 'text-green-400';
  const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 focus-visible:rounded';

  return (
    <div className={`relative min-h-screen w-full ${text}`}>

      {/* Skip to main content — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-lg focus:outline-2 focus:outline-green-400"
      >
        Skip to main content
      </a>

      <div className='absolute inset-0 z-0' aria-hidden="true">
        <ParticlesBackground darkMode={darkMode} />
      </div>

      <div className='relative z-20 flex flex-col min-h-screen'>

        {/* Header */}
        <header className='p-10 pb-0 lg:flex md:flex justify-center'>
          <div className={`${CARD} p-8 flex flex-col gap-4 w-full lg:w-[calc(80%+5rem)]`}>

            {/* Top bar */}
            <div className='flex flex-row items-center justify-between'>
              <p className={`${subtext} text-xl lg:text-2xl font-semibold`}>Portfolio</p>

              {/* Desktop: nav + toggle */}
              <nav aria-label="Main navigation" className='hidden sm:flex flex-row gap-4 lg:gap-8 items-center text-sm lg:text-lg'>
                <a href='#Home' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Home</a>
                <a href='#Projects' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Projects</a>
                <a href='#About' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>About</a>
                <div role="group" aria-label="Colour theme" className={`flex flex-row items-center rounded-full p-1 gap-1 ${darkMode ? 'bg-neutral-600/50' : 'bg-neutral-300/50'}`}>
                  <button onClick={() => setDarkMode(true)} className={`p-2 rounded-full transition-colors ${focus} ${darkMode ? 'bg-neutral-400/50' : 'hover:bg-neutral-400/40'}`} aria-label="Switch to dark mode" aria-pressed={darkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  </button>
                  <button onClick={() => setDarkMode(false)} className={`p-2 rounded-full transition-colors ${focus} ${!darkMode ? 'bg-neutral-500/60' : 'hover:bg-neutral-400/20'}`} aria-label="Switch to light mode" aria-pressed={!darkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </button>
                </div>
              </nav>

              {/* Mobile: toggle only */}
              <div role="group" aria-label="Colour theme" className={`sm:hidden flex flex-row items-center rounded-full p-1 gap-1 ${darkMode ? 'bg-neutral-600/50' : 'bg-neutral-300/50'}`}>
                <button onClick={() => setDarkMode(true)} className={`p-2 rounded-full transition-colors ${focus} ${darkMode ? 'bg-neutral-400/50' : 'hover:bg-neutral-400/40'}`} aria-label="Switch to dark mode" aria-pressed={darkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                </button>
                <button onClick={() => setDarkMode(false)} className={`p-2 rounded-full transition-colors ${focus} ${!darkMode ? 'bg-neutral-500/60' : 'hover:bg-neutral-400/20'}`} aria-label="Switch to light mode" aria-pressed={!darkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Hero */}
            <div className='flex flex-col items-center gap-2 py-3'>
              <h1 className={`${titleColor} text-4xl lg:text-6xl font-bold`}>Luke Godbold</h1>
              <p className={`${subtext} text-xl lg:text-2xl font-semibold`}>Full Stack Developer</p>
            </div>

            {/* Mobile: nav links below hero */}
            <nav aria-label="Main navigation" className='sm:hidden flex flex-row justify-center gap-6 text-sm'>
              <a href='#Home' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Home</a>
              <a href='#Projects' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Projects</a>
              <a href='#About' className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>About</a>
            </nav>

          </div>
        </header>

        <main id="main-content">

          {/* Skills section */}
          <section aria-labelledby="skills-heading" className='p-10 lg:flex md:flex justify-center gap-20' id='Home'>
            <div className={`${CARD} flex flex-col p-5 gap-10 text-center w-full py-20 mb-10 lg:mb-0 lg:w-2/5 md:w-2/5`}>
              <h2 id="skills-heading" className='text-3xl lg:text-5xl font-semibold'>What can I do</h2>
              <p className='text-md lg:text-xl'>As a Software Developer I am able to design and build full-stack web applications from the ground up. I focus on creating clean, responsive interfaces that work well across all screen sizes and devices.</p>
              <p className='text-md lg:text-xl'>For my frontend I primarily use React alongside JavaScript, HTML, CSS and Tailwind CSS to build dynamic, component-based user interfaces that are intuitive and responsive.</p>
              <p className='text-md lg:text-xl'>For my backend I have experience with both Flask and FastAPI, pairing them with SQLite to create secure, lightweight, and reliable server-side applications. I'm comfortable designing REST APIs that connect a frontend to a database, handling user authentication and role-based access control.</p>
            </div>

            <div className={`${CARD} flex flex-col w-full lg:w-2/5 md:w-2/5 gap-10 p-5 items-center`}>
              <h2 className='text-3xl lg:text-5xl font-semibold'>Tools & Languages</h2>
              <ul className='flex flex-wrap gap-10 justify-center w-full' aria-label="Technologies and tools I use">
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/HTML.png" alt="HTML5" />
                  <span className='tooltiptext'>HTML is the building blocks for websites</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/CSS.png" alt="CSS3" />
                  <span className='tooltiptext'>CSS allows for styling on websites so they don't look plain</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/Tailwind.png" alt="Tailwind CSS" />
                  <span className='tooltiptext'>Tailwind CSS allows for quick and easy styling on websites</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/JS.png" alt="JavaScript" />
                  <span className='tooltiptext'>Java Script is a programming language used for web development</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/React.png" alt="React" />
                  <span className='tooltiptext'>React is a library in Java Script used for web development</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/Python.png" alt="Python" />
                  <span className='tooltiptext'>Python is a programming language used for building all sorts of software</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/Flask.png" alt="Flask" className={darkMode ? 'invert' : ''} />
                  <span className='tooltiptext'>Flask is a framework for python used for web development</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/jinja.png" alt="Jinja2" />
                  <span className='tooltiptext'>Jinja is used with python and HTML to connect them</span>
                </li>
                <li className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src="/Icons/sqlite.png" alt="SQLite" />
                  <span className='tooltiptext'>SQLite is a simple database</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Projects section */}
          <section aria-labelledby="projects-heading" id='Projects'>
            <div className='p-10 pb-0 flex flex-col items-center gap-10'>
              <h2 id="projects-heading" className='text-3xl lg:text-5xl font-semibold'>Projects</h2>
            </div>
            <div className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-stretch gap-20'>

              <article className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 flex flex-col gap-5`} aria-labelledby="hypertext-heading">
                <h3 id="hypertext-heading" className='text-3xl lg:text-4xl font-semibold text-center'>Hypertext Project</h3>
                <img src='/Projects/Hypertext.png' alt='Screenshot of the Hypertext web story game showing the game interface' className='w-full lg:w-3/4 h-auto rounded-3xl ring-1 ring-neutral-500/50 self-center' />
                <p className='text-md lg:text-xl lg:w-3/4 self-center text-center'>A browser-based interactive story game built with JavaScript, HTML, and CSS. Players navigate a branching narrative where their choices shape the outcome of the story. I also designed and implemented a turn-based combat system from scratch to handle encounters throughout the game.</p>
                <div className='flex flex-wrap justify-center items-center gap-2' aria-label="Technologies used">
                  {['JavaScript', 'HTML', 'CSS'].map(tag => (
                    <span key={tag} className='px-3 py-1 rounded-full text-sm font-medium bg-neutral-500/30 text-neutral-300 border border-neutral-500/40 transition-all duration-200 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30'>{tag}</span>
                  ))}
                  <a href='https://github.com/Luke-Godbold/HyperText.git' rel='noopener noreferrer' target="_blank" aria-label="View Hypertext Project source code on GitHub (opens in new tab)" className={`${focus} w-8 flex justify-center`}>
                    <img src="/Icons/github-icon.png" alt="" aria-hidden="true" className='w-full object-contain' />
                  </a>
                </div>
              </article>

              <article className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 flex flex-col gap-5`} aria-labelledby="database-heading">
                <h3 id="database-heading" className='text-3xl lg:text-4xl font-semibold text-center'>Database Project</h3>
                <img src='/Projects/Database.png' alt='Screenshot of the college database web application showing the student dashboard' className='w-full lg:w-3/4 h-auto rounded-3xl ring-1 ring-neutral-500/50 self-center' />
                <p className='text-md lg:text-xl lg:w-3/4 self-center text-center'>A full-stack college management app built with React and Flask. The app supports two account types student and teacher each with their own set of pages and permissions, with the Flask backend serving role-appropriate data to each user.</p>
                <div className='flex flex-wrap justify-center items-center gap-2' aria-label="Technologies used">
                  {['JavaScript', 'React', 'Python', 'Flask'].map(tag => (
                    <span key={tag} className='px-3 py-1 rounded-full text-sm font-medium bg-neutral-500/30 text-neutral-300 border border-neutral-500/40 transition-all duration-200 hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30'>{tag}</span>
                  ))}
                  <a href='https://github.com/Luke-Godbold/Database' rel='noopener noreferrer' target="_blank" aria-label="View Database Project source code on GitHub (opens in new tab)" className={`${focus} w-8 flex justify-center`}>
                    <img src="/Icons/github-icon.png" alt="" aria-hidden="true" className='w-full object-contain' />
                  </a>
                </div>
              </article>

            </div>
          </section>

          {/* About section */}
          <section aria-labelledby="about-heading" className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-stretch gap-20' id='About'>
            <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 flex justify-center items-center flex-col gap-2`}>
              <img src="/apple-touch-icon.png" alt="Luke Godbold profile icon" className='w-fit size-50 object-contain rounded-4xl' />
              <p className='font-semibold text-3xl'>Luke Godbold</p>
              <p>Norwich, UK</p>
              <div className='flex flex-row w-full p-5 justify-center items-center gap-5'>
                <a href='https://github.com/Luke-Godbold' rel='noopener noreferrer' target="_blank" aria-label="Visit Luke Godbold's GitHub profile (opens in new tab)" className={`${focus} w-2/10 lg:w-3/20 flex justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"} className="w-full" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/luke-godbold-7396293b6/' rel='noopener noreferrer' target="_blank" aria-label="Visit Luke Godbold's LinkedIn profile (opens in new tab)" className={`${focus} w-2/10 lg:w-3/20 flex justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"} className="w-full" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href='mailto:luke.godbold2018@icloud.com' aria-label="Send an email to Luke Godbold" className={`${focus} w-2/10 lg:w-3/20 flex justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"} aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 flex flex-col gap-5`}>
              <h2 id="about-heading" className='text-3xl lg:text-5xl font-semibold text-center'>About Me</h2>
              <p className='text-md lg:text-xl'>I am a Software Developer who has just completed my T-Level in Digital Production, Design and Development, where I am expected to achieve a Distinction.</p>
              <p className='text-md lg:text-xl'>During my course I completed a work placement at Phonic Hero, a small software company, where I maintained their WordPress site, automated internal processes, and built HTML tools to speed up day-to-day workflows. My work was valued enough that they brought me on in a part-time paid role after my placement ended.</p>
              <p className='text-md lg:text-xl'>I have a passion for building full-stack web applications, particularly with React (JavaScript) and FastAPI (Python), and I am currently expanding my skills by learning C#.</p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className='mt-auto p-10 pt-0 lg:flex md:flex justify-center'>
          <div className={`${CARD} p-6 flex flex-col md:flex-row justify-between items-center gap-4 w-full lg:w-[calc(80%+5rem)]`}>
            <p className={`${subtext} text-sm`}>© 2026 Luke Godbold</p>
            <nav aria-label="Footer navigation" className={`flex flex-wrap justify-center gap-4 md:gap-10 ${subtext}`}>
              <a href="#Home" className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Home</a>
              <a href="#Projects" className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Projects</a>
              <a href="#About" className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>About</a>
              <a href="/CV-LukeGodbold.pdf" download className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Download CV</a>
              <a href="mailto:luke.godbold2018@icloud.com" className={`${hover} ${focus} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Contact</a>
            </nav>
            <a href="#Home" aria-label="Back to top of page" className={`${hover} ${focus} ${subtext} flex items-center gap-1 text-sm transition-all ease-out duration-200 hover:-translate-y-1`}>
              Back to Top
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
