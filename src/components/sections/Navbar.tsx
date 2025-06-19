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
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'home' ? 'text-blue-600' : ''
                        }`}
                    >
                        Home
                        {/* Linha ativa */}
                        {activeSection === 'home' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-300"></span>
                        )}
                        {/* Linha hover */}
                        {activeSection !== 'home' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 ease-out"></span>
                        )}
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'about' ? 'text-blue-600' : ''
                        }`}
                    >
                        Quem Somos
                        {/* Linha ativa */}
                        {activeSection === 'about' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-300"></span>
                        )}
                        {/* Linha hover */}
                        {activeSection !== 'about' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-300 ease-out"></span>
                        )}
                    </a>
                    <a
                        href="#portfolio"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('portfolio');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'portfolio' ? 'text-blue-600' : ''
                        }`}
                    >
                        Nossos Trabalhos
                        {/* Linha ativa */}
                        {activeSection === 'portfolio' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-300"></span>
                        )}
                        {/* Linha hover */}
                        {activeSection !== 'portfolio' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300 ease-out"></span>
                        )}
                    </a>
                    <a
                        href="#location"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('location');
                        }}
                        className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'location' ? 'text-blue-600' : ''
                        }`}
                    >
                        Localização
                        {/* Linha ativa */}
                        {activeSection === 'location' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full transition-all duration-300"></span>
                        )}
                        {/* Linha hover */}
                        {activeSection !== 'location' && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full transition-all duration-300 ease-out"></span>
                        )}
                    </a>

                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
