'use client'

import Link from 'next/link'
import CareerTimeline from '@/components/CareerTimeline'

// then inside your JSX...



export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="text-gray-700 text-lg">
        Hello! I'm <strong className="text-black">Nilesh Kumar</strong>, a passionate full-stack developer and AI enthusiast based in India. I specialize in building intelligent, scalable, and user-focused solutions — with a deep love for clean code and impactful technology.
      </p>
      <CareerTimeline />

    </section>
  )
}
