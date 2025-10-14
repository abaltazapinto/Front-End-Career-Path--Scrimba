import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AndreImage from './assets/Andre_Pinto.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<main >
		<div className='Card'>
      	<img src={AndreImage} alt='Andre Pinto' />
		</div>
	</main>
    </>
  )
}

export default App
