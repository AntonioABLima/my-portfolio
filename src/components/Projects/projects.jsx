import React, {useState} from "react"
import Project from "./projectComponent/project"
import projectsDescription from "./projectComponent/projectsDescriptions/ProjectsDescpritions"
import './projects.css'
const RealLifeProjects = () => {
    return (
        <Project
            title="App for employee consumption"
            year="2024"
            descriptions={projectsDescription.ArqApp}
            skills={["React Native", "Node Js", "Vite", "Mongo", "Party!"]}
        />
    );
};

const CoolPersonalProjects = () => {
    return (
        <Project
            title="Mandioca Mod"
            year="2024"
            descriptions={projectsDescription.MandiocaMod}
            skills={["Java", "Minecraft", "Gaming", "Cassava"]}
            link="https://www.curseforge.com/minecraft/mc-mods/mod-da-mandioca"
            anchorText ="Mod_da_Mandioca.com"
        />
    );
};

const Projects = () => {
    const [projectType, setProjectType] = useState('realLife');

    return (
        <section id='projects'>
            <div className="project-btns">
                <a onClick={() => setProjectType('realLife')}>Real Life</a>
                <a onClick={() => setProjectType('coolPersonal')}>Cool Personal</a>
            </div>
            <h1>Projects</h1>

            {projectType === 'realLife' && <RealLifeProjects />}
            {projectType === 'coolPersonal' && <CoolPersonalProjects />}
            
            <hr/>
            <p>This are some projects I've worked on over the years, I hope you enjoy some of them 🙏. Besides these, I have many other personal/university projects, and experiments that might evolve into something bigger, and a lot more to come!</p>	
        </section>
    )
}

export default Projects