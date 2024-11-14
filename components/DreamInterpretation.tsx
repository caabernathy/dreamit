'use client'

interface DreamInterpretationProps {
    interpretation: string
  }
  
  export default function DreamInterpretation({ interpretation }: DreamInterpretationProps) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Dream Interpretation</h2>
        <p className="text-gray-700">{interpretation}</p>
      </div>
    )
  }
  