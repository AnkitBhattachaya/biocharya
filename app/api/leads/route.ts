import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req: Request){
  try {
    const body = await req.json()
    const { data, error } = await supabase.from('leads').insert([{
      name: body.name,
      whatsapp: body.whatsapp,
      class: body.class,
      mode: body.mode
    }])
    if(error) return NextResponse.json({ ok:false, error: error.message }, { status: 500 })
    return NextResponse.json({ ok:true })
  } catch(e){
    return NextResponse.json({ ok:false, error: 'server error' }, { status: 500 })
  }
}
