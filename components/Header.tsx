'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-lg font-semibold text-primary">
          Nama Anda
        </motion.div>

        <nav className="space-x-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
