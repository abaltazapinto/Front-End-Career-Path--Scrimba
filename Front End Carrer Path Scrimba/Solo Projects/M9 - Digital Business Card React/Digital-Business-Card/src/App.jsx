import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AndreImage from './assets/Andre_Pinto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'


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
				<h3 className='Card--job-title'>Developer</h3>
				<div className='Card--buttons'>
					<button
					className='Card--email-button'
					onClick={() => {
						window.open(
						'https://mail.google.com/mail/?view=cm&fs=1&to=andrebaltazarpinto@gmail.com',
						'_blank'
						);
					}}
					>
					<FontAwesomeIcon icon={faEnvelope} /> Email
					</button>
					<button className='Card--linkedin-button'>
						<a
							href="https://www.linkedin.com/in/andr%C3%A9-baltazar-pinto-13a056141/"
							target="_blank"
							rel="noopener noreferrer"
							className='Card--linkedin-link'>
						<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
						</a>
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
					<div className='Card--footer'>
						<a href="https://x.com/jacaralho1" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSquareTwitter} />
						</a>
						<a href="https://www.linkedin.com/in/andr%C3%A9-baltazar-pinto-13a056141/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a href="https://www.instagram.com/andrebaltazarj/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faSquareInstagram}/>
						</a>
						<a href='https://github.com/abaltazapinto' target="_blank" rel="noopener noreferrer" >
						<FontAwesomeIcon icon={faSquareGithub} />
						</a>
				</div>
		</div>
	</main>
    </>
  )
}

export default App
