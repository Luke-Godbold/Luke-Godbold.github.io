import './App.css';
import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative min-h-screen w-full'>
      <div className='absolute inset-0 z-0'>
        <ParticlesBackground />
      </div>
      <div className='relative z-20'>
      <ul className = "bg-neutral-800 text-white justify-end justify-items-end sticky top-0 z-30 hidden lg:flex md:flex">
        <li className="p-5 mr-auto">Luke's Portfolio</li>
        <a href="#Home" className='p-5 px-15 cursor-pointer hover:bg-green-600' role='navigation'>Home</a>
        <a href="#Projects" className='p-5 px-15 cursor-pointer hover:bg-green-600' role='navigation'>Projects</a>
        <a href="#About" className='p-5 px-15 cursor-pointer hover:bg-green-600' role='navigation'>About</a>
      </ul>

      <div className='bg-neutral-800 text-white gap-5 sticky top-0 z-30 lg:hidden md:hidden absolute'>
        <ul className = "flex flex-row">
          <li className="p-5 mr-auto">Luke's Portfolio</li>
          <button onClick={() => setMenuOpen(!menuOpen)} className='pr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </ul>
        {menuOpen && (<div className='flex flex-col'>
          <a href="#Home" className='p-5 cursor-pointer hover:bg-green-600' role='navigation'>Home</a>
          <a href="#Projects" className='p-5 cursor-pointer hover:bg-green-600' role='navigation'>Projects</a>
          <a href="#About" className='p-5 cursor-pointer hover:bg-green-600' role='navigation'>About</a></div>)}
      </div>

      <div className='p-10  lg:flex md:flex justify-center gap-20' id='Home'>
        <div className='bg-neutral-800 rounded-3xl flex flex-col p-5 gap-10 text-center
        w-full py-20 mb-10 lg:mb-0
        lg:w-2/5
        md:w-2/5'>
          <h1 className='text-3xl lg:text-5xl font-semibold underline underline-offset-5'>What can I do</h1>
          <p className='text-md lg:text-xl'>As a Software Developer I am able to make websites that are responsive.</p>
          <p className='text-md lg:text-xl'>For my frontend I use Java Script, HTML, CSS and Tailwind CSS to create a responsive experience.</p>
          <p className='text-md lg:text-xl'>For my Backend I primarily use Flask and SQLite for a secure and simple database.</p>
          
        </div>

        <div className='flex flex-wrap w-full lg:w-2/5 md:w-2/5 gap-10 p-5 justify-center bg-neutral-600 rounded-3xl'>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/HTML.png" alt="Html Logo" ></img>
            <span className='tooltiptext'>HTML is the building blocks for websites</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/CSS.png" alt="CSS Logo"></img>
            <span className='tooltiptext'>CSS allows for styling on websites so they don't look plain</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/Tailwind.png" alt="Tailwind Css Logo"></img>
            <span className='tooltiptext'>Tailwind CSS allows for quick and easy styling on websites</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/JS.png" alt="JS Logo"></img>
            <span className='tooltiptext'>Java Script is a programming language used for web development</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/React.png" alt="React Logo"></img>
            <span className='tooltiptext'>React is a libary in Java Script used fro web development</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/Python.png" alt="Python Logo"></img>
            <span className='tooltiptext'>Python is a programming language used for building all sorts of software</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/Flask.png" alt="Flask Logo"></img>
            <span className='tooltiptext'>Flask is a framework for python used for web development</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/jinja.png" alt="Jinja Logo"></img>
            <span className='tooltiptext'>Jinja is used with python and HTML to connect them</span>
          </div>
          <div className='lg:w-1/5 sm:w-1/3 w-1/4 rounded-xl h-auto object-contain tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
            <img src="/Icons/sqlite.png" alt="SQLite Logo"></img>
            <span className='tooltiptext'>Sqlite is a simple database</span>
          </div>
        </div>
      </div>

      <div className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20' id='Projects'>
        
        <div className='bg-neutral-800 p-5 rounded-3xl w-full lg:w-2/5 md:w-2/5 lg:flex justify-center'>
          <img src='/Projects/Hypertext.png' alt='Hypertext Screenshot' className='lg:w-2/5 w-full h-auto outline-1 rounded-3xl object-contain'></img>
          <div className='p-5 rounded-3xl lg:w-3/4 lg:flex lg:flex-col w-full text-center gap-5'>
            <div className='flex flex-row w-full lg:gap-5 gap-3'>
              <h1 className='text-3xl lg:text-4xl font-semibold underline underline-offset-5 w-3/4'>Hypertext Project</h1>
              <a href='https://github.com/Luke-Godbold/HyperText.git' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'><img src="/Icons/github-icon.png" alt='github logo' className='w-full object-contain'  ></img></a>
            </div>
            <p className='text-md lg:text-xl'>In this project I made a webstory game in which the story was effected by the users choices. For this game I had to make a turn based combat system.</p>
            
          </div>
        </div>

        <div className='bg-neutral-800 p-5 rounded-3xl w-full lg:w-2/5 md:w-2/5 lg:flex justify-center'>
          <img src='/Projects/Database.png' alt='Database screenshot' className='lg:w-2/5 w-full h-auto outline-1 rounded-3xl object-contain'></img>
          <div className='p-5 rounded-3xl lg:w-3/4 lg:flex lg:flex-col w-full text-center gap-5'>
            <div className='flex flex-row w-full lg:gap-5 gap-3'>
              <h1 className='text-3xl lg:text-4xl font-semibold underline underline-offset-5 w-3/4'>Database Project</h1>
              <a href='https://github.com/Luke-Godbold/Database' rel='noopener noreferrer' target="_blank" className='w-2/10 lg:w-3/20 flex justify-center'><img src="/Icons/github-icon.png" alt='github logo' className='w-full object-contain'  ></img></a>
            </div>
            <p className='text-md lg:text-xl'>In this project I used React and Flask to create a college website. In this website there are student accounts and teacher accounts. The different Account Types have different pages they can view.</p>
            
          </div>
        </div>

      </div>

      <div className='p-10 flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20' id='About'> 
        <div className='bg-neutral-800 p-5 rounded-3xl w-full lg:w-2/5 md:w-2/5 lg:flex justify-center flex flex-col'>
          <img src="/apple-touch-icon.png" alt='L icon' className='w-fit size-50 object-contain rounded-4xl'  ></img>
          <h1>Luke Godbold</h1>
        </div>

        <div className='bg-neutral-800 p-5 rounded-3xl w-full lg:w-2/5 md:w-2/5 lg:flex justify-center'></div>
      </div>

      </div>
    </div>
    
  );
}

export default App;