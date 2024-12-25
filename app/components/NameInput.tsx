'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const validNames = ['bayram', 'alperen', 'buğra', 'yusuf', 'hamza']

export default function NameInput({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validNames.includes(name.toLowerCase())) {
      onSubmit(name)
    } else {
      setError('Enter the correct name')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-64"
      />
      <Button type="submit">Submit</Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

