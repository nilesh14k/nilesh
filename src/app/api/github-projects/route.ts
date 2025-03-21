import { NextResponse } from 'next/server'

let cachedRepos: any[] | null = null
let lastFetchTime: number = 0
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour

export async function GET() {
  const now = Date.now()

  if (cachedRepos && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(cachedRepos)
  }

  const res = await fetch(
    'https://api.github.com/users/nilesh14k/repos?per_page=100&sort=updated',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  )

  const repos = await res.json()

  // Limit to top 10 most recently updated
  const recent = repos.slice(0, 10)

  // Fetch all readmes in parallel
  const results = await Promise.all(
    recent.map(async (repo: any) => {
      const readmeRes = await fetch(repo.url + '/readme', {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3.raw',
        },
      })

      if (!readmeRes.ok) return null

      const readme = await readmeRes.text()

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

  const filtered = results.filter(Boolean)

  cachedRepos = filtered
  lastFetchTime = now

  return NextResponse.json(filtered)
}
