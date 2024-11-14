'use client'

import Image from 'next/image'

interface DreamVisualizationProps {
  imageUrl: string
}

export default function DreamVisualization({ imageUrl }: DreamVisualizationProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">Dream Visualization</h2>
      <div className="relative w-full h-64 sm:h-96">
        <Image
          src={imageUrl}
          alt="Dream Visualization"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}