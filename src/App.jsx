import './App.css'
import Navigation from './components/Navigation/navigation'
import Project from './components/projectComponent/project'
import projectsDescription from './components/projectComponent/projectsDescriptions/ProjectsDescpritions'

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
			
			<section id='projects'>
	            <h1>Projects</h1>
				<Project
					title="Mandioca Mod"
					year="2024"
					descriptions={projectsDescription.MandiocaMod}
					skills={["Java", "Minecraft", "Gaming", "Cassava"]}
					link="https://www.curseforge.com/minecraft/mc-mods/mod-da-mandioca"
					anchorText ="Mod_da_Mandioca.com"
				/>
				<Project
					title="App for employee consumption"
					year="2024"
					descriptions={projectsDescription.ArqApp}
					skills={["React Native", "Node Js", "Vite", "Mongo", "Party!"]}
				/>
				<hr/>
				<p>This are some projects I've worked on over the years, I hope you enjoy some of them 🙏. Besides these, I have many other personal/university projects, and experiments that might evolve into something bigger, and a lot more to come!</p>	
			</section>
			
			
			<section id='contact'>
				<h1>Contact</h1>
				<p style={{textAlign: 'center'}}>Reach out on <a className='link' href="https://www.linkedin.com/in/ant%C3%B4nio-alexandre-borges-lima/" target='_blank' rel='noopener noreferrer'><b>LinkedIn</b></a>
				</p>
			</section>
		</main>
        </>
    )
}

export default App