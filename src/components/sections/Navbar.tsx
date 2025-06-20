"use client";
import { useTheme } from '../../hooks/useTheme';

import LogoClaro from "../../assets/images/logo/logo_claro_pcPlanejados-HQ.png";
import LogoEscuro from "../../assets/images/logo/logo_escuro_pcPlanejados-HQ.png";

export function NavbarApp(): JSX.Element {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="h-20 shadow-lg fixed top-0 w-full z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo com espaçamento da esquerda */}
                <div className="flex items-center ml-8 sm:ml-16 lg:ml-24">
                    <img
                        className="h-8 sm:h-10 md:h-12 transform scale-[6] flex items-center justify-center mt-3"
                        src={theme === 'dark' ? LogoEscuro : LogoClaro}
                        alt="Paulo Costa Planejados - Logo"
                    />
                </div>

                {/* Botão de alternância de tema */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
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
        </div>
    );
}
