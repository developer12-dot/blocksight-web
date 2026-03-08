const layers = [
  {
    num: '01',
    label: 'Ingestion',
    title: 'Behavior & Commerce Data Infrastructure',
    desc: 'Continuous ingestion from on-chain engagement activity and payment widget checkouts. Normalized into a unified behavioral schema across 6+ chains.',
    tags: ['6+ EVM Chains', 'Real-Time Streaming', '120M+ Wallets', 'Payment Widget Data'],
    highlight: false,
  },
  {
    num: '02',
    label: 'Inference',
    title: 'Multi-Task Prediction Engine',
    desc: 'Shared behavioral encoder branching into two prediction heads — churn (LSTM + GNN + XGBoost, 0.89 AUC-ROC) and purchase (collaborative filtering + sequence model). Multi-task learning where each product improves the other.',
    tags: ['95% Accuracy', 'Multi-Task Learning', 'Churn + Purchase', 'Shared Embeddings'],
    highlight: false,
  },
  {
    num: '03',
    label: 'Action',
    title: 'Engagent — Autonomous Engagement Layer',
    desc: "Predictions flow into Engagent's decision engine. The AI agent evaluates risk scores, purchase probabilities, and behavioral segments — then autonomously triggers the right engagement action for each wallet.",
    tags: ['Retention Workflows', 'Incentive Targeting', 'Recommendations', 'Composable API'],
    highlight: true,
  },
]

export default function Technology() {
  return (
    <section className="relative py-28 bg-bg-elevated" id="technology">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">
        <div className="mb-14">
          <div className="font-mono text-[11px] font-medium tracking-[2.5px] uppercase text-muted mb-3.5">Technology</div>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-normal leading-[1.18] tracking-tight max-w-[620px] mb-3.5">
            NASA-Heritage AI Applied to On-Chain Behavior
          </h2>
          <p className="text-[15px] font-light text-body max-w-[540px] leading-[1.7]">
            Our Chief Scientist Dr. Petrus C. Martens spent 30+ years building predictive ML systems for NASA&apos;s Artemis program. The same longitudinal modeling techniques now power wallet behavior prediction.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {layers.map((layer, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-[128px_1fr] border rounded-xl overflow-hidden transition-colors hover:border-accent/20 ${
                layer.highlight ? 'border-green/20' : 'border-line'
              }`}
            >
              {/* Side label */}
              <div className={`p-8 md:p-6 border-b md:border-b-0 md:border-r border-line flex md:flex-col justify-center ${
                layer.highlight ? 'bg-green/[0.03]' : 'bg-bg-elevated'
              }`}>
                <div className={`font-mono text-[22px] font-semibold mr-2.5 md:mr-0 md:mb-0.5 ${layer.highlight ? 'text-green' : 'text-accent'}`}>{layer.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted font-medium">{layer.label}</div>
              </div>

              {/* Content */}
              <div className="p-8 bg-bg-surface">
                <h3 className="text-[15.5px] font-semibold mb-2">{layer.title}</h3>
                <p className="text-[13.5px] text-body leading-[1.7] mb-4 max-w-[580px]">{layer.desc}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {layer.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] font-medium px-3 py-1 border border-line rounded text-body bg-bg-elevated">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
