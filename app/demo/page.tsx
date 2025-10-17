'use client'
import React, { useState } from 'react'

export default function DemoPage() {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [cls, setCls] = useState('Class 11')
  const [mode, setMode] = useState('Offline')
  const [msg, setMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setMsg('Saving...')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ name, whatsapp, class: cls, mode })
      })
      if (res.ok) {
        setMsg('Saved ✅')
        setName(''); setWhatsapp('')
      } else {
        setMsg('Error saving')
      }
    } catch(err) {
      setMsg('Network error')
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Join Free Demo Class</h1>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block font-medium">WhatsApp</label>
          <input value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} className="w-full p-2 border rounded" placeholder="91XXXXXXXXXX" required />
        </div>
        <div>
          <label className="block font-medium">Class / Exam</label>
          <select value={cls} onChange={e=>setCls(e.target.value)} className="w-full p-2 border rounded">
            <option>Class 9 CBSE</option>
            <option>Class 10 CBSE</option>
            <option>Class 11 CBSE</option>
            <option>Class 12 CBSE</option>
            <option>NEET</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Mode</label>
          <select value={mode} onChange={e=>setMode(e.target.value)} className="w-full p-2 border rounded">
            <option>Offline</option>
            <option>Online</option>
          </select>
        </div>
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded">Submit</button>
        </div>
        <div className="text-sm text-gray-600">{msg}</div>
      </form>
    </div>
  )
}
