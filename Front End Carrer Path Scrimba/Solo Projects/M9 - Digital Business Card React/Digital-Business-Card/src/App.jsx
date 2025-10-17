import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AndreImage from './assets/Andre_Pinto.jpg'


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
	document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return (
    <>
	  {/* Main content */ }
	<main >
		<div className='Card'>
      		<img src={AndreImage} alt='Andre Pinto' />
			<div className='Card--info'>
				<h2 className='Card--name'>Andre Pinto</h2>
				<h3 className='Card--job-title'>Frontend Developer</h3>
				<p className='Card--website'>andre-pinto.website</p>
				<div className='Card--buttons'>
					<button className='Card--email-button'>
						<i className="fa-solid fa-envelope"></i> Email
					</button>
					<button className='Card--linkedin-button'>
						<i className="fa-brands fa-linkedin"></i> LinkedIn
					</button>
				</div>
				<div className='Card--about'>
					<h4>About</h4>
					<p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
				</div>
				<div className='Card--interests'>
					<h4>Interests</h4>
					<p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
				</div>
			</div>
		</div>
	</main>
    </>
  )
}

export default App
