import './Team.css'

const team = [
    {
        name: 'Marina Arriola',
        role: 'Co-Founder',
        bio: 'Ex-JP Morgan. Deep expertise in venture, policy, and underwriting.',
        initials: 'MA',
    },
    {
        name: 'Romina Jately',
        role: 'Co-Founder',
        bio: 'Ex-Microsoft PM. Product design and prior funded founder.',
        initials: 'RJ',
    },
]

export default function Team() {
    return (
        <section className="team section">
            <div className="container">
                <div className="section-header animate-in">
                    <h2>Built by Industry Insiders.</h2>
                </div>

                <div className="team__grid">
                    {team.map((member, i) => (
                        <div key={i} className="team__card card animate-in">
                            <div className="team__avatar">
                                <span>{member.initials}</span>
                            </div>
                            <div className="team__info">
                                <h3 className="team__name">{member.name}</h3>
                                <span className="team__role">{member.role}</span>
                                <p className="team__bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="team__advisory animate-in">
                    <div className="team__advisory-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6-4.9 2.6.9-5.3-4-3.9 5.5-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p>Advised by leaders from <strong>Nubank</strong> and <strong>Credicorp</strong>.</p>
                </div>
            </div>
        </section>
    )
}
