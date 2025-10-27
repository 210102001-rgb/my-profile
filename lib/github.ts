export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
}

/**
 * Helper server-side untuk mengambil repositori publik.
 * Jika ingin mengakses repositori privat, set environment variable GITHUB_TOKEN
 * dan tambahkan header Authorization: `token ${process.env.GITHUB_TOKEN}` pada fetch.
 */
export async function fetchPublicRepos(username: string, per_page = 6): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${per_page}`, { next: { revalidate: 60 } })
  if (!res.ok) return []
  return res.json()
}
