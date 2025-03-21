'use client'

import { useEffect, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import ProjectSkeleton from '@/components/ProjectSkeleton'

type Repo = {
  name: string
  description: string
  html_url: string
  language: string
}

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch('/api/github-projects') // We’ll create this next
      const data = await res.json()
      setRepos(data)
    }

    fetchRepos()
  }, [])

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {!repos ? (
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      ) : (

        <div className="grid md:grid-cols-2 gap-8">
          {repos.map((repo, idx) => (
            <ProjectCard
              key={idx}
              title={repo.name}
              description={repo.description}
              tech={[repo.language]}
              link={repo.html_url}
            />
          ))}
        </div>
      )}
    </section>
  )
}
