import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

import BlogList from "components/bloglist";


export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Les Plantules</h1>
      <section>
        <hr />
        <h2>Actualités</h2>
        <BlogList></BlogList>
      </section>
    </div>
  )
}