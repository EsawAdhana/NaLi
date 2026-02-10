import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <a href="#" className="navbar__logo">
                    Na<span className="navbar__logo-accent">Li</span>
                </a>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    <a href="#platform" className="navbar__link" onClick={() => setMobileOpen(false)}>Platform</a>
                    <a href="#data-sources" className="navbar__link" onClick={() => setMobileOpen(false)}>Data Sources</a>
                    <a href="#compliance" className="navbar__link" onClick={() => setMobileOpen(false)}>Compliance (SBS)</a>
                    <a href="#docs" className="navbar__link" onClick={() => setMobileOpen(false)}>Documentation</a>
                </div>

                <div className="navbar__actions">
                    <a href="#demo" className="navbar__login">Login</a>
                    <a href="#demo" className="btn btn-primary navbar__cta">Get API Keys</a>
                </div>

                <button
                    className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
