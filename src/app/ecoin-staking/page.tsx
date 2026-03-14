"use client";

import Link from "next/link";


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">

      {/* ================= HERO ================= */}

      <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10" />

        <div className="relative z-10 max-w-3xl text-center">

          <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
            EdenKingDom Protocol
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            💰 <span className="text-[#D4AF37]">Earn Daily with the E-Coin Staking Ecosystem</span>
          </h1>

          <p className="text-gray-600 mb-6">
            The E-Coin ecosystem was designed to reward the people who participate in its economy.
            By staking E-Coin, you become part of a continuous reward stream powered by real activity
            on the platform.
          </p>

          <p className="text-gray-600">
            Unlike many projects that promise fixed returns, E-Coin rewards come from actual economic
            activity happening on the platform in real time.
          </p>

        </div>

      </section>


      {/* ================= WHAT YOU NEED ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            What You Need to Start?
          </h2>

          <div className="space-y-4 text-gray-600">

            <p>Starting is simple, just five (5) steps bellow.</p>

            <p>1️⃣ Install a decentralized wallet such as <strong>MetaMask</strong>.</p>

            <p>2️⃣ Add the <strong>BNB Smart Chain (BEP-20)</strong> network.</p>

            <p>3️⃣ Import the <strong>EdenKingDom Coin (E-Coin)</strong> Token that holds 18 decimals.</p>


            <p>
              4️⃣ Hold a small amount of <strong>BNB</strong> for gas fees
              (even less than <strong>$0.50</strong> is enough).
            </p>

            <p>
              5️⃣ Deposit some <strong>Tether (BEP-20)</strong> — even
              <strong> $5 or $10 </strong> is enough to start.
            </p>

            <div className="pt-4 space-y-2">

              <p>After that:</p>

              <p>• Visit the platform</p>
              <p>• Convert <strong>USDT → E-Coin</strong></p>
              <p>• Stake your E-Coin</p>
              <p>• Start earning by seconds in On-Chain Cash-Flow stream Staking Rewards Coming from platform activity in the E-Coin Ecossystem </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= REWARD GENERATION ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold mb-10">
            How the Rewards Are Generated?
          </h2>

          <p className="text-gray-600 mb-8">
            The staking pool receives rewards from two main sources inside
            the platform economy.
          </p>

          <div className="space-y-10 text-gray-600">

            <div>
              <h3 className="font-semibold text-lg mb-3">1. Conversion Fees</h3>

              <p>Whenever users convert between assets:</p>

              <p className="mt-2"><strong>USDT → E-Coin</strong></p>

              <p>Entry fee: <strong>0.5%</strong></p>

              <p>10% of this fee goes to stakers</p>

              <p className="mt-3">Example:</p>

              <p>If someone converts <strong>$1000</strong></p>

              <p>0.5% fee = <strong>$5</strong></p>

              <p>10% to staking pool = <strong>$0.50</strong></p>

              <p className="text-[#D4AF37] font-semibold mt-2">
                That $0.50 is distributed instantly to all stakers.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg mb-3">2. Exit Conversions</h3>

              <p><strong>E-Coin → USDT</strong></p>

              <p>Exit fee: <strong>2.5%</strong></p>

              <p className="mt-3">Example:</p>

              <p>If someone converts <strong>$1000</strong></p>

              <p>2.5% fee = <strong>$25</strong></p>

              <p>10% to staking pool = <strong>$2.50</strong></p>

              <p className="text-[#D4AF37] font-semibold mt-2">
                Again, this amount is distributed to all stakers.
              </p>
            </div>


            <div>
              <h3 className="font-semibold text-lg mb-3">3. Claim Fees</h3>

              <p>When users claim their rewards:</p>

              <p>Claim fee = <strong>1%</strong></p>

              <p className="mt-2">From this:</p>

              <p>40% goes to stakers</p>

              <p>30% goes to the referrer (upline)</p>

              <p className="text-[#D4AF37] font-semibold mt-2">
                This means every claim on the platform feeds the staking economy.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY POWERFUL ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto space-y-4 text-gray-600">

          <h2 className="text-2xl font-semibold text-black mb-4">
            Why This System Is Powerful?
          </h2>

          <p>Your rewards are not limited to a fixed daily percentage.</p>

          <p>Instead, they depend on:</p>

          <p>• Number of users</p>
          <p>• Number of conversions</p>
          <p>• Trading volume</p>
          <p>• Claims happening across the platform</p>
          <p>• Overall ecosystem activity</p>

          <p className="font-semibold text-black mt-4">
            This means rewards can arrive every second,
            every time someone interacts with the platform.
          </p>

        </div>

      </section>


      {/* ================= EXAMPLE ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">

          <h2 className="text-2xl font-semibold text-black mb-6">
            Example Scenario
          </h2>

          <p>Imagine a small global activity level:</p>

          <p>Daily platform conversions:</p>

          <p><strong>2,000 users</strong></p>

          <p>Average transaction: <strong>$500</strong></p>

          <p>Total daily volume:</p>

          <p><strong>$1,000,000</strong></p>

          <p>
            Average platform fee distributed to staking:
            <strong> ≈ 1% of activity value</strong>
          </p>

          <p className="font-semibold text-black mt-4">
            That means roughly:
          </p>

          <p className="text-[#D4AF37] font-semibold">
            $10,000 distributed to stakers daily
          </p>

          <p>If the staking pool had 100 stakers:</p>

          <p className="font-semibold">
            each could average $100 per day
          </p>

          <p>
            If the platform grows to 10,000 users,
            rewards grow proportionally.
          </p>

        </div>

      </section>


      {/* ================= BIGGER ECOSYSTEM ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">

          <h2 className="text-2xl font-semibold text-black">
            The Bigger the Ecosystem, The Bigger the Rewards
          </h2>

          <p>Crypto is global.</p>

          <p>Millions of people transact every day.</p>

          <p>Now imagine thousands of users:</p>

          <p>• Converting assets</p>
          <p>• Staking tokens</p>
          <p>• Claiming rewards</p>
          <p>• Participating in referrals</p>

          <p className="font-semibold text-black mt-4">
            Every action fuels the reward system.
          </p>

        </div>

      </section>


      {/* ================= CONTINUOUS REWARDS ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">

          <h2 className="text-2xl font-semibold text-black">
            Continuous Reward Streaming
          </h2>

          <p>
            The E-Coin staking contract distributes rewards continuously,
            not once per day.
          </p>

          <p>This means earnings can accumulate:</p>

          <p>• Every minute</p>
          <p>• Every transaction</p>
          <p>• Every claim made by any user</p>

          <p className="font-semibold text-black">
            Your stake becomes a share of the entire platform economy.
          </p>

        </div>

      </section>


      {/* ================= RESULT ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">

          <h2 className="text-2xl font-semibold text-black">
            The Result
          </h2>

          <p>
            With growing adoption, it is possible for participants to reach:
          </p>

          <p className="text-[#D4AF37] font-semibold">
            Up to 1% daily average returns from ecosystem activity
          </p>

          <p>
            and sometimes even more depending on platform volume.
          </p>

          <p>
            All powered by a transparent blockchain smart contract system.
          </p>

        </div>

      </section>


      {/* ================= FINAL THOUGHT ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4">

          <h2 className="text-2xl font-semibold text-black">
            Final Thought
          </h2>

          <p>In most systems you earn from price speculation.</p>

          <p>
            In the E-Coin ecosystem you earn from real economic activity.
          </p>

          <p className="font-semibold text-black mt-4">
            Every conversion  
            Every claim  
            Every user joining the platform
          </p>

          <p className="text-[#D4AF37] font-semibold">
            adds fuel to the reward engine.
          </p>

          <p className="font-semibold text-black">
            That is the power of E-Coin Staking.
          </p>

        </div>

      </section>

      {/* ================= GUESS WHAT SECTION ================= */}

<section className="py-24 px-6 bg-black text-white text-center">

  <div className="max-w-3xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
      ✨ Guess what?
    </h2>

    <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">

      <p>
        So you can earn more because you earn that <strong>1%</strong> not in
        24 hours, but every time people convert, every time people claim
        their rewards.
      </p>

      <p>
        Every time someone converts <strong>$1000 USDT or E-Coin</strong>,
        a fee of <strong>0.5%</strong> is charged when entering.
      </p>

      <p>
        From that <strong>0.5%</strong> fee, which equals
        <strong> $5 USDT</strong>, <strong>10%</strong> of it goes to the
        staking pool.
      </p>

      <p>
        That means <strong>$0.50 USDT</strong> is distributed instantly.
      </p>

      <p>
        Now imagine that happening in seconds.
      </p>

      <p>
        <strong>1%</strong> of that <strong>$0.50</strong> is shared with you
        in seconds as part of the staking distribution.
      </p>

      <p>
        Now when it comes to <strong>E-Coin → USDT</strong>, the fee charged
        is <strong>2.5%</strong>.
      </p>

      <p>
        If someone converts <strong>$1000</strong>, the total fee becomes
        <strong> $25 USDT</strong>.
      </p>

      <p>
        From that fee, <strong>10%</strong> goes to the staking pool.
      </p>

      <p>
        That means <strong>$2.50 USDT</strong> is shared with stakers every
        second, every moment, instantly as transactions happen.
      </p>

      <p>
        Now think about this.
      </p>

      <p className="text-white font-semibold">
        In the world of today, crypto is global.
      </p>

      <p>
        Millions of people are transacting every day across the entire
        world.
      </p>

      <p>
        How many people will be converting assets on the platform?
      </p>

      <p>
        How many people will be claiming their earned rewards?
      </p>

      <p>
        My friend… this is powerful.
      </p>

      <p>
        Imagine just a simple scenario.
      </p>

      <p>
        If <strong>2,000 users</strong> perform conversions in a day,
        with an average of <strong>$500</strong> per transaction,
        the platform would process around:
      </p>

      <p className="text-[#D4AF37] font-semibold text-lg">
        $1,000,000 in daily activity
      </p>

      <p>
        With an average fee distribution to staking close to
        <strong> 1%</strong> of activity value,
        the staking pool could receive around:
      </p>

      <p className="text-[#D4AF37] font-semibold text-xl">
        $10,000 distributed to stakers in a single day
      </p>

      <p>
        If the staking pool had only <strong>100 stakers</strong>,
        each participant could average:
      </p>

      <p className="text-[#D4AF37] font-semibold text-lg">
        $100 per day
      </p>

      <p>
        And remember…
      </p>

      <p>
        That is with only a small number of users.
      </p>

      <p>
        Now imagine thousands of users across the globe:
      </p>

      <p>• Converting assets</p>
      <p>• Staking tokens</p>
      <p>• Claiming rewards</p>
      <p>• Participating in the ecosystem</p>

      <p className="text-white font-semibold mt-4">
        Every single action feeds the reward engine.
      </p>

      <p className="text-[#D4AF37] font-semibold">
        And that is the power of the E-Coin staking economy.
      </p>

    </div>

  </div>

</section>

{/* ================= EARN EVERY SECOND SECTION ================= */}

<section className="py-24 px-6 bg-gray-50 text-center">

  <div className="max-w-3xl mx-auto">

    <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
            Conclusion
          </span>

    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
      ⏱️ Earn Every Second with <span className="text-[#D4AF37]">E-Coin</span>
    </h2>

    <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">

      <p>
        In most platforms, rewards are distributed once every 24 hours. You wait… and wait… hoping that tomorrow your earnings will appear.
        <strong> E-Coin changes that completely.</strong>
      </p>

      <p>
        With E-Coin, your rewards are not delayed. They are generated <strong>every time activity happens in the ecosystem</strong> — meaning you earn <strong>continuously, in real time.</strong>
      </p>

      <p>
        Here’s how the power of the system works.
      </p>

      <p>
        Whenever someone converts <strong>USDT into E-Coin</strong>, a <strong>0.5% entry fee</strong> is applied. From that fee, <strong>10% is redirected to the reward pool</strong>, and <strong>1% of that pool is instantly shared with you and other participants.</strong>
      </p>

      <p>
        Let’s look at a simple example.
      </p>

      <p>
        If someone converts <strong>1,000 USDT</strong>:
      </p>

      <p>
        • Entry fee (0.5%) = <strong>5 USDT</strong>
      </p>

      <p>
        • 10% of that fee = <strong>0.5 USDT added to the reward distribution</strong>
      </p>

      <p>
        • <strong>1% or any percentage of your share however, that reward share is instantly distributed to participants</strong>
      </p>

      <p>
        And this distribution happens <strong>immediately</strong>, not after 24 hours.
      </p>

      <p>
        Now consider the reverse conversion.
      </p>

      <p>
        When users convert <strong>E-Coin back to USDT</strong>, the system applies a <strong>2.5% conversion fee</strong>.
      </p>

      <p>
        Example:
      </p>

      <p>
        If someone converts <strong>1,000 USDT worth of E-Coin</strong>:
      </p>

      <p>
        • Conversion fee (2.5%) = <strong>25 USDT</strong>
      </p>

      <p>
        • 10% of this fee = <strong>2.5 USDT added to the reward pool</strong>
      </p>

      <p>
        • That reward is then <strong>distributed instantly to participants</strong>
      </p>

      <p>
        So every time someone:
      </p>

      <p>• Converts <strong>USDT → E-Coin</strong></p>

      <p>• Converts <strong>E-Coin → USDT</strong></p>

      <p>• Claims <strong>earned rewards</strong></p>

      <p className="font-semibold text-black">
        You receive a share.
      </p>

      <p>Not tomorrow.</p>

      <p>Not once per day.</p>

      <p className="text-[#D4AF37] font-semibold">
        But continuously — every moment the network is active.
      </p>

      <p>
        Now imagine the scale.
      </p>

      <p>
        Crypto is global. Millions of users transact every minute across the world. Every conversion, every reward claim, every movement inside the ecosystem creates <strong>new reward events</strong>.
      </p>

      <p>
        That means your earnings are not limited to a single daily payout.
        They grow <strong>second by second</strong>, powered by the activity of the entire network.
      </p>

      <p>
        The more the ecosystem grows, the more transactions happen.
      </p>

      <p>
        The more transactions happen, the more rewards are generated.
      </p>

      <p>
        And the more rewards are generated, <strong>the more you earn.</strong>
      </p>

      <p className="font-semibold text-black">
        <strong>E-Coin is not just a token.</strong>
      </p>

      <p>
        It is a reward engine designed to turn global crypto activity into <strong>continuous income for its participants.</strong>
      </p>

      <p className="text-[#D4AF37] font-semibold text-lg">
        Welcome to the power of earning every second.
      </p>

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}

      <section className="py-24 px-6 text-center">

        <Link
          href="/ecoin-rewards"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Start E-Coin Staking →
        </Link>

      </section>

    </main>
  );
}