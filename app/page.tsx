'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [noButtonText, setNoButtonText] = useState('No')
  const [yesClicked, setYesClicked] = useState(false)
  const [noHoverCount, setNoHoverCount] = useState(0)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const noButtonTexts = [
    'No',
    'Are you sure?',
    'Really?',
    'Think again!',
    'Are you certain?',
    'Maybe reconsider?',
    'Give it another thought!',
    'Pretty please?',
    'Don\'t break my heart 💔',
    'Last chance!'
  ]

  const moveNoButton = () => {
    if (noButtonRef.current) {
      // Account for smaller screens on mobile
      const padding = window.innerWidth < 640 ? 20 : 100
      const maxX = window.innerWidth - noButtonRef.current.offsetWidth - padding
      const maxY = window.innerHeight - noButtonRef.current.offsetHeight - padding
      
      const newX = Math.max(10, Math.random() * maxX)
      const newY = Math.max(10, Math.random() * maxY)
      
      setNoButtonPosition({ x: newX, y: newY })
      
      // Change button text each time
      const newCount = noHoverCount + 1
      setNoHoverCount(newCount)
      setNoButtonText(noButtonTexts[Math.min(newCount, noButtonTexts.length - 1)])
    }
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  // Create floating hearts
  const FloatingHearts = () => {
    const hearts = []
    // Reduce number of hearts on mobile for better performance
    const heartCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 15
    for (let i = 0; i < heartCount; i++) {
      hearts.push(
        <div
          key={i}
          className="floating-heart fixed text-pink-500 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${15 + Math.random() * 15}px`
          }}
        >
          ❤️
        </div>
      )
    }
    return <>{hearts}</>
  }

  if (yesClicked) {
    return (
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <FloatingHearts />
        <div className="text-center z-10 animate-bounce-slow">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 heartbeat">💕</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 mb-4 sm:mb-6 drop-shadow-lg px-4">
            Yay! 🎉
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-pink-700 mb-3 sm:mb-4 px-4">
            I knew you&apos;d say yes!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-600 px-4">
            Happy Valentine&apos;s Day, my love! ❤️
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-pulse-slow">
            😘💖✨🌹💝
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-2xl w-full text-center z-10 px-4">
        {/* Cute animated hearts */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💗</span>
        </div>

        {/* Main question */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-pink-600 mb-4 sm:mb-6 heartbeat leading-tight">
            Hiii My Rapunzel Will You Be My Valentine?
          </h1>
          
          <div className="my-6 sm:my-8">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-float">🌹</div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-pink-700 mb-6 sm:mb-8">
            I promise to make you smile every day! 😊
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 relative" style={{ minHeight: '100px' }}>
            {/* Yes Button - Always in the same place */}
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-300 z-10"
            >
              Yes! 💕
            </button>

            {/* No Button - Moves around */}
            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full shadow-lg transition-all duration-200 fixed"
              style={{
                left: noButtonPosition.x || 'auto',
                top: noButtonPosition.y || 'auto',
                position: noButtonPosition.x ? 'fixed' : 'relative'
              }}
            >
              {noButtonText}
            </button>
          </div>

          {noHoverCount > 3 && (
            <p className="text-pink-600 mt-6 sm:mt-8 text-base sm:text-lg animate-pulse px-4">
              You can&apos;t say no! The button won&apos;t let you! 😄
            </p>
          )}
        </div>

        {/* Cute message */}
        <div className="text-pink-700 text-base sm:text-lg">
          <p>✨ Made with love just for you ✨</p>
        </div>
      </div>

      {/* Decorative elements - Hidden on very small screens, smaller on mobile */}
      <div className="hidden sm:block fixed top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-spin-slow opacity-50">🌸</div>
      <div className="hidden sm:block fixed bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-spin-slow opacity-50">🌺</div>
      <div className="hidden sm:block fixed top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce opacity-50">💐</div>
      <div className="hidden sm:block fixed bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-bounce opacity-50">🎀</div>
    </main>
  )
}
