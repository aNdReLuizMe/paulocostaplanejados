"use client";

import LightGallery from 'lightgallery/react';

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

export function Portfolio(): JSX.Element {
    const images = [
        { src: Image54, thumb: Image54, alt: 'Cozinha Planejada - Móveis sob medida' },
        { src: Image2, thumb: Image2, alt: 'Dormitório Planejado - Guarda-roupa personalizado' },
        { src: Image31, thumb: Image31, alt: 'Escritório Planejado - Mesa e estantes' },
        { src: Image37, thumb: Image37, alt: 'Sala Planejada - Estante e rack' },
        { src: Image40, thumb: Image40, alt: 'Banheiro Planejado - Armário sob medida' },
        { src: Image46, thumb: Image46, alt: 'Área de Serviço Planejada' },
        { src: Image51, thumb: Image51, alt: 'Closet Planejado - Organização personalizada' },
        { src: Image61, thumb: Image61, alt: 'Móveis Planejados - Acabamento premium' },
    ];

    return (
        <div className="h-full bg-gradient-to-b from-gray-50 to-white flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
                {/* Texto Descritivo */}
                <div className="text-center mb-8 sm:mb-10">
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Conheça alguns dos nossos projetos realizados com dedicação e qualidade.
                    </p>
                </div>

                {/* Gallery de Imagens */}
                <div className="flex justify-center mb-8 sm:mb-10">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl"
                    >
                        {images.map((image, index) => (
                            <a
                                key={index}
                                data-lg-size="1400-1400"
                                className="gallery-item overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                                href={image.src}
                            >
                                <div className="relative">
                                    <img
                                        alt={image.alt}
                                        src={image.thumb}
                                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                            Ver Detalhes
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </LightGallery>
                </div>

                {/* Botão Call to Action */}
                <div className="text-center">
                    <a
                        href="https://wa.me/5567991146889?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg text-sm whitespace-nowrap"
                    >
                        Faça um orçamento
                    </a>
                </div>
            </div>
        </div>
    );
}
