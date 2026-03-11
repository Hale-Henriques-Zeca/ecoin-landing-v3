"use client";

export default function ClaimGasInfoPage() {

return (

<div className="min-h-screen bg-white text-black">

{/* HERO */}

<section className="py-24 px-6 text-center">

<h1 className="text-3xl md:text-4xl font-semibold text-[var(--blue)]">

Why Claim Gas Can Be Higher Than Small Rewards

</h1>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto">

Understanding gas fees when claiming E-Coin staking rewards.

</p>

</section>


{/* EXPLANATION */}

<section className="py-20 px-6 max-w-4xl mx-auto space-y-12">

<div>

<h2 className="text-2xl font-semibold mb-4">

Gas is not the protocol fee

</h2>

<p>

The fee you see when claiming is not the 1% protocol fee.

It is the <b>gas cost of executing a blockchain transaction</b>.

</p>

<p className="mt-3">

Example:

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

Reward received: 0.000545 ECOIN  
Estimated gas:   0.0009625 BNB (~$0.62)

</pre>

<p className="mt-3">

In this case:

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">
gas {'>'} reward
</pre>


</div>


{/* WHY GAS EXISTS */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Why the claim transaction uses gas

</h2>

<p>

When a user calls the staking claim function, several operations happen

on-chain.

</p>

</div>


{/* STEP 1 */}

<div>

<h3 className="text-xl font-semibold mb-3">

1️⃣ Staking accounting update

</h3>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

_update()
streamRewards()

</pre>

<p className="mt-3">

These update internal accounting variables:

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

accRewardPerShare
pending
rewardDebt

</pre>

<p className="mt-3">

Storage updates are expensive on-chain.

</p>

</div>


{/* STEP 2 */}

<div>

<h3 className="text-xl font-semibold mb-3">

2️⃣ Reward transfer

</h3>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

ecoin.safeTransfer(address(claimCollector), reward);

</pre>

<p className="mt-3">

This is a standard ERC20 transfer.

</p>

</div>


{/* STEP 3 */}

<div>

<h3 className="text-xl font-semibold mb-3">

3️⃣ Cross contract call

</h3>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

claimCollector.processClaim(msg.sender, reward);

</pre>

<p className="mt-3">

The staking contract calls another contract to process the distribution.

</p>

</div>


{/* STEP 4 */}

<div>

<h3 className="text-xl font-semibold mb-3">

4️⃣ Fee distribution

</h3>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

ecoin.safeTransfer(user, net);
ecoin.safeTransfer(referral, referralCut);
ecoin.safeTransfer(gasPool, gasShare);
ecoin.safeTransfer(staking, stakingShare);
ecoin.safeTransfer(treasury, treasuryShare);

</pre>

<p className="mt-3">

Each ERC20 transfer costs roughly <b>40k gas</b>.

</p>

</div>


{/* GAS ESTIMATE */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Typical claim gas cost

</h2>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

ERC20 transfers (5x)     ~200k
staking updates          ~60k
storage writes           ~40k
cross contract calls     ~40k

--------------------------------

Total gas ≈ 340k – 420k

</pre>

<p className="mt-3">

On BNB Chain this usually equals around:

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

~0.0009 BNB

</pre>

</div>


{/* PROBLEM */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Why small claims look expensive

</h2>

<p>

If the reward is extremely small, the gas cost can be larger than

the reward itself.

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

Reward: 0.000545 ECOIN
Gas:    0.0009625 BNB

</pre>

<p className="mt-3">

This is why most DeFi protocols recommend claiming only after

rewards accumulate.

</p>

</div>


{/* PROTOCOLS */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Typical claim minimums in DeFi

</h2>

<table className="w-full border">

<thead className="bg-gray-100">

<tr>

<th className="p-3 border">Protocol</th>
<th className="p-3 border">Recommended Claim</th>

</tr>

</thead>

<tbody>

<tr>
<td className="p-3 border">Aave</td>
<td className="p-3 border">~$5</td>
</tr>

<tr>
<td className="p-3 border">Curve</td>
<td className="p-3 border">~$10</td>
</tr>

<tr>
<td className="p-3 border">GMX</td>
<td className="p-3 border">~$3</td>
</tr>

<tr>
<td className="p-3 border">PancakeSwap</td>
<td className="p-3 border">~$2</td>
</tr>

</tbody>

</table>

</div>


{/* RECOMMENDATION */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Best practice

</h2>

<p>

The recommended approach is to allow rewards to accumulate before claiming.

</p>

<pre className="bg-gray-100 p-4 rounded-lg text-sm">

Recommended claim threshold:

0.01 ECOIN or higher

</pre>

</div>


{/* CONCLUSION */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Conclusion

</h2>

<p>

The staking system is functioning correctly.

Gas exists because the claim transaction performs multiple

on-chain operations such as accounting updates, fee distribution,

and token transfers.

</p>

<p className="mt-3">

Claiming larger accumulated rewards helps reduce the

relative cost of gas.

</p>

</div>

</section>

</div>

);

}