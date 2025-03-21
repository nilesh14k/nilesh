// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Nilesh Kumar. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a
            href="mailto:nileshkumar.nkmr@gmail.com"
            className="hover:text-blue-600"
          >
            Email
          </a>
          <a
            href="https://github.com/nilesh14k"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
          {/* Add more links like LinkedIn if needed */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
