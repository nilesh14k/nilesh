import { NextResponse } from 'next/server'

// Define types for the GitHub repo and the response
type Repo = {
  name: string
  description: string
  html_url: string
  language: string
  url: string // Add the `url` property here
}

let cachedRepos: Repo[] | null = null
let lastFetchTime: number = 0
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour

export async function GET() {
  const now = Date.now()

  // Return cached repos if not expired
  if (cachedRepos && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(cachedRepos)
  }

  // Fetch the repos list from GitHub
  const res = await fetch(
    'https://api.github.com/users/nilesh14k/repos?per_page=100&sort=updated',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  )

  // Parse the response
  const repos: Repo[] = await res.json()

  // Limit to top 10 most recently updated repos
  const recent = repos.slice(0, 10)

  // Fetch all readmes in parallel and filter them by the portfolio tag
  const results = await Promise.all(
    recent.map(async (repo: Repo) => {
      const readmeRes = await fetch(repo.url + '/readme', {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3.raw',
        },
      })

      if (!readmeRes.ok) return null

      const readme = await readmeRes.text()

      // Check if the repo has the '#portfolio-website' tag in the README
      if (readme.includes('#portfolio-website')) {
        return {
          name: repo.name,
          description: repo.description || 'No description provided.',
          html_url: repo.html_url,
          language: repo.language || 'JavaScript',
        }
      }

      return null
    })
  )

  // Filter out the null values
  const filtered = results.filter(Boolean) as Repo[]

  // Cache the filtered results and update the timestamp
  cachedRepos = filtered
  lastFetchTime = now

  // Return the filtered repos as JSON response
  return NextResponse.json(filtered)
}
