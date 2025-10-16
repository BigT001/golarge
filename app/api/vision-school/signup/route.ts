import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_PATH = path.join(process.cwd(), 'data', 'vision-signups.json')

export async function POST(req: Request){
  try{
    const body = await req.json()
    let existing: any[] = []
    if(fs.existsSync(DATA_PATH)){
      const raw = fs.readFileSync(DATA_PATH, 'utf-8')
      existing = JSON.parse(raw || '[]')
    }
    existing.push(body)
    fs.writeFileSync(DATA_PATH, JSON.stringify(existing, null, 2), 'utf-8')
    return NextResponse.json({ ok: true })
  }catch(err){
    console.error(err)
    return NextResponse.json({ ok: false, error: 'failed to save' }, { status: 500 })
  }
}
