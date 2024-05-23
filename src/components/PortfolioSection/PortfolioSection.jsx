import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import GitHubRepo from './GitHubRepo';
import './PortfolioSection.css';

function PortfolioSection() {
    const [repos, setRepos] = useState([]);
    const [visibleRepos, setVisibleRepos] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            setVisibleRepos(showAll ? repos : repos.slice(0, 3));
        } else {
            setVisibleRepos(showAll ? repos : repos.slice(0, 6));
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [repos, showAll]);

    useEffect(() => {
        handleResize();
    }, [repos]);

    return (
        <section id="portfolio" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">My Work</h2>
                <GitHubRepo setRepos={setRepos} />
                <div className="row">
                    {visibleRepos.length === 0 ? (
                        <p className="text-center">No repositories found or an error occurred.</p>
                    ) : (
                        visibleRepos.map((repo, index) => (
                            <div key={repo.id} className="col-lg-4 col-sm-12 mb-4">
                                <div className="portfolio-item card h-100">
                                    {repo.websiteImage && (
                                        <img src={repo.websiteImage} className="card-img-top" alt={`${repo.name} image`} />
                                    )}
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="overlay">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                {repo.websiteTitle || repo.name}
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="link-icon" />
                                            </a>
                                        </h3>
                                        <p className="card-text">{repo.websiteDescription}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {repos.length > (showAll ? 6 : 3) && (
                    <div className="text-center">
                        <button onClick={() => setShowAll(!showAll)} className={`btn btn-primary ${showAll ? 'show-less' : ''}`}>
                            {showAll ? 'Show Less' : 'Show More'}
                            <FontAwesomeIcon icon={showAll ? faChevronUp : faChevronDown} className="icon" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PortfolioSection;
