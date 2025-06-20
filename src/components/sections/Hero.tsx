"use client";

import { CarouselApp } from "./Carousel";
import { TestimonialApp } from "./Testimonial";

export function Hero(): JSX.Element {
    return (
        <div className="relative w-full h-full pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="w-full h-64 sm:h-96 lg:h-full bg-gray-800 dark:bg-gray-700 order-2 lg:order-1">
                    <CarouselApp />
                </div>
                <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 order-1 lg:order-2 bg-white dark:bg-gray-900">
                    <div className="max-w-2xl mx-auto w-full">
                        <TestimonialApp />
                    </div>
                </div>
            </div>
        </div>
    );
}
