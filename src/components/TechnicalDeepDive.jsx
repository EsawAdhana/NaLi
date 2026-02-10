import './TechnicalDeepDive.css'

const features = [
    {
        badge: '01',
        title: 'Explainable AI (No Black Boxes)',
        copy: "Regulators (SBS) require explainability. Unlike neural networks that obscure logic, NaLi uses rigorous Linear Regression. Every score is fully traceable to specific behavioral factors like 'Bill Payment Consistency' or 'Wallet Inflow Frequency'.",
        visual: (
            <div className="tdd__visual tdd__visual--explain">
                <div className="tdd__factor">
                    <div className="tdd__factor-bar" style={{ width: '85%' }}></div>
                    <div className="tdd__factor-row">
                        <span className="tdd__factor-name">Bill Payment Consistency</span>
                        <span className="tdd__factor-value">+82</span>
                    </div>
                </div>
                <div className="tdd__factor">
                    <div className="tdd__factor-bar" style={{ width: '72%' }}></div>
                    <div className="tdd__factor-row">
                        <span className="tdd__factor-name">Wallet Inflow Frequency</span>
                        <span className="tdd__factor-value">+67</span>
                    </div>
                </div>
                <div className="tdd__factor">
                    <div className="tdd__factor-bar" style={{ width: '60%' }}></div>
                    <div className="tdd__factor-row">
                        <span className="tdd__factor-name">Device Stability Score</span>
                        <span className="tdd__factor-value">+54</span>
                    </div>
                </div>
                <div className="tdd__factor">
                    <div className="tdd__factor-bar" style={{ width: '45%' }}></div>
                    <div className="tdd__factor-row">
                        <span className="tdd__factor-name">Social Network Trust</span>
                        <span className="tdd__factor-value">+38</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        badge: '02',
        title: 'Zero Integration Friction',
        copy: "Banks can't wait years for core modernization. NaLi acts as an orchestration layer, sitting on top of legacy systems (Mambu/Provenir) via simple REST APIs.",
        visual: (
            <div className="tdd__visual tdd__visual--integration">
                <div className="tdd__arch">
                    <div className="tdd__arch-layer tdd__arch-layer--top">
                        <span>Your App</span>
                    </div>
                    <div className="tdd__arch-arrow">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4v12M6 12l4 4 4-4" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--color-teal)' }}>REST API</span>
                    </div>
                    <div className="tdd__arch-layer tdd__arch-layer--nali">
                        <span>NaLi Layer</span>
                    </div>
                    <div className="tdd__arch-arrow">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4v12M6 12l4 4 4-4" stroke="var(--color-slate-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="tdd__arch-row">
                        <div className="tdd__arch-layer tdd__arch-layer--legacy">
                            <span>Mambu</span>
                        </div>
                        <div className="tdd__arch-layer tdd__arch-layer--legacy">
                            <span>Provenir</span>
                        </div>
                        <div className="tdd__arch-layer tdd__arch-layer--legacy">
                            <span>Core</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        badge: '03',
        title: "The 'Smoking Gun' Validation",
        copy: "We don't just model theory; we prove it. In our initial pilot cohorts funded by impact investors, NaLi-scored loans achieved a",
        highlight: '100% Repayment Rate',
        copyEnd: '.',
        visual: (
            <div className="tdd__visual tdd__visual--validation">
                <div className="tdd__repayment">
                    <div className="tdd__repayment-circle">
                        <svg viewBox="0 0 140 140" className="tdd__repayment-svg">
                            <circle cx="70" cy="70" r="62" stroke="rgba(10,25,47,0.06)" strokeWidth="10" fill="none" />
                            <circle cx="70" cy="70" r="62" stroke="var(--color-teal)" strokeWidth="10" fill="none"
                                strokeDasharray="389.56"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                            />
                        </svg>
                        <div className="tdd__repayment-text">
                            <span className="tdd__repayment-number">100%</span>
                            <span className="tdd__repayment-label">Repayment</span>
                        </div>
                    </div>
                    <div className="tdd__repayment-meta">
                        <span>Pilot Cohort</span>
                        <span>Impact-funded</span>
                    </div>
                </div>
            </div>
        ),
    },
]

export default function TechnicalDeepDive() {
    return (
        <section className="tdd section" id="compliance">
            <div className="container">
                <div className="section-header animate-in">
                    <div className="tag" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                        <span style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: 'var(--color-teal)', animation: 'pulse 2s ease-in-out infinite'
                        }}></span>
                        Technical
                    </div>
                    <h2>Built for Risk Officers & Regulators.</h2>
                </div>

                <div className="tdd__features">
                    {features.map((f, i) => (
                        <div key={i} className={`tdd__feature animate-in ${i % 2 === 1 ? 'tdd__feature--reverse' : ''}`}>
                            <div className="tdd__feature-content">
                                <span className="tdd__badge font-mono">{f.badge}</span>
                                <h3 className="tdd__feature-title">{f.title}</h3>
                                <p className="tdd__feature-copy">
                                    {f.copy}
                                    {f.highlight && (
                                        <> <span className="tdd__highlight">{f.highlight}</span>{f.copyEnd}</>
                                    )}
                                </p>
                            </div>
                            <div className="tdd__feature-visual">
                                {f.visual}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
