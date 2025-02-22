import React from "react";
import './project.css'

const Projeto = ({ title, year, descriptions, skills, imageClass, link, anchorText }) => {
  	return (
		<div className="projeto">
			<hr/>
			<h2>{title}</h2>
			<h3>{year}</h3>
			
			<ul className="skills">
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
			{descriptions.map((desc : string, index) => (
				<p key={index}>{desc}</p>
			))}
			{
				link?  (
					<p><a className='projectLink' href={link}>{anchorText}</a></p>
				) : null
			}
			<div className={imageClass}></div>
		</div>
	);
};

export default Projeto;
