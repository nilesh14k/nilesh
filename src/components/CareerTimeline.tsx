'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const timeline = [
  {
    year: '2024',
    title: 'Founding Partner & Full-Stack Dev',
    org: 'AtomicWaveAI, Mumbai',
    logo: '/atomicwaveai.png', // Company logo path
    description:
      'Launched AI-based projects like VITAL fitness app, AI chatbots, and POS-integrated billing systems. Leading a tech team.',
  },
  {
    year: '2022',
    title: 'Owner & Founder',
    org: 'HOMATIQ, Mohali',
    logo: '/homatiq.png',
    description:
      'Launched HOMATIQ to build custom home automation, security systems, and media servers. Delivered full-stack smart home solutions.',
  },
  {
    year: '2021',
    title: 'Mobile Application Developer Intern',
    org: 'Sprouting Wings, Jaipur',
    logo: '/sproutingwings.jpg',
    description:
      'Developed BodyGyaan – a Kotlin-based fitness app using Jetpack Compose. Integrated sensor tracking and fitness metrics.',
  },
]

export default function CareerTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div className="space-y-12" ref={ref}>
      <h2 className="text-3xl font-bold">🧭 Career Journey</h2>
      <div className="relative border-l-4 border-blue-500 ml-2 pl-6 space-y-10">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.logo}
                alt={item.org}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.org} &middot; {item.year}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
