import './SocialProof.css'

const partners = [
    'Banco Pichincha',
    'Krealo (Credicorp)',
    'Nubank (Advisors)',
    'Lumni',
    'Motiv Perú',
]

export default function SocialProof() {
    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof__header">Backed By & Building With</p>
                <div className="social-proof__logos">
                    {partners.map((name) => (
                        <div key={name} className="social-proof__logo">
                            <span className="social-proof__logo-text">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
