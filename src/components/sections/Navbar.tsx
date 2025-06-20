"use client";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

import LogoClaro from "../../assets/images/logo/logo_claro_pcPlanejados-HQ.png";
import LogoEscuro from "../../assets/images/logo/logo_escuro_pcPlanejados-HQ.png";

export function NavbarApp(): JSX.Element {
    const [activeSection, setActiveSection] = useState<string>('home');
    const { theme, toggleTheme } = useTheme();

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
        <Navbar className="h-20 shadow-lg fixed top-0 w-full z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
            {/* Mobile Layout */}
            <div className="lg:hidden flex items-center justify-between w-full px-4 py-4">
                <div className="flex items-center ml-10">
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="focus:outline-none border-none bg-transparent p-0 m-0"
                        style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                        aria-label="Voltar ao topo da página"
                    >
                        <img
                            className="h-8 transform scale-[6]"
                            src={theme === 'dark' ? LogoEscuro : LogoClaro}
                            alt="Paulo Costa Planejados - Logo"
                        />
                    </button>
                </div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                    aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                    title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                >
                    {theme === 'light' ? (
                        <svg 
                            className="w-5 h-5 text-gray-600 dark:text-gray-300" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        <svg 
                            className="w-5 h-5 text-yellow-500" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
                <Navbar.Brand className="flex items-center justify-center">
                    <img
                        className="h-8 sm:h-10 md:h-12 transform scale-[6] flex items-center justify-center mt-3"
                        src={theme === 'dark' ? LogoEscuro : LogoClaro}
                        alt="Paulo Costa Planejados - Logo"
                    />
                </Navbar.Brand>
                
                <Navbar.Toggle className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" />
                
                <Navbar.Collapse>
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}
                        className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : ''
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
                        className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : ''
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
                        className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'portfolio' ? 'text-blue-600 dark:text-blue-400' : ''
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
                        className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 py-2 px-3 relative group ${
                            activeSection === 'location' ? 'text-blue-600 dark:text-blue-400' : ''
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

                    {/* Botão de alternância de tema */}
                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                        aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                        title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
                    >
                        {theme === 'light' ? (
                            // Ícone de lua para modo escuro
                            <svg 
                                className="w-5 h-5 text-gray-600 dark:text-gray-300" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        ) : (
                            // Ícone de sol para modo claro
                            <svg 
                                className="w-5 h-5 text-yellow-500" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                        )}
                    </button>

                </div>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
