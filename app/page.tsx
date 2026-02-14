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
      const maxX = window.innerWidth - noButtonRef.current.offsetWidth - 100
      const maxY = window.innerHeight - noButtonRef.current.offsetHeight - 100
      
      const newX = Math.random() * maxX
      const newY = Math.random() * maxY
      
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
    for (let i = 0; i < 15; i++) {
      hearts.push(
        <div
          key={i}
          className="floating-heart fixed text-pink-500 text-2xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 20}px`
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
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingHearts />
        <div className="text-center z-10 animate-bounce-slow">
          <div className="text-8xl mb-8 heartbeat">💕</div>
          <h1 className="text-6xl font-bold text-pink-600 mb-6 drop-shadow-lg">
            Yay! 🎉
          </h1>
          <p className="text-3xl text-pink-700 mb-4">
            I knew you&apos;d say yes!
          </p>
          <p className="text-2xl text-pink-600">
            Happy Valentine&apos;s Day, my love! ❤️
          </p>
          <div className="mt-12 text-7xl animate-pulse-slow">
            😘💖✨🌹💝
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-2xl w-full text-center z-10">
        {/* Cute animated hearts */}
        <div className="flex justify-center gap-4 mb-8 text-6xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💗</span>
        </div>

        {/* Main question */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-6 heartbeat">
            Will You Be My Valentine?
          </h1>
          
          <div className="my-8">
            <div className="text-8xl animate-float">🌹</div>
          </div>

          <p className="text-2xl text-pink-700 mb-8">
            I promise to make you smile every day! 😊
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 relative" style={{ minHeight: '120px' }}>
            {/* Yes Button - Always in the same place */}
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-10"
            >
              Yes! 💕
            </button>

            {/* No Button - Moves around */}
            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg transition-all duration-200 fixed"
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
            <p className="text-pink-600 mt-8 text-lg animate-pulse">
              You can&apos;t say no! The button won&apos;t let you! 😄
            </p>
          )}
        </div>

        {/* Cute message */}
        <div className="text-pink-700 text-lg">
          <p>✨ Made with love just for you ✨</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-10 left-10 text-6xl animate-spin-slow opacity-50">🌸</div>
      <div className="fixed bottom-10 right-10 text-6xl animate-spin-slow opacity-50">🌺</div>
      <div className="fixed top-10 right-10 text-6xl animate-bounce opacity-50">💐</div>
      <div className="fixed bottom-10 left-10 text-6xl animate-bounce opacity-50">🎀</div>
    </main>
  )
}
