import React from 'react';
import nileshImage from '../../assets/nilesh2.png';
import './WelcomeSection.css'

function WelcomeSection() {
    return (
        <section id="welcome" className="py-5 bg-custom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="welcome-text">
                            <h2>Welcome to My Portfolio</h2>
                            <p>I am Nilesh Kumar, an Android Developer and Data Analyst based in Mohali, Punjab. I specialize in Java, Kotlin, Python, and R, with a track record of developing innovative mobile apps and systems. I hold a Master’s in Data Science from the University of Leeds and a Bachelor's in Computer Applications. Passionate about tech and continuous learning, I actively contribute to community service. Connect with me on LinkedIn or check out my projects on GitHub.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={nileshImage} alt="Nilesh Kumar" className="profile-image img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;
