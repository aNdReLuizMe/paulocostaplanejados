"use client";
import { Carousel } from "flowbite-react";

import Image18 from "../../assets/images/carousel/Image (18).jpeg";
import Image28 from "../../assets/images/carousel/Image (28).jpeg";
import Image32 from "../../assets/images/carousel/Image (32).jpeg";
import Image37 from "../../assets/images/carousel/Image (37).jpeg";
import Image45 from "../../assets/images/carousel/Image (45).jpeg";
import Image49 from "../../assets/images/carousel/Image (49).jpeg";
import Image58 from "../../assets/images/carousel/Image (58).jpeg";
import Image60 from "../../assets/images/carousel/Image (60).jpeg";
import Image8 from "../../assets/images/carousel/Image (8).jpeg";

export function CarouselApp() {
    const images = [
        { src: Image18, alt: "Cozinha planejada moderna - móveis sob medida em madeira premium" },
        { src: Image8, alt: "Dormitório planejado completo - guarda-roupa e móveis personalizados" },
        { src: Image28, alt: "Sala planejada com estante e rack personalizados - acabamento de qualidade" },
        { src: Image32, alt: "Escritório planejado - mesa de trabalho e estantes sob medida" },
        { src: Image37, alt: "Área de serviço planejada - organização e funcionalidade" },
        { src: Image45, alt: "Closet planejado personalizado - máxima organização e estilo" },
        { src: Image49, alt: "Banheiro planejado - armários sob medida e acabamento premium" },
        { src: Image58, alt: "Móveis planejados para ambiente corporativo - elegância e funcionalidade" },
        { src: Image60, alt: "Projeto personalizado Paulo Costa Planejados - qualidade e design" }
    ];

    return (
        <div className="h-full w-full">
            <Carousel
                pauseOnHover
                className="h-full w-full"
                slideInterval={4000}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex items-center justify-center bg-gray-800">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="max-h-full max-w-full h-auto w-auto object-contain p-1 sm:p-2"
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
