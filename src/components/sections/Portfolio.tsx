"use client";

import LightGallery from 'lightgallery/react';
import { useAnalytics } from '../common/SEOHead';

// Importando estilos necessários do lightgallery
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';

// Importando plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Importe suas imagens aqui
import Image2 from "../../assets/images/carousel/Image (2).jpeg";
import Image31 from "../../assets/images/carousel/Image (31).jpeg";
import Image37 from "../../assets/images/carousel/Image (37).jpeg";
import Image40 from "../../assets/images/carousel/Image (40).jpeg";
import Image46 from "../../assets/images/carousel/Image (46).jpeg";
import Image51 from "../../assets/images/carousel/Image (51).jpeg";
import Image54 from "../../assets/images/carousel/Image (54).jpeg";
import Image61 from "../../assets/images/carousel/Image (61).jpeg";

interface PortfolioImage {
    src: string;
    thumb: string;
    alt: string;
    category: string;
    description: string;
}

export function Portfolio(): JSX.Element {
    const { trackPortfolioView, trackEvent } = useAnalytics();

    const images: PortfolioImage[] = [
        {
            src: Image54,
            thumb: Image54,
            alt: 'Cozinha Planejada - Móveis sob medida Paulo Costa',
            category: 'cozinha',
            description: 'Cozinha planejada com bancada em granito e armários em MDF'
        },
        {
            src: Image2,
            thumb: Image2,
            alt: 'Dormitório Planejado - Guarda-roupa personalizado Paulo Costa',
            category: 'dormitorio',
            description: 'Dormitório completo com guarda-roupa, criado-mudo e cabeceira planejados'
        },
        {
            src: Image31,
            thumb: Image31,
            alt: 'Escritório Planejado - Mesa e estantes Paulo Costa',
            category: 'escritorio',
            description: 'Home office funcional com mesa, estantes e gavetas planejadas'
        },
        {
            src: Image37,
            thumb: Image37,
            alt: 'Sala Planejada - Estante e rack Paulo Costa',
            category: 'sala',
            description: 'Sala de estar com rack e estante para TV sob medida'
        },
        {
            src: Image40,
            thumb: Image40,
            alt: 'Banheiro Planejado - Armário sob medida Paulo Costa',
            category: 'banheiro',
            description: 'Banheiro planejado com armário e espelheira personalizados'
        },
        {
            src: Image46,
            thumb: Image46,
            alt: 'Área de Serviço Planejada Paulo Costa',
            category: 'area-servico',
            description: 'Área de serviço otimizada com armários e tanque planejados'
        },
        {
            src: Image51,
            thumb: Image51,
            alt: 'Closet Planejado - Organização personalizada Paulo Costa',
            category: 'closet',
            description: 'Closet planejado com sistema de organização completo'
        },
        {
            src: Image61,
            thumb: Image61,
            alt: 'Móveis Planejados - Acabamento premium Paulo Costa',
            category: 'premium',
            description: 'Móveis planejados com acabamento premium e detalhes únicos'
        },
    ];

    const handleImageClick = (index: number, image: PortfolioImage) => {
        // Track portfolio viewing
        trackPortfolioView(index);

        // Track specific category
        trackEvent('portfolio_interaction', {
            event_category: 'engagement',
            event_label: `portfolio_${image.category}`,
            image_index: index,
            image_alt: image.alt
        });

        // Enhanced ecommerce tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'select_content', {
                content_type: 'portfolio_image',
                content_id: `portfolio_${index}_${image.category}`,
                items: [{
                    item_id: `portfolio_${index}`,
                    item_name: image.alt,
                    item_category: image.category,
                    index: index
                }]
            });
        }
    };

    // Schema.org para imagens do portfolio
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Portfólio Paulo Costa Planejados",
        "description": "Galeria de projetos realizados em móveis planejados",
        "creator": {
            "@type": "LocalBusiness",
            "name": "Paulo Costa Planejados",
            "url": "https://aNdReLuizMe.github.io/paulocostaplanejados/"
        },
        "image": images.map((img, index) => ({
            "@type": "ImageObject",
            "contentUrl": img.src,
            "thumbnailUrl": img.thumb,
            "name": img.alt,
            "description": img.description,
            "caption": img.alt,
            "creator": {
                "@type": "Organization",
                "name": "Paulo Costa Planejados"
            },
            "copyrightHolder": {
                "@type": "Organization",
                "name": "Paulo Costa Planejados"
            },
            "keywords": `móveis planejados, ${img.category}, três lagoas, ms`
        }))
    };

    return (
        <div className="h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
                {/* Heading principal para SEO */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                        Conheça alguns dos nossos projetos realizados
                    </h2>
                </div>

                {/* Gallery de Imagens com analytics */}
                <div className="flex justify-center mb-8 sm:mb-10">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl"
                        onAfterSlide={(detail) => {
                            // Track gallery navigation
                            trackEvent('gallery_navigation', {
                                event_category: 'engagement',
                                slide_index: detail.index
                            });
                        }}
                    >
                        {images.map((image, index) => (
                            <a
                                key={index}
                                data-lg-size="1400-1400"
                                className="gallery-item overflow-hidden rounded-lg shadow-lg dark:shadow-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-600 group"
                                href={image.src}
                                onClick={() => handleImageClick(index, image)}
                                aria-label={`Ver detalhes: ${image.alt}`}
                                title={image.description}
                            >
                                <div className="relative">
                                    <img
                                        alt={image.alt}
                                        src={image.thumb}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                                        loading="lazy"
                                        decoding="async"
                                        width="400"
                                        height="300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                            🔍 Ver Detalhes
                                        </span>
                                    </div>
                                    {/* Badge da categoria */}
                                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </LightGallery>
                </div>

                {/* Call-to-action */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4">
                        <strong>Gostou do que viu?</strong>
                    </p>
                    <a
                        href="https://wa.me/5567991146889?text=Olá! Vi o portfólio de vocês e gostaria de solicitar um orçamento para móveis planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                        onClick={() => trackEvent('portfolio_cta_click', {
                            event_category: 'conversion',
                            event_label: 'portfolio_whatsapp_cta'
                        })}
                    >
                        💬 Solicite Orçamento
                    </a>
                </div>
            </div>

            {/* Schema.org para o portfolio */}
            <script type="application/ld+json">
                {JSON.stringify(portfolioSchema)}
            </script>
        </div>
    );
}
