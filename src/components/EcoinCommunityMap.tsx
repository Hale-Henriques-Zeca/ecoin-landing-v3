"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const leaders = [
{
name:"Mozambique Leader",
coordinates:[34.5085,-18.6657]
},
{
name:"Brazil Leader",
coordinates:[-47.8825,-15.7942]
},
{
name:"Portugal Leader",
coordinates:[-9.1393,38.7223]
}
];

export default function EcoinCommunityMap(){

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-20">

<h2 className="text-3xl text-[#D4AF37] font-semibold text-center mb-8">
🌍 E-Coin Community Map
</h2>

<ComposableMap
projectionConfig={{scale:150}}
className="w-full"
>

<Geographies geography={geoUrl}>
{({geographies}) =>
geographies.map((geo)=>(
<Geography
key={geo.rsmKey}
geography={geo}
fill="#111"
stroke="#333"
/>
))
}
</Geographies>

{leaders.map((leader,i)=>(
<Marker key={i} coordinates={leader.coordinates}>
<circle r={4} fill="#D4AF37"/>
</Marker>
))}

</ComposableMap>

</div>

);

}