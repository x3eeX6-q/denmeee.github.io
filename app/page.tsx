'use client'

import { useState, useEffect } from 'react'
import NameInput from './components/NameInput'
import TextInput from './components/TextInput'
import LoadingScreen from './components/LoadingScreen'
import PersonalPage from './components/PersonalPage'

export default function Home() {
  const [stage, setStage] = useState(1)
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    if (stage === 3) {
      setTimeout(() => setStage(4), 5000)
    } else if (stage === 4) {
      setTimeout(() => setStage(5), 5000)
    }
  }, [stage])

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName)
    setStage(2)
  }

  const handleTextSubmit = (submittedText: string) => {
    setText(submittedText)
    setStage(3)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {stage === 1 && <NameInput onSubmit={handleNameSubmit} />}
      {stage === 2 && <TextInput onSubmit={handleTextSubmit} />}
      {stage === 3 && <LoadingScreen message="Requests are being processed" />}
      {stage === 4 && <LoadingScreen message="Your requests are being processed, please wait" />}
      {stage === 5 && <PersonalPage name={name} />}
    </main>
  )
}

