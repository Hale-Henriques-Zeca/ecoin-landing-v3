"use client";

export default function RewardVelocity({pending,totalStaked}:{pending:number,totalStaked:number}){

let level="Low";
let color="text-gray-400";

if(pending>0.01*totalStaked){
 level="High";
 color="text-green-400";
}
else if(pending>0.002*totalStaked){
 level="Medium";
 color="text-yellow-400";
}

return(

<div className="bg-black/50 border border-gray-700 rounded-xl p-4">

<p className="text-xs text-gray-400 mb-2">
Reward Velocity
</p>

<div className="flex justify-between text-sm">

<span className="text-gray-400">
Reward Generation
</span>

<span className={`font-semibold ${color}`}>
{level}
</span>

</div>

</div>

);

}