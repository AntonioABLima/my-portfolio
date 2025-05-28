import Navigation from './components/Navigation/navigation'
import Projects from './components/Projects/projects'
import Footer from './components/Footer/footer'
import { AboutMe } from './components/Projects/projectComponent/projectsDescriptions/ProjectsDescriptions'
import ThreeScene from './components/ThreeJs/ThreeScene'
import './App.css'
import Loader from './components/Loader/Loader'
import { useState, useEffect } from 'react'

function App() {
	const [progress, setProgress] = useState(0);
	
	useEffect(() => {
		if (progress < 100) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [progress]);

	useEffect(() => {
    	window.scrollTo(0, 0);
  	}, []);


	return (
		<>
		<main>
			<Navigation />
			{progress < 100 && <Loader progress={progress}/>}
            <ThreeScene setProgress={setProgress} />

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
			<Footer></Footer>
		</main>
        </>
    )
}

export default App