import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

export function SEOHead({
  title = "Paulo Costa Planejados - Móveis Planejados em Três Lagoas/MS | 20 Anos de Experiência",
  description = "Paulo Costa Planejados: 20 anos criando móveis planejados de qualidade em Três Lagoas/MS. Cozinhas, dormitórios, escritórios e muito mais. Orçamento gratuito! ⭐⭐⭐⭐⭐",
  keywords = "móveis planejados três lagoas, móveis sob medida três lagoas, cozinha planejada três lagoas, marcenaria três lagoas ms, guarda roupa planejado, móveis sob medida mato grosso do sul",
  image = "https://aNdReLuizMe.github.io/paulocostaplanejados/logo/pcplanejados_logo.png",
  url = "https://aNdReLuizMe.github.io/paulocostaplanejados/",
  type = "website",
  schemaData
}: SEOProps) {

  useEffect(() => {
    // Atualizar title
    document.title = title;

    // Atualizar meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');
    
    // Twitter
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Schema.org se fornecido
    if (schemaData) {
      updateSchemaData(schemaData);
    }

    // Google Analytics tracking
    trackPageView(url, title);

  }, [title, description, keywords, image, url, type, schemaData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  const updateSchemaData = (data: object) => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(data);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  };

  const trackPageView = (url: string, title: string) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_TRACKING_ID', {
        page_title: title,
        page_location: url
      });
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: title,
        page_location: url
      });
    }
  };

  return null; // Este componente não renderiza nada
}

// Hook personalizado para analytics
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters: object = {}) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  };

  const trackClick = (elementName: string, section: string = '') => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: elementName,
      section: section
    });
  };

  const trackWhatsApp = () => {
    trackEvent('whatsapp_click', {
      event_category: 'contact',
      event_label: 'floating_whatsapp'
    });
  };

  const trackPortfolioView = (imageIndex: number) => {
    trackEvent('portfolio_view', {
      event_category: 'engagement',
      event_label: 'image_view',
      image_index: imageIndex
    });
  };

  const trackFormSubmit = (formType: string) => {
    trackEvent('form_submit', {
      event_category: 'lead',
      event_label: formType
    });
  };

  return {
    trackEvent,
    trackClick,
    trackWhatsApp,
    trackPortfolioView,
    trackFormSubmit
  };
}; 