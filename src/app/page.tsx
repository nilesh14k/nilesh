'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  useEffect(() => {
    // 🔄 Prefetch project data in the background when homepage loads
    fetch('/api/github-projects')
  }, [])

  return (
    <section className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm Nilesh Kumar 👋
          </h1>
          <p className="text-lg text-gray-700">
            I’m a full-stack developer, AI enthusiast, and founder of{' '}
            <strong>AtomicWaveAI</strong> and <strong>HOMATIQ</strong> — where I build intelligent software
            and smart home automation solutions. My passion lies in using AI to solve real-world problems,
            from fitness to home security.
          </p>
          <Link
            href="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            View My Projects
          </Link>
        </div>

        <div className="relative w-[300px] h-[300px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-blue-400 to-indigo-500 animate-[blob_6s_ease-in-out_infinite] blur-2xl opacity-40 z-0" />
          <Image
            src="/profile.png"
            alt="Nilesh Kumar"
            fill
            className="relative z-10 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div className="bg-white shadow p-4 rounded-lg">React / Next.js</div>
          <div className="bg-white shadow p-4 rounded-lg">Node.js / Express</div>
          <div className="bg-white shadow p-4 rounded-lg">Python / Java / Kotlin</div>
          <div className="bg-white shadow p-4 rounded-lg">Tailwind CSS / Material UI</div>
          <div className="bg-white shadow p-4 rounded-lg">MongoDB / Firebase / SQL</div>
          <div className="bg-white shadow p-4 rounded-lg">AWS / GCP / DevOps</div>
          <div className="bg-white shadow p-4 rounded-lg">TensorFlow / PyTorch / ML</div>
          <div className="bg-white shadow p-4 rounded-lg">Jetpack Compose / Android Dev</div>
        </div>
      </div>
    </section>
  )
}
