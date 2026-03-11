import { NextResponse } from "next/server"

export async function GET(){

const res = await fetch(
"https://bscscan.com/token/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"
)

const html = await res.text()

const match = html.match(/Holders[^0-9]*([\d,]+)/i)

const holders = match ? match[1] : "0"

return NextResponse.json({ holders })

}