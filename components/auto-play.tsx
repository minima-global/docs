'use client'

import { useEffect, useRef } from 'react'

interface AutoPlayProps {
  src: string
  className?: string
}

export default function AutoPlay({ src, className }: AutoPlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view
            video.play().catch((error) => {
              // Handle any autoplay restrictions
              console.log('Autoplay prevented:', error)
            })
          } else {
            // Video is out of view
            video.pause()
          }
        })
      },
      {
        // Start playing when at least 50% of the video is visible
        threshold: 0.5,
      }
    )

    // Start observing the video element
    observer.observe(video)

    // Cleanup
    return () => {
      observer.unobserve(video)
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      playsInline
      muted
      loop
      controls={false}
    />
  )
}
