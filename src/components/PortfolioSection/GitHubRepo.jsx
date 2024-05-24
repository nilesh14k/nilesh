import { useEffect } from 'react';

function GitHubRepo({ setRepos }) {
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
    const username = 'nilesh14k';

    useEffect(() => {
        if (!GITHUB_TOKEN) {
            console.error('GitHub token is not set. Please set the REACT_APP_GITHUB_TOKEN environment variable.');
            return;
        }

        const headers = new Headers();
        headers.append('Authorization', `token ${GITHUB_TOKEN}`);
        headers.append('Accept', 'application/vnd.github.v3+json');

        const fetchAllRepos = async () => {
            let allRepos = [];
            let page = 1;
            let fetchMore = true;

            while (fetchMore) {
                const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`, { headers });
                if (!response.ok) {
                    console.error(`GitHub API request failed: ${response.status} ${response.statusText}`);
                    return;
                }
                const repos = await response.json();
                allRepos = allRepos.concat(repos);
                if (repos.length < 100) {
                    fetchMore = false;
                } else {
                    page += 1;
                }
            }

            const fetchTopicsAndWebsitePromises = allRepos.map(repo => {
                const topicsPromise = fetch(`https://api.github.com/repos/${username}/${repo.name}/topics`, { headers })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error fetching topics for ${repo.name}: ${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(topicsData => {
                        return { ...repo, topics: topicsData.names };
                    })
                    .catch(error => {
                        console.error(`Error fetching topics for ${repo.name}: `, error);
                        return null;
                    });

                const websitePromise = fetch(`https://api.github.com/repos/${username}/${repo.name}/contents/website.md`, { headers })
                    .then(response => {
                        if (!response.ok) {
                            return { ...repo, websiteContent: null };
                        }
                        return response.json();
                    })
                    .then(websiteData => {
                        if (websiteData && websiteData.content) {
                            const decodedContent = atob(websiteData.content);
                            const lines = decodedContent.split('\n');
                            const firstLine = lines.length > 0 ? lines[0].replace(/^# /, '') : repo.name;
                            const secondLine = lines.length > 1 ? lines[1] : 'No description available.';
                            const imageUrlMatch = decodedContent.match(/!\[.*?\]\((.*?)\)/);
                            const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
                            return { ...repo, websiteImage: imageUrl, websiteTitle: firstLine, websiteDescription: secondLine };
                        }
                        return { ...repo, websiteImage: null, websiteTitle: repo.name, websiteDescription: 'No description available.' };
                    })
                    .catch(error => {
                        console.error(`Error fetching website.md for ${repo.name}: `, error);
                        return { ...repo, websiteImage: null, websiteTitle: repo.name, websiteDescription: 'No description available.' };
                    });

                return Promise.all([topicsPromise, websitePromise]).then(results => results[1]);
            });

            Promise.all(fetchTopicsAndWebsitePromises)
                .then(reposWithWebsite => {
                    const filteredRepos = reposWithWebsite
                        .filter(repo => repo !== null)
                        .filter(repo => Array.isArray(repo.topics) && repo.topics.includes('nilesh14k'));
                    setRepos(filteredRepos);
                })
                .catch(error => {
                    console.error('Error fetching topics or website.md files: ', error);
                });
        };

        fetchAllRepos();
    }, [GITHUB_TOKEN, setRepos]);

    return null;
}

export default GitHubRepo;
