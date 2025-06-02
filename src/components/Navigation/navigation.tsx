import { useState } from "react";
import './navigation.css'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav>
            <div className={`menu-btn ${isMenuOpen ? 'open' : ""}`}>
                <button className={`btn ${isMenuOpen ? 'open' : ""}`} onClick={() => toggleMenu()}>
                    <svg width="16" height="16">
                        <rect className="st0" width="16" height="3.2"></rect>
                        <rect y="6.4" className="st0" width="16" height="3.2"></rect>
                        <rect y="12.8" className="st0" width="16" height="3.2"></rect>
                    </svg>
                </button>
                <div style={{ display: "flex" }}>
                    <a className={`btn ${isMenuOpen ? 'open' : ""}`} href="https://www.linkedin.com/in/ant%C3%B4nio-alexandre-borges-lima/" target="_blank">
                        <svg width="16" height="16">
                            <path d="M0.1,2c0-1,0.8-1.8,1.9-1.8c1,0,1.8,0.9,1.8,1.8c0,1-0.8,1.9-1.8,1.9C0.9,3.9,0.1,3.1,0.1,2z M0.1,5h3.7v9.8 H0.1V5z"></path>
                            <path d="M15.9,8.5v6.2h-3.5V9.4c0-0.9-0.6-1.6-1.5-1.6c-0.8,0-1.4,0.6-1.4,1.5v5.5H5.8V5h3.7v1 c0.6-0.7,1.6-1.2,2.8-1.2C14.4,4.7,15.9,6.3,15.9,8.5z"></path>
                        </svg>
                    </a>
                    <a className={`btn ${isMenuOpen ? 'open' : ""}`} href="https://www.youtube.com/@tonimProgramas/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                    </a>
                    <a className={`btn ${isMenuOpen ? 'open' : ""}`} href="https://github.com/AntonioABLima" target="_blank">
                        <svg width="16" height="16">
                            <path d="M10.6,12.9c0-1-0.3-1.6-0.7-2c2.4-0.3,4.9-1.1,4.9-5.2c0-1.1-0.4-2.1-1.1-2.9c0.1-0.3,0.5-1.3-0.1-2.8 c0,0-0.9-0.3-3,1.1c-1.7-0.5-3.6-0.5-5.4,0c-2-1.4-3-1.1-3-1.1C1.6,1.4,2,2.5,2.1,2.8C1.4,3.5,1,4.6,1,5.6c0,4.1,2.5,5,4.9,5.3 c-0.4,0.4-0.6,0.9-0.7,1.4c-0.6,0.3-2.2,0.7-3.1-0.9c0,0-0.6-1-1.6-1.1c0,0-1.1,0-0.1,0.7c0,0,0.7,0.3,1.1,1.6c0,0,0.6,2.1,3.6,1.5 c0,0.9,0,1.8,0,1.8h5.3C10.6,15.9,10.6,14.4,10.6,12.9z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className={`menu-body ${isMenuOpen ? "open" : ""}`} onClick={() => toggleMenu()}>
                <a href="#hoaboutMee" onClick={() => toggleMenu()}>Home</a>
                <a href="#aboutMe" onClick={() => toggleMenu()}>About</a>
                <a href="#projects" onClick={() => toggleMenu()}>Projects</a>
                <a href="#contact" onClick={() => toggleMenu()}>Contact</a>
            </div>
 
        </nav>
    );
};

export default Navigation;