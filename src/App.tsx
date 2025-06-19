import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/Hero'
import { Location } from './components/sections/Location'
import { NavbarApp } from './components/sections/Navbar'
import { Portfolio } from './components/sections/Portfolio'

function App(): JSX.Element {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavbarApp />
            <main className="flex-grow">
                <section id="home" className="h-screen">
                    <Hero />
                </section>
                <section id="about" className="h-screen">
                    <AboutUs />
                </section>
                <section id="portfolio" className="h-screen">
                    <Portfolio />
                </section>
                <section id="location" className="h-screen">
                    <Location />
                </section>
            </main>
        </div>
    )
}

export default App
