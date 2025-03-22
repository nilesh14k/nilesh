'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <p className="text-gray-700 text-lg mb-8">
        Whether you have a question, a project, or just want to say hi —
        my inbox is always open. I&apos;ll try my best to get back to you!
      </p>

      <div className="space-y-6">
        <ContactItem
          icon={<Mail className="w-5 h-5 text-blue-600" />}
          label="Email"
          value="nileshkumar.nkmr@gmail.com"
          link="mailto:nileshkumar.nkmr@gmail.com"
        />
        <ContactItem
          icon={<Github className="w-5 h-5 text-gray-800" />}
          label="GitHub"
          value="nilesh14k"
          link="https://github.com/nilesh14k/"
        />
        <ContactItem
          icon={<Linkedin className="w-5 h-5 text-blue-700" />}
          label="LinkedIn"
          value="linkedin.com/in/nileshkumar14"
          link="https://www.linkedin.com/in/nileshkumar14/"
        />
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode
  label: string
  value: string
  link: string
}) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600 hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  )
}
