import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/Hero'
import { Location } from './components/sections/Location'
import { NavbarApp } from './components/sections/Navbar'
import { Portfolio } from './components/sections/Portfolio'
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp'
import { SEOHead } from './components/common/SEOHead'
import { ThemeProvider } from './hooks/useTheme'
import { useEffect } from 'react'
import { initializeGA, initializeGTM } from './config/analytics'

function App(): JSX.Element {

    useEffect(() => {
        initializeGTM()
        initializeGA()
    }, []);

    return (
        <ThemeProvider>
            {/* SEO Head Component */}
            <SEOHead 
                title="Paulo Costa Planejados - Móveis Planejados em Três Lagoas - MS"
                description="Paulo Costa Planejados: 20 anos criando móveis planejados de qualidade em Três Lagoas/MS. Cozinhas, dormitórios, escritórios e muito mais. Orçamento gratuito! ⭐⭐⭐⭐⭐"
                keywords="móveis planejados três lagoas, móveis sob medida três lagoas, cozinha planejada três lagoas, marcenaria três lagoas ms, guarda roupa planejado"
                url="https://paulocostaplanejados.com.br/"
            />
            
            <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
                {/* Skip Links para acessibilidade */}
                <a 
                    href="#main-content" 
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
                    tabIndex={1}
                >
                    Pular para o conteúdo principal
                </a>
                
                {/* Header com navbar */}
                <header role="banner">
                    <NavbarApp />
                </header>
                
                {/* Main content */}
                <main 
                    id="main-content" 
                    className="flex-grow"
                    role="main"
                >
                    <section 
                        id="home" 
                        className="h-screen"
                        aria-labelledby="hero-heading"
                    >
                        <Hero />
                    </section>
                    
                    <section 
                        id="about" 
                        className="xl:h-screen min-h-screen"
                        aria-labelledby="about-heading"
                    >
                        <AboutUs />
                    </section>
                    
                    <section 
                        id="portfolio" 
                        className="xl:h-screen min-h-screen"
                        aria-labelledby="portfolio-heading"
                    >
                        <Portfolio />
                    </section>
                    
                    <section 
                        id="location" 
                        className="xl:h-screen min-h-screen"
                        aria-labelledby="location-heading"
                    >
                        <Location />
                    </section>
                </main>
                
                {/* Floating Contact */}
                <FloatingWhatsApp />
                
                {/* Schema.org para navegação */}
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "itemListElement": [
                        {
                            "@type": "SiteNavigationElement",
                            "position": 1,
                            "name": "Home",
                            "description": "Página inicial da Paulo Costa Planejados",
                            "url": "https://paulocostaplanejados.com.br/#home"
                        },
                        {
                            "@type": "SiteNavigationElement", 
                            "position": 2,
                            "name": "Sobre Nós",
                            "description": "Conheça nossa história e experiência em móveis planejados",
                            "url": "https://paulocostaplanejados.com.br/#about"
                        },
                        {
                            "@type": "SiteNavigationElement",
                            "position": 3, 
                            "name": "Portfólio",
                            "description": "Veja nossos trabalhos e projetos realizados",
                            "url": "https://paulocostaplanejados.com.br/#portfolio"
                        },
                        {
                            "@type": "SiteNavigationElement",
                            "position": 4,
                            "name": "Localização e Contato",
                            "description": "Encontre nossa loja e entre em contato",
                            "url": "https://paulocostaplanejados.com.br/#location"
                        }
                    ]
                })}
                </script>
            </div>
        </ThemeProvider>
    )
}

export default App
