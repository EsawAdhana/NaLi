import './HowItWorks.css'

export default function HowItWorks() {
    return (
        <section className="how-it-works section">
            <div className="container">
                <div className="section-header animate-in">
                    <h2>Underwriting Behavior, Not Just Documents.</h2>
                    <p>We aggregate fragmented signals and translate them into a standardized 300–900 score.</p>
                </div>

                <div className="hiw__flow animate-in">
                    {/* INPUT */}
                    <div className="hiw__stage hiw__stage--input">
                        <div className="hiw__stage-label">Input</div>
                        <div className="hiw__stage-title">Raw Signals</div>
                        <div className="hiw__signals">
                            <div className="hiw__signal">
                                <div className="hiw__signal-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.5" />
                                        <circle cx="6" cy="15" r="1.5" fill="currentColor" />
                                    </svg>
                                </div>
                                <span>Yape / Plin</span>
                                <span className="hiw__signal-sub">Digital Wallets</span>
                            </div>
                            <div className="hiw__signal">
                                <div className="hiw__signal-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="12" cy="7" r="1" fill="currentColor" />
                                    </svg>
                                </div>
                                <span>Telco APIs</span>
                                <span className="hiw__signal-sub">Movistar / Claro</span>
                            </div>
                            <div className="hiw__signal">
                                <div className="hiw__signal-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Utility Scrapers</span>
                                <span className="hiw__signal-sub">Electricity / Water</span>
                            </div>
                            <div className="hiw__signal">
                                <div className="hiw__signal-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M3 9h18M7 13h4M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span>RENIEC</span>
                                <span className="hiw__signal-sub">Identity</span>
                            </div>
                        </div>
                        <p className="hiw__stage-desc">Real-time cash flow and payment history from across LATAM.</p>
                    </div>

                    {/* CONNECTOR */}
                    <div className="hiw__connector">
                        <div className="hiw__connector-line"></div>
                        <div className="hiw__connector-dot"></div>
                        <div className="hiw__connector-line"></div>
                    </div>

                    {/* PROCESSING */}
                    <div className="hiw__stage hiw__stage--process">
                        <div className="hiw__stage-label">Processing</div>
                        <div className="hiw__stage-title">The Model</div>
                        <div className="hiw__engine">
                            <div className="hiw__engine-box">
                                <div className="hiw__engine-wireframe">
                                    <div className="hiw__engine-nodes">
                                        <span></span><span></span><span></span>
                                        <span></span><span></span><span></span>
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                                <div className="hiw__engine-label">Linear Regression Engine</div>
                            </div>
                            <ul className="hiw__features">
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    Income Volatility Normalization
                                </li>
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    Device Identity Stability
                                </li>
                                <li>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    Social Trust Network Scoring
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CONNECTOR */}
                    <div className="hiw__connector">
                        <div className="hiw__connector-line"></div>
                        <div className="hiw__connector-dot"></div>
                        <div className="hiw__connector-line"></div>
                    </div>

                    {/* OUTPUT */}
                    <div className="hiw__stage hiw__stage--output">
                        <div className="hiw__stage-label">Output</div>
                        <div className="hiw__stage-title">Bureau-Grade Decision</div>
                        <div className="hiw__scorecard">
                            <div className="hiw__score-ring">
                                <svg viewBox="0 0 120 120" className="hiw__score-svg">
                                    <circle cx="60" cy="60" r="52" stroke="rgba(10,25,47,0.08)" strokeWidth="8" fill="none" />
                                    <circle cx="60" cy="60" r="52" stroke="var(--color-teal)" strokeWidth="8" fill="none"
                                        strokeDasharray="326.73"
                                        strokeDashoffset="90"
                                        strokeLinecap="round"
                                        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                                    />
                                </svg>
                                <div className="hiw__score-value">720</div>
                            </div>
                            <div className="hiw__score-meta">
                                <span className="hiw__score-tier">Low Risk</span>
                                <span className="hiw__score-range">300 – 900 Scale</span>
                            </div>
                        </div>
                        <p className="hiw__stage-desc">Bureau-aligned score with full regulatory explainability.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
