"use client";

import { useState, useRef } from "react";
import { Upload, Camera } from "lucide-react";
import QrScanner from "qr-scanner";

export default function QRClaimEngine(){

const [data,setData]=useState<any>(null);
const [scanning,setScanning]=useState(false);

const videoRef = useRef<HTMLVideoElement>(null);
const fileInputRef = useRef<HTMLInputElement>(null);

/* ================= READ FILE ================= */

const readQRFile = async(file:File)=>{

const result = await QrScanner.scanImage(file);

try{

const parsed = JSON.parse(result);
setData(parsed);

}catch{}

};

/* ================= FILE INPUT ================= */

const handleFile = (e:any)=>{

const file = e.target.files[0];
if(!file) return;

readQRFile(file);

};

/* ================= DRAG DROP ================= */

const handleDrop = (e:any)=>{

e.preventDefault();

const file = e.dataTransfer.files[0];
if(!file) return;

readQRFile(file);

};

/* ================= CAMERA SCAN ================= */

const startScan = async()=>{

setScanning(true);

const scanner = new QrScanner(
videoRef.current!,
(result)=>{

try{

const parsed = JSON.parse(result);     // ✅ correto

setData(parsed);
scanner.stop();
setScanning(false);

}catch{}

});

scanner.start();

};

/* ================= CLAIM ================= */

const claimGas = ()=>{

if(!data) return;

alert(`Claiming ${data.amount} ${data.token}`);

};

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
⛽ Gas Support Receiver
</h2>

{/* DRAG AREA */}

<div
onDrop={handleDrop}
onDragOver={(e)=>e.preventDefault()}
className="border border-dashed border-white/20 p-10 rounded-xl text-center"
>

<p className="text-gray-400 mb-4">

Drag QR Image Here

</p>

<button
onClick={()=>fileInputRef.current?.click()}
className="px-6 py-2 bg-[#D4AF37] text-black rounded-xl flex items-center gap-2 mx-auto"
>

<Upload size={16}/>
Upload QR

</button>

<input
type="file"
accept="image/*"
ref={fileInputRef}
onChange={handleFile}
className="hidden"
/>

</div>

{/* CAMERA */}

<button
onClick={startScan}
className="mt-6 px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-xl flex items-center gap-2 mx-auto"
>

<Camera size={16}/>
Scan Camera

</button>

{scanning && (

<video
ref={videoRef}
className="mt-6 rounded-xl"
/>

)}

{/* PREVIEW */}

{data && (

<div className="mt-8 bg-black/60 border border-white/10 p-6 rounded-xl">

<h3 className="text-lg text-[#D4AF37] mb-4">
Gas Offer Preview
</h3>

<p>Token: {data.token}</p>
<p>Amount: {data.amount}</p>
<p>From: {data.address}</p>

<button
onClick={claimGas}
className="mt-6 w-full py-3 bg-[#D4AF37] text-black rounded-xl"
>

Claim Gas

</button>

</div>

)}

</div>

);

}