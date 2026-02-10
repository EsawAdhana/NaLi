import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer" id="docs">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            Na<span className="footer__logo-accent">Li</span>
                        </a>
                        <p className="footer__tagline">Credit Decisioning Infrastructure for LATAM.</p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__col">
                            <h4 className="footer__col-title">Product</h4>
                            <a href="#platform" className="footer__link">Platform</a>
                            <a href="#" className="footer__link">API Documentation</a>
                            <a href="#" className="footer__link">Data Sources</a>
                            <a href="#" className="footer__link">Pricing</a>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Company</h4>
                            <a href="#" className="footer__link">About</a>
                            <a href="#" className="footer__link">Careers</a>
                            <a href="#" className="footer__link">Blog</a>
                            <a href="#" className="footer__link">Contact</a>
                        </div>
                        <div className="footer__col">
                            <h4 className="footer__col-title">Legal</h4>
                            <a href="#" className="footer__link">Security Standards</a>
                            <a href="#" className="footer__link">Privacy Policy</a>
                            <a href="#" className="footer__link">Terms of Service</a>
                            <a href="#" className="footer__link">SBS Compliance</a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">© 2026 NaLi. All rights reserved.</p>
                    <p className="footer__location">Stanford, CA / Lima, Peru</p>
                </div>
            </div>
        </footer>
    )
}
