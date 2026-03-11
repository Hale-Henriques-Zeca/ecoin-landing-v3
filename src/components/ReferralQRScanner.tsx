"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function ReferralQRScanner({ onScan }:{ onScan:(addr:string)=>void }){

useEffect(()=>{

const scanner = new Html5QrcodeScanner(
"reader",
{ fps:10, qrbox:250 },
false
);

scanner.render(
  (decodedText) => {
    onScan(decodedText);
    scanner.clear();
  },
  (errorMessage) => {
    // opcional: apenas log de erro
    console.warn("QR Scan error:", errorMessage);
  }
);

},[]);

return(
<div className="bg-black p-4 rounded-xl">
<div id="reader"></div>
</div>
)

}