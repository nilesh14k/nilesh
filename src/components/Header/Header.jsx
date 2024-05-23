// Header.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ activeSection }) {
    return (
        <header className="sidebar">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'welcome' ? 'active' : ''}`} href="#welcome">
                                <FontAwesomeIcon icon={faHome} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} href="#portfolio">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
