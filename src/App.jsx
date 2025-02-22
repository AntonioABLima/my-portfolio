import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/navigation'
import Projects from './components/Projects/projects'
import Footer from './components/Footer/footer'
import projectsDescription from './components/Projects/projectComponent/projectsDescriptions/ProjectsDescpritions'

function App() {

	return (
		<>
		<main>
			<Navigation/>
			<section>
				<h1 id='aboutMe'>Hi there</h1>
				{projectsDescription.AboutMe.map((text, index) => (
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