import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

async function fetchRepos(): Promise<Repo[]> {
  // Ambil repositori publik pengguna (di-cache revalidate 60s)
  const res = await fetch("https://api.github.com/users/210102001-rgb/repos?sort=updated&per_page=6", { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomePage() {
  const repos = await fetchRepos();
  return (
    <>
      <Hero />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Proyek Terbaru</h2>
        <Projects repos={repos} />
      </section>
      <Footer />
    </>
  );
}
