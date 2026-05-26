import './App.css';
import { useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const CARD = darkMode
    ? 'bg-neutral-700/50 backdrop-blur-sm rounded-3xl border border-neutral-500/50 transition-all duration-300 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-400/20'
    : 'bg-stone-600/60 backdrop-blur-sm rounded-3xl border border-stone-500/50 transition-all duration-300 hover:border-green-300/60 hover:shadow-lg hover:shadow-green-300/20';

  const text = 'text-white';
  const subtext = 'text-neutral-300';
  const hover = darkMode
    ? 'hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]'
    : 'hover:text-green-300 hover:drop-shadow-[0_0_8px_rgba(134,239,172,0.6)]';
  const titleColor = darkMode ? 'text-green-400' : 'text-green-300';

  return (
    <div className={`relative min-h-screen w-full ${text}`}>
      <div className='absolute inset-0 z-0'>
        <ParticlesBackground darkMode={darkMode} />
      </div>

      <div className='relative z-20 flex flex-col min-h-screen'>

        {/* Header card */}
        <div className='p-10 pb-0 lg:flex md:flex justify-center'>
          <div className={`${CARD} p-8 flex flex-col gap-8 w-full lg:w-[calc(80%+5rem)]`}>
            {/* Top bar: Portfolio left, nav right */}
            <div className='flex flex-row items-center justify-between'>
              <p className={`${subtext} text-xl lg:text-2xl font-semibold`}>Portfolio</p>
              <div className='flex flex-row gap-8 items-center text-lg'>
                <a href='#Home' className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Home</a>
                <a href='#Projects' className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Projects</a>
                <a href='#About' className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>About</a>
                <div className={`flex flex-row items-center rounded-full p-1 gap-1 ${darkMode ? 'bg-neutral-600/50' : 'bg-neutral-300/50'}`}>
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-neutral-400/50' : 'hover:bg-neutral-400/40'}`}
                    aria-label='Dark mode'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`p-2 rounded-full transition-colors ${!darkMode ? 'bg-neutral-500/60' : 'hover:bg-neutral-400/20'}`}
                    aria-label='Light mode'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Hero: name and title centred */}
            <div className='flex flex-col items-center gap-2 py-8'>
              <h1 className={`${titleColor} text-4xl lg:text-6xl font-bold`}>Luke Godbold</h1>
              <p className={`${subtext} text-xl lg:text-2xl font-semibold`}>Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Home section */}
        <div className='p-10 lg:flex md:flex justify-center gap-20' id='Home'>
          <div className={`${CARD} flex flex-col p-5 gap-10 text-center w-full py-20 mb-10 lg:mb-0 lg:w-2/5 md:w-2/5`}>
            <h1 className='text-3xl lg:text-5xl font-semibold'>What can I do</h1>
            <p className='text-md lg:text-xl'>As a Software Developer I am able to make websites that are responsive.</p>
            <p className='text-md lg:text-xl'>For my frontend I use Java Script, HTML, CSS and Tailwind CSS to create a responsive experience.</p>
            <p className='text-md lg:text-xl'>For my Backend I primarily use Flask and SQLite for a secure and simple database.</p>
          </div>

          <div className={`${CARD} flex flex-col w-full lg:w-2/5 md:w-2/5 gap-10 p-5 items-center`}>
            <h1 className='text-3xl lg:text-5xl font-semibold'>Tools & Languages</h1>
            <div className='flex flex-wrap gap-10 justify-center w-full'>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/HTML.png" alt="Html Logo" />
              <span className='tooltiptext'>HTML is the building blocks for websites</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/CSS.png" alt="CSS Logo" />
              <span className='tooltiptext'>CSS allows for styling on websites so they don't look plain</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/Tailwind.png" alt="Tailwind Css Logo" />
              <span className='tooltiptext'>Tailwind CSS allows for quick and easy styling on websites</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/JS.png" alt="JS Logo" />
              <span className='tooltiptext'>Java Script is a programming language used for web development</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/React.png" alt="React Logo" />
              <span className='tooltiptext'>React is a library in Java Script used for web development</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/Python.png" alt="Python Logo" />
              <span className='tooltiptext'>Python is a programming language used for building all sorts of software</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/Flask.png" alt="Flask Logo" />
              <span className='tooltiptext'>Flask is a framework for python used for web development</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/jinja.png" alt="Jinja Logo" />
              <span className='tooltiptext'>Jinja is used with python and HTML to connect them</span>
            </div>
            <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
              <img src="/Icons/sqlite.png" alt="SQLite Logo" />
              <span className='tooltiptext'>Sqlite is a simple database</span>
            </div>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className='p-10 pb-0 flex flex-col items-center gap-10' id='Projects'>
          <h2 className='text-3xl lg:text-5xl font-semibold'>Projects</h2>
        </div>
        <div className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20'>
          <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 lg:flex justify-center`}>
            <img src='/Projects/Hypertext.png' alt='Hypertext Screenshot' className='lg:w-2/5 w-full h-auto rounded-3xl self-center ring-1 ring-neutral-500/50' />
            <div className='p-5 rounded-3xl lg:w-3/4 lg:flex lg:flex-col w-full text-center gap-5'>
              <div className='flex flex-row w-full lg:gap-5 gap-3'>
                <h1 className='text-3xl lg:text-4xl font-semibold w-3/4'>Hypertext Project</h1>
                <a href='https://github.com/Luke-Godbold/HyperText.git' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'>
                  <img src="/Icons/github-icon.png" alt='github logo' className='w-full object-contain' />
                </a>
              </div>
              <p className='text-md lg:text-xl'>In this project I made a webstory game in which the story was effected by the users choices. For this game I had to make a turn based combat system.</p>
            </div>
          </div>

          <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 lg:flex justify-center`}>
            <img src='/Projects/Database.png' alt='Database screenshot' className='lg:w-2/5 w-full h-auto rounded-3xl self-center ring-1 ring-neutral-500/50' />
            <div className='p-5 rounded-3xl lg:w-3/4 lg:flex lg:flex-col w-full text-center gap-5'>
              <div className='flex flex-row w-full lg:gap-5 gap-3'>
                <h1 className='text-3xl lg:text-4xl font-semibold w-3/4'>Database Project</h1>
                <a href='https://github.com/Luke-Godbold/Database' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'>
                  <img src="/Icons/github-icon.png" alt='github logo' className='w-full object-contain' />
                </a>
              </div>
              <p className='text-md lg:text-xl'>In this project I used React and Flask to create a college website. In this website there are student accounts and teacher accounts. The different Account Types have different pages they can view.</p>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20' id='About'>
          <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 flex justify-center items-center flex-col gap-2`}>
            <img src="/apple-touch-icon.png" alt='L icon' className='w-fit size-50 object-contain rounded-4xl' />
            <h1 className='font-semibold text-3xl'>Luke Godbold</h1>
            <p>Norwich, UK</p>
            <div className='flex flex-row w-full p-5 justify-center items-center gap-5'>
              <a href='https://github.com/Luke-Godbold' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"} className="w-full">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/luke-godbold-7396293b6/' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"} className="w-full">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href='mailto:luke.godbold2018@icloud.com' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={darkMode ? "white" : "#1a1a1a"}>
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={`${CARD} p-5 w-full lg:w-2/5 md:w-2/5 lg:flex justify-center`}>
            <h2 className='text-3xl lg:text-5xl font-semibold'>About Me</h2>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-auto p-10 pt-0 lg:flex md:flex justify-center'>
          <div className={`${CARD} p-6 flex flex-row justify-between items-center w-full lg:w-[calc(80%+5rem)]`}>
            <p className={`${subtext} text-sm`}>© 2026 Luke Godbold</p>
            <div className={`flex flex-row gap-10 ${subtext}`}>
              <a href="#Home" className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Home</a>
              <a href="#Projects" className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Projects</a>
              <a href="#About" className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>About</a>
              <a href="/CV-LukeGodbold.pdf" download className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Download CV</a>
              <a href="mailto:luke.godbold2018@icloud.com" className={`${hover} inline-block transition-all ease-out duration-200 hover:-translate-y-1`}>Contact</a>
            </div>
            <a href="#Home" className={`${hover} ${subtext} flex items-center gap-1 text-sm transition-all ease-out duration-200 hover:-translate-y-1`}>
              Back to Top
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
