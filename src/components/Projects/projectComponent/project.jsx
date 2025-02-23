import React from "react";
import './project.css'

const Projeto = ({ title, year, descriptions, skills, link, anchorText, mediaLinks }) => {
	
	const isYouTubeLink = (url) => {
		return url.includes("youtube.com") || url.includes("youtu.be");
	};

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
			{descriptions.map((desc, index) => (
				<p key={index}>{desc}</p>
			))}
			{
				link?  (
					<p><a className='projectLink' href={link}>{anchorText}</a></p>
				) : null
			}
			{mediaLinks.length > 0 && (
				<div className="media-container">
					{mediaLinks.map((mediaLink, index) => (
						isYouTubeLink(mediaLink) ? (
							<iframe 
								className="media youtube"
								src={mediaLink} 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								referrerPolicy="strict-origin-when-cross-origin" 
								allowFullScreen
							/>
						) : (
							<img className="media" key={index} src={mediaLink} alt={`Project media ${mediaLink}`}/>
						)
					))}
				</div>
			)}
		</div>
	);
};

export default Projeto;
