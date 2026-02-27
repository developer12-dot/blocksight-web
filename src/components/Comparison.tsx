const rows = [
  { cap: 'Multi-chain token payments', analytics: '—', payments: '✓', bs: '✓' },
  { cap: 'Behavioral profiling', analytics: 'Basic', payments: '—', bs: '✓' },
  { cap: 'Predictive churn modeling', analytics: '—', payments: '—', bs: '✓ 95%' },
  { cap: 'Next-purchase prediction', analytics: '—', payments: '—', bs: '✓' },
  { cap: 'On-chain credit scoring', analytics: '—', payments: '—', bs: '✓' },
  { cap: 'Automated retention actions', analytics: '—', payments: '—', bs: '✓ Engagent' },
  { cap: 'AI-driven incentive targeting', analytics: '—', payments: '—', bs: '✓ Engagent' },
  { cap: 'Composable API + NLP queries', analytics: '—', payments: 'Basic', bs: '✓ Full' },
  { cap: 'Closed-loop intelligence', analytics: '—', payments: '—', bs: '✓' },
]

function Cell({ val, highlight }: { val: string; highlight?: boolean }) {
  const isCheck = val.startsWith('✓')
  const isDash = val === '—'
  return (
    <td className={`px-6 py-3.5 text-[13px] border-b border-line bg-bg-elevated ${highlight ? 'text-heading font-medium' : 'text-body'}`}>
      {isCheck ? <span className="text-green">{val}</span> : isDash ? <span className="text-muted">—</span> : val}
    </td>
  )
}

export default function Comparison() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="comparison">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Why BlockSight + Engagent</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px] mb-3.5">Others analyze. We act.</h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            Analytics tools show you what happened. Payment processors move tokens. Only BlockSight + Engagent predicts what&apos;s next and acts on it autonomously.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-line rounded-xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted bg-bg border-b border-line">Capability</th>
                <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted bg-bg border-b border-line">Analytics Tools</th>
                <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted bg-bg border-b border-line">Payment Processors</th>
                <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-green bg-bg border-b border-line">BlockSight + Engagent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="px-6 py-3.5 text-[13px] font-semibold text-heading border-b border-line bg-bg-elevated">{r.cap}</td>
                  <Cell val={r.analytics} />
                  <Cell val={r.payments} />
                  <Cell val={r.bs} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
