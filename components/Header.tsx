'use client'
import Link from 'next/link'
export default function Header(){
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">B</div>
          <div>
            <div className="font-bold">BioCharya</div>
            <div className="text-xs text-gray-500">Ankit Bhattacharya</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/courses">Courses</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/demo" className="rounded-md bg-primary text-white px-3 py-2">Join Free Demo Class</Link>
        </nav>
      </div>
    </header>
  )
}
