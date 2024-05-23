import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import './MobileNavbar.css';

function MobileNavbar({ activeSection }) {
    return (
        <nav className="mobile-navbar">
            <ul className="navbar-nav flex-row justify-content-between w-100">
                <li className={`nav-item flex-fill text-center ${activeSection === 'welcome' ? 'active' : ''}`}>
                    <a className={`nav-link ${activeSection === 'welcome' ? 'active' : ''}`} href="#welcome">
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                </li>
                <li className={`nav-item flex-fill text-center ${activeSection === 'portfolio' ? 'active' : ''}`}>
                    <a className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} href="#portfolio">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </a>
                </li>
                <li className={`nav-item flex-fill text-center ${activeSection === 'contact' ? 'active' : ''}`}>
                    <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNavbar;
