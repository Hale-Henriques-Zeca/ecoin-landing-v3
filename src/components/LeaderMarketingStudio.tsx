"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image, Shirt, Package } from "lucide-react";

export default function LeaderMarketingStudio() {

const [files, setFiles] = useState<File[]>([]);

const handleUpload = (e: any) => {
  const uploaded = Array.from(e.target.files);
  setFiles((prev:any) => [...prev, ...uploaded]);
};

const removeFile = (index:number) => {
setFiles(files.filter((_,i)=>i !== index))
}

return (

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mb-16">

{/* TITLE */}

<h2 className="text-3xl font-semibold text-[#D4AF37] mb-6 text-center">
🎨 Leader Marketing Studio
</h2>

<p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
Aqui os líderes podem acessar e compartilhar materiais oficiais de marketing
da <strong>E-Coin</strong>, incluindo camisetas, bonés, banners,
materiais promocionais e kits de divulgação.
</p>

{/* CARDS */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

{/* Camisetas */}
<div className="bg-black/60 border border-white/10 rounded-xl p-6 text-center">

<Shirt className="mx-auto text-[#D4AF37] mb-3" size={40}/>

<h3 className="text-lg font-semibold mb-2">
Layouts de Camisetas
</h3>

<p className="text-gray-400 text-sm">
Designs oficiais para impressão ou venda de camisetas
da comunidade E-Coin.
</p>

</div>


{/* Bonés */}
<div className="bg-black/60 border border-white/10 rounded-xl p-6 text-center">

<Image className="mx-auto text-[#D4AF37] mb-3" size={40}/>

<h3 className="text-lg font-semibold mb-2">
Bonés & Merchandising
</h3>

<p className="text-gray-400 text-sm">
Material visual para bonés, adesivos,
autocolantes e branding físico.
</p>

</div>


{/* Kits */}
<div className="bg-black/60 border border-white/10 rounded-xl p-6 text-center">

<Package className="mx-auto text-[#D4AF37] mb-3" size={40}/>

<h3 className="text-lg font-semibold mb-2">
Marketing Kits
</h3>

<p className="text-gray-400 text-sm">
Banners, posters, flyers e kits
de apresentação para eventos.
</p>

</div>

</div>


{/* UPLOAD AREA */}

<div className="border border-dashed border-[#D4AF37]/40 rounded-xl p-10 text-center">

<label className="cursor-pointer">

<div className="flex flex-col items-center gap-4">

<Upload size={40} className="text-[#D4AF37]" />

<p className="text-gray-300">
Upload de layouts ou artes promocionais
</p>

<p className="text-gray-500 text-sm">
PNG, JPG ou SVG
</p>

</div>

<input
type="file"
multiple
className="hidden"
onChange={handleUpload}
/>

</label>

</div>


{/* PREVIEW */}

{files.length > 0 && (

<div className="mt-10 grid md:grid-cols-4 gap-4">

{files.map((file, i) => (

<div
key={i}
className="relative bg-black/60 border border-white/10 rounded-xl p-3"
>

<img
src={URL.createObjectURL(file)}
className="rounded-lg"
/>

<button
onClick={() => removeFile(i)}
className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
>
Delete
</button>

</div>

))}

</div>

)}

</div>

);
}