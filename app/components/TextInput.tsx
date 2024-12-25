'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextInput({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const handleInput = () => {
      if (textareaRef.current) {
        const cursorPosition = textareaRef.current.selectionStart
        const lines = textareaRef.current.value.split('\n')
        const updatedLines = lines.map(line => line.startsWith('*') ? line : `*${line}`)
        const updatedText = updatedLines.join('\n')
        setText(updatedText)
        
        // Restore cursor position
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = cursorPosition + 1
            textareaRef.current.selectionEnd = cursorPosition + 1
          }
        }, 0)
      }
    }

    textareaRef.current?.addEventListener('input', handleInput)
    return () => textareaRef.current?.removeEventListener('input', handleInput)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(text)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
        className="w-64 h-32"
      />
      <Button type="submit">Send</Button>
    </form>
  )
}

