const steps = [
  {
    num: 'STEP 01 — SEE',
    title: 'Behavioral Intelligence',
    desc: 'The engine profiles every wallet — engagement patterns, churn risk, cross-protocol behavior. 95% predictive accuracy across 120M+ wallets.',
    color: 'violet' as const,
  },
  {
    num: 'STEP 02 — CAPTURE',
    title: 'Commerce Data',
    desc: 'The payments widget captures purchase behavior in real time. Every transaction feeds the model. Every checkout becomes a data point.',
    color: 'accent' as const,
  },
  {
    num: 'STEP 03 — ACT',
    title: 'Engagent',
    desc: "The AI agent acts on predictions — triggering retention workflows, surfacing recommendations, adjusting incentives. Protocols don't hire a growth team. They plug in Engagent.",
    color: 'green' as const,
  },
]

const dotColors = {
  violet: 'bg-violet border-violet',
  accent: 'bg-accent border-accent',
  green: 'bg-green border-green shadow-[0_0_12px_rgba(74,222,128,0.4)]',
}

export default function TheLoop() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="engagent">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-[72px] items-center">
          <div>
            <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">The Loop</div>
            <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight mb-3.5">See. Capture. Act. Repeat.</h2>
            <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7] mt-3.5">
              Facebook built engagement graphs. Amazon built recommendation engines. Netflix built retention systems. In Web2, that&apos;s three companies with three data silos. BlockSight unifies all three on-chain — and Engagent closes the loop by acting on the intelligence autonomously.
            </p>
          </div>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={i} className={`relative pl-7 py-6 border-l-2 ${step.color === 'green' ? 'border-green' : 'border-line'}`}>
                {/* Dot */}
                <div className={`absolute left-[-7px] top-7 w-3 h-3 rounded-full border-2 ${dotColors[step.color]}`} />
                <div className="font-mono text-[10px] tracking-[1.5px] text-muted mb-1.5">{step.num}</div>
                <h4 className="text-[15px] font-semibold mb-1">{step.title}</h4>
                <p className="text-[13px] text-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
