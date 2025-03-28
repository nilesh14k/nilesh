// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nilesh Kumar | Full Stack & AI Developer',
  description:
    'Portfolio of Nilesh Kumar — Full Stack Developer, AI Enthusiast, and Founder of HOMATIQ and AtomicWaveAI.',
  openGraph: {
    title: 'Nilesh Kumar Portfolio',
    description:
      'Full stack developer & AI creator with a passion for building intelligent systems.',
    url: 'https://nilesh14k.vercel.app',
    siteName: 'Nilesh Kumar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nilesh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nilesh Kumar Portfolio',
    description:
      'Full stack developer & AI creator with a passion for building intelligent systems.',
    images: ['/og-image.png'],
  },
  keywords: 'Nilesh Kumar, Full Stack Developer, AI, Machine Learning, Web Development, Portfolio',
  author: 'Nilesh Kumar',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nilesh-cyan.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Nilesh Kumar",
              url: "https://nilesh-cyan.vercel.app",
              description: "Full Stack Developer & AI Enthusiast",
              image: "https://nilesh-cyan.vercel.app/profile.png",
              sameAs: [
                "https://www.linkedin.com/in/nileshkumar14",
                "https://github.com/nilesh14k"
              ]
            })
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}'); 
            `,
          }}
        ></script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto px-4 py-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
