'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  tech: string[]
  link?: string
}

const ProjectCard = ({ title, description, tech, link }: Props) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-blue-600 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-50 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <Link
          href={link}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          View Project →
        </Link>
      )}
    </motion.div>
  )
}

export default ProjectCard
