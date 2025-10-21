import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { google } from 'googleapis'

const DATA_PATH = path.join(process.cwd(), 'data', 'vision-signups.json')

function writeLocal(body: any){
  try{
    let existing: any[] = []
    if(fs.existsSync(DATA_PATH)){
      const raw = fs.readFileSync(DATA_PATH, 'utf-8')
      existing = JSON.parse(raw || '[]')
    }
    existing.push(body)
    fs.writeFileSync(DATA_PATH, JSON.stringify(existing, null, 2), 'utf-8')
  }catch(err){
    console.error('local write failed', err)
  }
}

function isEmail(s: string){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(req: Request){
  try{
    const body = await req.json()

    const { 
      name, 
      email, 
      phone, 
      message, 
      spouse,
      familySize,
      childrenAges,
      city,
      subject,
      formType,
      createdAt 
    } = body || {}

    // Basic validation: require name and email
    if(!name || !email){
      return NextResponse.json({ ok: false, error: 'name and email are required' }, { status: 400 })
    }
    if(!isEmail(email)){
      return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 })
    }
    if(!message){
      return NextResponse.json({ ok: false, error: 'prayer request is required' }, { status: 400 })
    }

    // Prepare row with all fields for Vision School form
    const row = [
      createdAt || new Date().toISOString(),
      name,
      email,
      phone || '',
      spouse || '',
      familySize || '',
      childrenAges || '',
      city || '',
      message || '',
      subject || 'Vision School Registration'
    ]

    // Attempt to append to Google Sheets if env is configured
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID
    const SA_CRED = process.env.GOOGLE_SERVICE_ACCOUNT

    if(SPREADSHEET_ID && SA_CRED){
      try{
        const cred = JSON.parse(SA_CRED)

        // Some env setups escape newlines in private_key; fix common case
        if(typeof cred.private_key === 'string'){
          cred.private_key = cred.private_key.replace(/\\n/g, '\n')
        }

        const auth = new google.auth.GoogleAuth({
          credentials: cred,
          scopes: ['https://www.googleapis.com/auth/spreadsheets']
        })

  const client = await auth.getClient()
  // Pass the GoogleAuth instance to match googleapis types (auth can be GoogleAuth|OAuth2Client|string)
  const sheets = google.sheets({ version: 'v4', auth })

        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Sheet1!A:E',
          valueInputOption: 'USER_ENTERED',
          insertDataOption: 'INSERT_ROWS',
          requestBody: { values: [ row ] }
        })

        // Also keep a local copy
        writeLocal({ ...body, createdAt: row[0], _stored: 'gsheets' })

        return NextResponse.json({ ok: true, stored: 'gsheets' })
      }catch(err){
        console.error('gsheets append failed', err)
        // fallthrough to local write
      }
    }

    // fallback: write locally
    writeLocal({ ...body, createdAt: row[0], _stored: 'local' })
    return NextResponse.json({ ok: true, stored: 'local' })
  }catch(err){
    console.error(err)
    return NextResponse.json({ ok: false, error: 'failed to save' }, { status: 500 })
  }
}
