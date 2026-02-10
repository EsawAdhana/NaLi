import './Hero.css'

const codeHtml = `<span class="code-comment">// POST /v1/decision/score</span>
{
  <span class="code-key">"applicant_id"</span>: <span class="code-string">"dni_728491"</span>,
  <span class="code-key">"signals"</span>: [
    <span class="code-string">"yape_velocity"</span>,
    <span class="code-string">"movistar_history"</span>,
    <span class="code-string">"reniec_valid"</span>
  ]
}

<span class="code-comment">// RESPONSE (200 OK)</span>
{
  <span class="code-key">"nali_score"</span>: <span class="code-number">785</span>,
  <span class="code-key">"risk_tier"</span>: <span class="code-string">"Low"</span>,
  <span class="code-key">"recommendation"</span>: <span class="code-teal">"APPROVE"</span>,
  <span class="code-key">"explainability"</span>: {
    <span class="code-key">"income_volatility"</span>: <span class="code-string">"Stable"</span>,
    <span class="code-key">"wallet_consistency"</span>: <span class="code-string">"High"</span>
  }
}`

export default function Hero() {
    return (
        <section className="hero" id="platform">
            <div className="container hero__inner">
                <div className="hero__content">
                    <div className="hero__tag tag">
                        <span className="hero__tag-dot"></span>
                        Infrastructure API
                    </div>
                    <h1 className="hero__title">
                        The Credit Decisioning Layer for LATAM's Informal Economy.
                    </h1>
                    <p className="hero__subtitle">
                        Turn informal behavior—digital wallets, utilities, and telco usage—into bureau-grade credit scores. We enable banks to underwrite the 260 million unbanked workers in Latin America with explainable, regulator-safe models.
                    </p>
                    <div className="hero__actions">
                        <a href="#demo" className="btn btn-primary">
                            Book a Demo
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__code-window">
                        <div className="hero__code-header">
                            <div className="hero__code-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className="hero__code-filename">decision_api.json</span>
                            <span className="hero__code-badge">LIVE</span>
                        </div>
                        <pre className="hero__code-body"><code dangerouslySetInnerHTML={{ __html: codeHtml }} /></pre>
                        <div className="hero__code-cursor"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="hero__glow hero__glow--1"></div>
                    <div className="hero__glow hero__glow--2"></div>
                </div>
            </div>

            {/* Subtle grid background */}
            <div className="hero__grid-bg"></div>
        </section>
    )
}
