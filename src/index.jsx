import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900">Hello, world!</h1>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)

