import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.BSCSCAN_API_KEY;
    const TOKEN_ADDRESS = "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964";

    const res = await fetch(
      `https://api.bscscan.com/api?module=token&action=getTokenHolderList&contractaddress=${TOKEN_ADDRESS}&apikey=${API_KEY}`
    );
    const data = await res.json();

    // data.result.length contém o número de holders
    const holdersCount = data.result?.length ?? 0;

    return NextResponse.json({ holders: holdersCount.toString() });
  } catch (e) {
    console.error("Erro ao buscar holders via BscScan API", e);
    return NextResponse.json({ holders: "0" });
  }
}