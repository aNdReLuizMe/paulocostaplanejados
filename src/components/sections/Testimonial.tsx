"use client";

import { Blockquote } from "flowbite-react";

export function TestimonialApp() {
    return (
        <figure className="text-center px-4 sm:px-6">
            <div className="flex justify-center mb-4 sm:mb-6">
                <svg
                    className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400 dark:text-gray-500 transition-colors duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
            </div>
            <Blockquote className="mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl font-medium italic text-gray-900 dark:text-gray-100 leading-relaxed transition-colors duration-300">
                    "Desenvolvemos soluções personalizadas em móveis planejados para qualquer tipo de ambiente. 
                    Basta compartilhar sua visão conosco, e transformaremos seu desejo em realidade com 
                    qualidade e preços justos."
                </p>
            </Blockquote>
            <figcaption className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="flex flex-col sm:flex-row items-center sm:divide-x-2 divide-gray-500 dark:divide-gray-400">
                    <cite className="font-semibold text-gray-900 dark:text-gray-100 text-base sm:text-lg sm:pr-3 transition-colors duration-300">Paulo Costa</cite>
                </div>
            </figcaption>
            

        </figure>
    );
}
