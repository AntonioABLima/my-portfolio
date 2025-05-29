import React, {useState} from "react"
import Project from "./projectComponent/project"
import { RealProjectsDescription, CoolProjectsDescriptions } from "./projectComponent/projectsDescriptions/ProjectsDescriptions";
import './projects.css'

const RealLifeProjects = () => {

    return (
        <>
        <Project
            title="My Own Portfolio"
            year="2025"
            descriptions={RealProjectsDescription.MyPortifolio}
            skills={["Three.js", "GSAP", "Blender", "Website! 🖼️"]}
            link={'https://github.com/AntonioABLima/my-portfolio'}
            anchorText="portfolio_code.github"
            mediaLinks={[
                '/images/PortfolioBedroom.webp'
            ]} 
        />

        <Project
            title="Employees Consumption App"
            year="2024"
            descriptions={RealProjectsDescription.ArqApp}
            skills={["React Native", "Node Js", "Vite", "MongoDB", "Party! 🎉"]}
            mediaLinks={[]} 
        />

        <Project
            title="Arduino Water System"
            year="2023"
            descriptions={RealProjectsDescription.WaterSystem}
            skills={["Arduino", "Automation", "Gardening", "Bonsai 🪴"]}
            link={'https://github.com/AntonioABLima/Projeto-Rega-Automatica'}
            anchorText="arduino_codes.github"
            mediaLinks={[
                '/images/WaterSystem.png',
                'https://www.youtube.com/embed/frQBwNFcexE',
            ]}
        />

        <Project
            title="CEASA Web Scraping"
            year="2021"
            descriptions={RealProjectsDescription.WebScrapingCeasa}
            skills={["Web", "Scraping", "Fruit and Vegetables 🍆"]}
            mediaLinks={[]} 
        />

        <Project
            title="Pdf to Excel"
            year="2021"
            descriptions={RealProjectsDescription.PdfToExcel}
            skills={["Python", "Excel", "Automation 📑"]}
            mediaLinks={[]}
        />
        </>
    );
};

const CoolPersonalProjects = () => {
    return (
        <><Project
            title="Advent of Coding"
            year="2024"
            descriptions={CoolProjectsDescriptions.AoC24}
            skills={["Programming Puzzles", "Advent calendar", 'Christmas 🎄']}
            link="https://github.com/AntonioABLima/Advent-of-Code-2024"
            anchorText="my_codes.github"
            mediaLinks={['/images/Aoc.png']} />
            
            <Project
                title="Mandioca Mod"
                year="2024"
                descriptions={CoolProjectsDescriptions.MandiocaMod}
                skills={["Java", "Minecraft", "Cassava", "Gaming 🕹️"]}
                link="https://www.curseforge.com/minecraft/mc-mods/mod-da-mandioca"
                anchorText="mod_da_mandioca.page"
                mediaLinks={[
                    "/images/ModMandica1.png",
                    "https://www.youtube.com/embed/gYlRnSLuWyo"
                ]} />
            <Project
                title="Blink Counter"
                year="2024"
                descriptions={CoolProjectsDescriptions.ContadorPiscada}
                skills={["Computer Vision", "Orochinho", "IA", "Blink 👀", ]}
                link="https://github.com/AntonioABLima/Contador-De-Piscadas"
                anchorText="contador_de_piscadas.github"
                mediaLinks={[
                    "/images/Contador.gif",
                    "https://www.youtube.com/embed/iftimDe8hzA"
                ]} />
            </>
    );
};

const Projects = () => {
    const [projectType, setProjectType] = useState('realLife');

    return (
        <section id='projects'>
            <div className="project-btns">
                <a 
                    className={`project-btn ${projectType === 'realLife' ? 'active' : ''}`} 
                    onClick={() => setProjectType('realLife')}>
                    Real Life
                </a>
                <a 
                    className={`project-btn ${projectType === 'coolPersonal' ? 'active' : ''}`}
                    onClick={() => setProjectType('coolPersonal')}>
                    Cool Personal
                </a>
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