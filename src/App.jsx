import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import MarketReality from './components/MarketReality'
import HowItWorks from './components/HowItWorks'
import TechnicalDeepDive from './components/TechnicalDeepDive'
import UseCases from './components/UseCases'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )

        document.querySelectorAll('.animate-in').forEach((el) => {
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <MarketReality />
                <HowItWorks />
                <TechnicalDeepDive />
                <UseCases />
            </main>
            <Footer />
        </>
    )
}

export default App
