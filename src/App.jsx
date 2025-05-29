import Navigation from './components/Navigation/navigation'
import Projects from './components/Projects/projects'
import Footer from './components/Footer/footer'
import { AboutMe } from './components/Projects/projectComponent/projectsDescriptions/ProjectsDescriptions'
import ThreeScene from './components/ThreeJs/ThreeScene'
import './App.css'
import { useEffect, useRef } from 'react'


function App() {
	const renderCount = useRef(0);
	renderCount.current += 1;
	console.log("Renderizações do App:", renderCount.current);

	useEffect(() => {
    	window.scrollTo(0, 0);
  	}, []);


	return (
		<>
		<main>
			<Navigation />

            <ThreeScene />

			<div id="section0" style={{ height: '400vh'}}/>
			<section id="section1">
				<h1 id='aboutMe'>Hi there</h1>
				{AboutMe.map((text, index) => (
					<p key={index}>
					{index === 3 ? (
						<>
							{text} <a  className='link' href='https://www.youtube.com/@tonimProgramas' target='_blank' rel='noopener noreferrer'><b>YouTube</b></a> so maybe you will see some videos.
						</>
					) : (
						text
					)}
					</p>
				))}
			</section>

			<Projects/>
			
			<section id='contact'>
				<h1>Contact</h1>
				<p style={{textAlign: 'center'}}>Reach out on <a className='link' href="https://www.linkedin.com/in/ant%C3%B4nio-alexandre-borges-lima/" target='_blank' rel='noopener noreferrer'><b>LinkedIn</b></a>
				</p>
			</section>
			
			<Footer/>
		</main>
        </>
    )
}

export default App