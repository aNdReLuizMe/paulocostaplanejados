"use client";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from 'react';

import Logo from "../../assets/images/logo/pcplanejados_logo.png";

// Ícone do WhatsApp SVG
const WhatsAppIcon = () => (
    <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
    </svg>
);

export function NavbarApp(): JSX.Element {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Função para determinar a direção do hover baseado na seção ativa
    const getHoverDirection = (targetSection: string): string => {
        const sections = ['home', 'about', 'portfolio', 'location'];
        const activeIndex = sections.indexOf(activeSection);
        const targetIndex = sections.indexOf(targetSection);
        
        // Se for a mesma seção, não aplica hover
        if (activeIndex === targetIndex) return '';
        
        // Se o target está à direita da seção ativa = hover da esquerda para direita
        // Se o target está à esquerda da seção ativa = hover da direita para esquerda
        return targetIndex > activeIndex ? 'left-to-right' : 'right-to-left';
    };

    return (
        <Navbar className="h-20 shadow-lg fixed top-0 w-full z-50 bg-white flex items-center">
            <Navbar.Brand className="flex items-center">
                <img
                    className="h-8 sm:h-10 md:h-12"
                    src={Logo}
                    alt="Paulo Costa Planejados - Logo"
                />
            </Navbar.Brand>
            
            <Navbar.Toggle />
            
            <Navbar.Collapse>
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 relative group ${
                            activeSection === 'home' ? 'text-blue-600' : ''
                        }`}
                    >
                        Home
                        {activeSection === 'home' && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform transition-all duration-300"></span>
                        )}
                        {activeSection !== 'home' && (
                            <span className={`absolute bottom-0 w-0 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full ${
                                getHoverDirection('home') === 'left-to-right' ? 'left-0 group-hover:left-0' : 'right-0 group-hover:right-0'
                            }`}></span>
                        )}
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 relative group ${
                            activeSection === 'about' ? 'text-blue-600' : ''
                        }`}
                    >
                        Quem Somos
                        {activeSection === 'about' && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform transition-all duration-300"></span>
                        )}
                        {activeSection !== 'about' && (
                            <span className={`absolute bottom-0 w-0 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full ${
                                getHoverDirection('about') === 'left-to-right' ? 'left-0 group-hover:left-0' : 'right-0 group-hover:right-0'
                            }`}></span>
                        )}
                    </a>
                    <a
                        href="#portfolio"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('portfolio');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 relative group ${
                            activeSection === 'portfolio' ? 'text-blue-600' : ''
                        }`}
                    >
                        Nossos Trabalhos
                        {activeSection === 'portfolio' && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform transition-all duration-300"></span>
                        )}
                        {activeSection !== 'portfolio' && (
                            <span className={`absolute bottom-0 w-0 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full ${
                                getHoverDirection('portfolio') === 'left-to-right' ? 'left-0 group-hover:left-0' : 'right-0 group-hover:right-0'
                            }`}></span>
                        )}
                    </a>
                    <a
                        href="#location"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('location');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 relative group ${
                            activeSection === 'location' ? 'text-blue-600' : ''
                        }`}
                    >
                        Localização
                        {activeSection === 'location' && (
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full transform transition-all duration-300"></span>
                        )}
                        {activeSection !== 'location' && (
                            <span className={`absolute bottom-0 w-0 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full ${
                                getHoverDirection('location') === 'left-to-right' ? 'left-0 group-hover:left-0' : 'right-0 group-hover:right-0'
                            }`}></span>
                        )}
                    </a>
                    <a
                        href="https://wa.me/5567991146889"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center"
                        title="Fale conosco no WhatsApp"
                    >
                        <WhatsAppIcon />
                    </a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
