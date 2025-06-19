"use client";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from 'react';

import Logo from "../../assets/images/logo/pcplanejados_logo.png";


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
