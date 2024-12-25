import Link from 'next/link'

const pages = {
  'bayram': 'html',
  'alperen': 'css',
  'buğra': 'js',
  'yusuf': 'py',
  'hamza': 'react'
}

export default function PersonalPage({ name }: { name: string }) {
  const page = pages[name.toLowerCase() as keyof typeof pages]

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Welcome, {name}!</h1>
      <p className="mb-4">Here's your personal link:</p>
      <Link 
        href={`/${page}`}
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Go to {page.toUpperCase()} page
      </Link>
    </div>
  )
}

