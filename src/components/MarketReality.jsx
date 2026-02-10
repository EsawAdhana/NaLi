import './MarketReality.css'

const stats = [
    {
        stat: '$400B+',
        label: 'SME Credit Gap in LATAM',
        context: 'Millions of SMEs have cash flow but no credit file. The demand is real; the signal is missing.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L2 9v10l12 7 12-7V9L14 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M2 9l12 7 12-7M14 26V16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        stat: '70%',
        label: 'Informal Workforce',
        context: 'In Peru alone, 70% of the workforce is informal. They earn and spend, but banks cannot see it.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="21" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M26 24c0-3.3-2.7-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        stat: '60%',
        label: 'Legacy IT Spend',
        context: 'Of bank IT budgets go to maintaining legacy cores. NaLi integrates without requiring a core system replacement.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 24h12M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 12h4M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
]

export default function MarketReality() {
    return (
        <section className="market section" id="data-sources">
            <div className="container">
                <div className="section-header animate-in">
                    <div className="tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                        <span className="hero__tag-dot" style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: 'var(--color-teal)', animation: 'pulse 2s ease-in-out infinite'
                        }}></span>
                        Market Data
                    </div>
                    <h2>The Market Reality</h2>
                    <p>Data-driven urgency for institutional-grade credit infrastructure.</p>
                </div>

                <div className="market__grid">
                    {stats.map((item, i) => (
                        <div key={i} className="market__card card animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
                            <div className="market__icon">{item.icon}</div>
                            <div className="market__stat">{item.stat}</div>
                            <div className="market__label">{item.label}</div>
                            <p className="market__context">{item.context}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
