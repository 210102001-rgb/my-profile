'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="text-4xl sm:text-5xl font-extrabold">
          Halo, saya <span className="text-primary">Nama Anda</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-lg text-gray-700 max-w-xl">
          Saya membangun produk web modern dengan fokus pada performa, aksesibilitas, dan desain yang bersih. Saya suka bereksperimen dengan tooling terbaru.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-6 flex gap-3 flex-wrap">
          <a href="#contact" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow hover:brightness-105 transition">
            Hubungi Saya
          </a>
          <a href="#projects" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Lihat Proyek
          </a>
        </motion.div>

        <div className="mt-6 flex items-center gap-4 text-gray-600">
          <a href="https://github.com/210102001-rgb" target="_blank" rel="noreferrer" className="hover:text-gray-900"><FaGithub /></a>
          <a href="#" className="hover:text-gray-900"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-900"><FaTwitter /></a>
        </div>
      </div>

      <motion.aside initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="flex flex-col items-center">
        <div className="w-56 h-56 bg-gradient-to-br from-primary to-accent rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          {/* Tempatkan foto di /public/me.jpg */}
          <img src="/me.jpg" alt="Nama Anda" className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 text-center max-w-xs">
          <h4 className="font-semibold text-gray-900">Tentang Saya</h4>
          <p className="text-sm text-gray-600 mt-2">
            Singkatnya: saya membangun aplikasi web, berpengalaman di frontend & full-stack, dan suka tooling modern.
          </p>
        </div>
      </motion.aside>
    </section>
  )
}
