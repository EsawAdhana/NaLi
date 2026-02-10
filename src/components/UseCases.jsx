import './UseCases.css'

const cases = [
    {
        audience: 'For Banks',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 28h24M16 4l12 8H4l12-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8 12v12M14 12v12M18 12v12M24 12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        copy: "Acquire customers from the 'invisible' 70% of the market without lowering credit standards.",
    },
    {
        audience: 'For MFIs',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 10v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        copy: 'Automate manual underwriting to lower operational costs per loan.',
    },
    {
        audience: 'For Fintechs',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="22" cy="21" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        copy: 'Embed instant credit decisioning into neobank apps.',
    },
]

export default function UseCases() {
    return (
        <section className="use-cases section">
            <div className="container">
                <div className="section-header animate-in">
                    <h2>Built for Your Use Case</h2>
                    <p>One API. Multiple deployment models.</p>
                </div>

                <div className="use-cases__grid">
                    {cases.map((c, i) => (
                        <div key={i} className="use-cases__card card animate-in">
                            <div className="use-cases__icon">{c.icon}</div>
                            <h3 className="use-cases__audience">{c.audience}</h3>
                            <p className="use-cases__copy">{c.copy}</p>
                            <a href="#demo" className="use-cases__link">
                                Learn more
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
