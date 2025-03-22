import Link from 'next/link'

export default function NotFound() {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-4">Oops! This page doesn&apos;t exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">Back to home</Link>
      </div>
    )
  }
  