import React from 'react'
import Link from 'next/link'
import CourseGrid from '../components/CourseGrid'

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#ecfdf5] to-white rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">Crack NEET & Ace Biology with India’s Most Practical Mentor.</h1>
            <p className="mt-4 text-gray-700">500+ students trained with concept-first approach, small batches, and exam-proven strategies.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/demo" className="rounded-md bg-primary text-white px-4 py-2">Join Free Demo Class</Link>
              <Link href="/courses" className="rounded-md border px-4 py-2">Explore Courses</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="h-56 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-400">Hero image placeholder</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Courses Overview</h2>
        <CourseGrid />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why BioCharya Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded">Concept-first teaching</div>
          <div className="p-4 border rounded">Small batches & doubt clearing</div>
          <div className="p-4 border rounded">Exam-oriented practice</div>
        </div>
      </section>
    </>
  )
}
