'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
}

export default function Projects({ repos }: { repos: Repo[] }) {
  if (!repos || repos.length === 0) {
    return <div className="text-sm text-gray-500">Tidak ada repositori publik untuk ditampilkan.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {repos.map((r) => (
        <motion.article key={r.id} whileHover={{ y: -4 }} className="card flex flex-col justify-between">
          <div>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="text-lg font-semibold text-gray-900 hover:underline">{r.name}</a>
            <p className="text-sm text-gray-600 mt-2">{r.description ?? '—'}</p>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {r.stargazers_count}</span>
              <span>{r.language ?? '—'}</span>
            </div>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="text-primary">Lihat</a>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
