import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="App-footer py-4 text-center" id="footer">
            <div className="container">
                <div className="social-icons mt-3">
                    <a href="mailto:nileshkumar.nkmr@gmail.com" className="icon" aria-label="Email" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="https://www.facebook.com/nilesh14k" className="icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com/nilesh14k" className="icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/nilesh14k" className="icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/nilesh14k" className="icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/nilesh14k" className="icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
