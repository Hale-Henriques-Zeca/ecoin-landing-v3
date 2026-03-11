"use client";

import { useAccount } from "wagmi";
import { useState, useMemo, useRef } from "react";
import QRCode from "react-qr-code";
import { Copy, Download, Share2 } from "lucide-react";

export default function GasSupportEngine() {

const { address, isConnected } = useAccount();

const [amount,setAmount] = useState("0.01");
const [token,setToken] = useState("BNB");

const [copied,setCopied] = useState(false);

const qrRef = useRef<HTMLDivElement>(null);

/* ================= QR DATA ================= */

const qrData = useMemo(()=>{

if(!address) return "";

return JSON.stringify({
 type:"gas_offer",
 token,
 amount,
 address
});

},[address,amount,token]);

/* ================= COPY JSON ================= */

const copyData = async()=>{

if(!qrData) return;

await navigator.clipboard.writeText(qrData);

setCopied(true);

setTimeout(()=>setCopied(false),2000);

};

/* ================= DOWNLOAD QR ================= */

const downloadQR = ()=>{

if(!qrRef.current) return;

const svg = qrRef.current.querySelector("svg");

if(!svg) return;

const serializer = new XMLSerializer();
const source = serializer.serializeToString(svg);

const img = new Image();

const svgBlob = new Blob([source],{
type:"image/svg+xml;charset=utf-8"
});

const url = URL.createObjectURL(svgBlob);

img.onload = ()=>{

const canvas = document.createElement("canvas");

canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");

if(!ctx) return;

ctx.fillStyle = "#0f172a";
ctx.fillRect(0,0,800,800);

/* TITLE */

ctx.fillStyle = "#D4AF37";
ctx.font = "bold 40px Arial";
ctx.textAlign = "center";

ctx.fillText("E-Coin Gas Support",400,80);

/* WHITE BOX */

ctx.fillStyle = "#ffffff";
ctx.fillRect(200,150,400,400);

/* QR */

ctx.drawImage(img,210,160,380,380);

/* TEXT */

ctx.fillStyle = "#ffffff";
ctx.font = "22px Arial";

ctx.fillText(`${amount} ${token}`,400,620);

ctx.font = "18px Arial";

ctx.fillText(
address?.slice(0,10)+"..."+address?.slice(-8),
400,
660
);

const file = canvas.toDataURL("image/png");

const link = document.createElement("a");

link.href = file;
link.download = `ecoin-gas-offer-${token}.png`;

link.click();

URL.revokeObjectURL(url);

};

img.src = url;

};

/* ================= SHARE ================= */

const shareQR = async()=>{

if(!qrData) return;

if(navigator.share){

await navigator.share({

title:"E-Coin Gas Support",
text:qrData

});

}else{

await navigator.clipboard.writeText(qrData);

}

};

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
⛽ Gas Support Sander
</h2>

{!isConnected &&(

<p className="text-gray-500 text-center">
Connect wallet to generate gas support QR
</p>

)}

{isConnected &&(

<>

{/* TOKEN */}

<label className="text-sm text-gray-400">
Token
</label>

<select
value={token}
onChange={(e)=>setToken(e.target.value)}
className="mt-2 mb-4 p-3 rounded-xl w-full bg-black/60"
>

<option>BNB</option>
<option>E-Coin</option>
<option>USDT</option>
<option>USDC</option>

</select>

{/* AMOUNT */}

<label className="text-sm text-gray-400">
Amount
</label>

<input
type="number"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
className="mt-2 p-3 rounded-xl w-full bg-black/60"
/>

{/* QR */}

<div className="mt-8 flex justify-center">

<div
ref={qrRef}
className="bg-white p-4 rounded-xl"
>

<QRCode
value={qrData}
size={260}
/>

</div>

</div>

<p className="text-center text-gray-400 mt-4">

Share this QR to send gas support

</p>

{/* BUTTONS */}

<div className="mt-6 flex flex-wrap gap-3 justify-center">

<button
onClick={copyData}
className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] text-black font-semibold flex items-center gap-2"
>

<Copy size={16}/>
{copied ? "Copied ✓":"Copy JSON"}

</button>

<button
onClick={downloadQR}
className="px-6 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center gap-2"
>

<Download size={16}/>
Download QR

</button>

<button
onClick={shareQR}
className="px-6 py-2 rounded-full border border-[#22C55E] text-[#22C55E] flex items-center gap-2"
>

<Share2 size={16}/>
Share

</button>

</div>

</>

)}

</div>

);

}