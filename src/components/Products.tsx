const products = [
  {
    badge: 'Intelligence',
    badgeClass: 'bg-violet/10 text-violet border-violet/20',
    title: 'Behavioral Analytics & Credit Scoring',
    desc: "Predictive churn modeling, behavioral profiling, on-chain credit scoring. The inference engine that understands who your users are and what they'll do next.",
    features: [
      'Churn prediction — 95% accuracy, 0.89 AUC-ROC',
      'Longitudinal behavioral profiling across protocols',
      'On-chain credit scoring beyond collateral ratios',
      'Natural language query engine',
    ],
    arrowColor: 'text-violet',
    btnClass: 'border-violet/20 text-violet hover:bg-violet/10',
    highlight: false,
  },
  {
    badge: 'Payments',
    badgeClass: 'bg-accent/10 text-accent border-accent/20',
    title: 'Commerce Widget & Purchase Intelligence',
    desc: 'Multi-chain checkout that captures purchase behavior and feeds it back into the prediction engine. Every payment becomes a signal.',
    features: [
      'Any ERC-20, native token, or stablecoin',
      'Next-purchase prediction via API',
      'Spend pattern clustering and affinity modeling',
      'Sub-3s settlement — already live in production',
    ],
    arrowColor: 'text-accent',
    btnClass: 'border-accent/20 text-accent hover:bg-accent/10',
    highlight: false,
  },
  {
    badge: 'Engagent',
    badgeClass: 'bg-green/10 text-green border-green/20',
    title: 'AI-Powered User Engagement Agent',
    desc: "The action layer. Engagent uses BlockSight's predictions to autonomously engage users — retaining the at-risk, converting the interested, and rewarding the loyal.",
    features: [
      'Automated retention workflows from churn signals',
      'Personalized incentive delivery and airdrop targeting',
      'Purchase recommendation surfacing via protocol UI',
      'Programmable triggers — composable into any dApp',
    ],
    arrowColor: 'text-green',
    btnClass: 'border-green/20 text-green hover:bg-green/10',
    highlight: true,
    isNew: true,
  },
]

export default function Products() {
  return (
    <section className="relative py-28" id="products">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Products</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px] mb-3.5">
            Three products. One behavioral engine. Full-stack intelligence.
          </h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            BlockSight sees. The payments widget captures. Engagent acts. Each product feeds the next. Accuracy compounds with every interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3.5">
          {products.map((prod, i) => (
            <div
              key={i}
              className={`flex flex-col p-8 rounded-xl border transition-colors ${
                prod.highlight
                  ? 'border-green/20 bg-gradient-to-b from-green/[0.03] to-bg-elevated hover:border-green'
                  : 'border-line bg-bg-elevated hover:border-accent/20'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-4">
                <span className={`font-mono text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded border ${prod.badgeClass}`}>
                  {prod.badge}
                </span>
                {prod.isNew && (
                  <span className="text-[8px] font-bold tracking-wider uppercase px-1.5 py-0.5 bg-green text-black rounded">NEW</span>
                )}
              </div>

              <h3 className="text-lg font-semibold mb-2.5 leading-snug">{prod.title}</h3>
              <p className="text-sm text-body leading-[1.7] mb-5">{prod.desc}</p>

              <div className="flex flex-col gap-2 mt-auto">
                {prod.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2 text-[13px] text-body leading-relaxed">
                    <span className={`font-bold shrink-0 mt-px ${prod.arrowColor}`}>→</span>
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 mt-5 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wide border bg-bg transition-all hover:-translate-y-px self-start ${prod.btnClass}`}
              >
                View Demo <span className="opacity-50">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
