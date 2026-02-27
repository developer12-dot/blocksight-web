import { Building2, Activity, DollarSign, Landmark, Users, Zap } from 'lucide-react'

const cases = [
  { icon: Building2, title: 'Credit Infrastructure', desc: 'On-chain credit scoring and borrower evaluation beyond simple collateral ratios. Behavioral underwriting for lending protocols and RWA platforms.' },
  { icon: Activity, title: 'Commerce Intelligence', desc: 'Next-purchase prediction, buyer segmentation, and revenue forecasting for token-gated storefronts and decentralized marketplaces.' },
  { icon: DollarSign, title: 'Incentive Coordination', desc: 'Dynamic reward allocation for airdrops and liquidity mining based on behavioral contribution quality — not volume, not sybils. Powered by Engagent.' },
  { icon: Landmark, title: 'Institutional Crypto', desc: 'Counterparty assessment, yield product targeting, and compliance-enhanced analytics for institutional DeFi participants.' },
  { icon: Users, title: 'Retention Infrastructure', desc: 'Predictive attrition modeling with automated retention workflows. Engagent detects disengagement and acts — weeks before users become permanent churn.' },
  { icon: Zap, title: 'Agentic Commerce', desc: 'Reputation and service discovery layers for autonomous AI agent coordination. Behavioral intelligence powering the agent economy.' },
]

export default function Enterprise() {
  return (
    <section className="relative py-28" id="enterprise">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Enterprise Use Cases</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px]">
            Infrastructure for institutional participants
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="p-8 bg-bg-elevated border border-line rounded-2xl transition-all hover:border-accent/20 hover:-translate-y-0.5">
                <div className="w-10 h-10 mb-5 flex items-center justify-center text-muted">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-xl font-normal mb-3 tracking-tight leading-snug">{c.title}</h4>
                <p className="text-sm text-body leading-relaxed">{c.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
