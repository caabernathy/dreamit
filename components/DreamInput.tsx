'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface DreamInputProps {
  onSubmit: (description: string, mood: string) => void
}

export default function DreamInput({ onSubmit }: DreamInputProps) {
  const [description, setDescription] = useState('')
  const [mood, setMood] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    if (description.length > 0 && description.length % 5 === 0) {
      // TODO: Implement real-time suggestions API
      setSuggestions(['Add more color details!', 'Describe the setting!', 'What sounds do you hear?'])
    } else {
      setSuggestions([])
    }
  }, [description])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(description, mood)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Describe your dream..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />
        {suggestions.length > 0 && (
          <ul className="mt-2 text-sm text-gray-600">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        )}
      </div>
      <Select onValueChange={setMood}>
        <SelectTrigger>
          <SelectValue placeholder="Select mood" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="calm">Calm</SelectItem>
          <SelectItem value="mysterious">Mysterious</SelectItem>
          <SelectItem value="joyful">Joyful</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full">
        Interpret Dream
      </Button>
    </form>
  )
}