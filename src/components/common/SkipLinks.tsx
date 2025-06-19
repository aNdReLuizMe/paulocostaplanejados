export function SkipLinks(): JSX.Element {
    return (
        <div className="skip-links">
            <a 
                href="#main-content" 
                className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
            >
                Pular para o conteúdo principal
            </a>
            <a 
                href="#navigation" 
                className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-36 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
            >
                Pular para a navegação
            </a>
        </div>
    );
} 