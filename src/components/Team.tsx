const team = [
  {
    initials: 'S',
    name: 'Stefano',
    role: 'Co-Founder · CTO',
    bio: '10 years in software engineering. Multiple bootstrapped products. Three years deep in blockchain development, smart contract architecture, and on-chain payment systems.',
  },
  {
    initials: 'DM',
    name: 'Devon Martens',
    role: 'Co-Founder · CEO',
    bio: 'Architected AI-driven trading engines managing $50M+ in liquidity. Led Studio Chain, a Layer 2 for adaptive game economies. Unites blockchain commerce, ML, and decentralized reasoning.',
  },
  {
    initials: 'PM',
    name: 'Dr. Petrus C. Martens',
    role: 'Co-Founder · Chief Scientist',
    bio: '20+ years of NASA- and NSF-funded research in machine learning, predictive modeling, and large-scale data infrastructure. Professor at Georgia State University.',
  },
]

export default function Team() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="team">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Team</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight mb-3.5">Operators and researchers</h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            Domain expertise across blockchain commerce, machine learning, and venture-scale product building.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border border-line rounded-xl overflow-hidden">
          {team.map((t, i) => (
            <div key={i} className={`p-8 bg-bg-elevated ${i < team.length - 1 ? 'border-b md:border-b-0 md:border-r border-line' : ''}`}>
              <div className="w-11 h-11 rounded-[10px] bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-[15px] font-semibold text-accent mb-5">
                {t.initials}
              </div>
              <h4 className="text-[15px] font-semibold mb-0.5">{t.name}</h4>
              <div className="text-xs text-accent font-medium mb-3.5">{t.role}</div>
              <p className="text-[13px] text-body leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
