// Configurações do Google Analytics e Google Tag Manager
export const analyticsConfig = {
  // Google Analytics 4
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID || 'G-Y0BH95BRFK',
  
  // Google Tag Manager
  GTM_ID: import.meta.env.VITE_GTM_ID || 'GTM-P5X8HLDT',
  
  // Configurações do site
  SITE_URL: import.meta.env.VITE_APP_URL || 'https://paulocostaplanejados.com.br',
  SITE_NAME: import.meta.env.VITE_APP_NAME || 'Paulo Costa Planejados',
  SITE_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Móveis planejados de qualidade em Três Lagoas/MS',
  
  // Configurações de negócio
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || '5567991146889',
  BUSINESS_ADDRESS: import.meta.env.VITE_BUSINESS_ADDRESS || 'Rua Santiago Manoel Fernández, 2260, Três Lagoas, MS',
  
  // SEO
  CANONICAL_URL: import.meta.env.VITE_CANONICAL_URL || 'https://paulocostaplanejados.com.br',
  OG_IMAGE: import.meta.env.VITE_OG_IMAGE || 'https://paulocostaplanejados.com.br/logo/pcplanejados_logo.png',
  
  // Configurações de tracking
  enableTracking: import.meta.env.PROD, // Só ativa tracking em produção
  debugMode: import.meta.env.DEV, // Debug mode apenas em desenvolvimento
  
  // Eventos customizados
  customEvents: {
    WHATSAPP_CLICK: 'whatsapp_click',
    PORTFOLIO_VIEW: 'portfolio_view',
    BUSINESS_CONTACT: 'business_contact',
    QUOTE_REQUEST: 'quote_request',
    GALLERY_INTERACTION: 'gallery_interaction',
    CTA_CLICK: 'cta_click'
  },
  
  // Configurações de enhanced ecommerce
  ecommerce: {
    currency: 'BRL',
    defaultValue: 1500, // Valor médio estimado de um projeto
    conversionGoals: {
      whatsapp_contact: 1,
      portfolio_engagement: 0.5,
      quote_request: 2
    }
  }
};

const isGoogleAnalyticsId = (value: string): boolean => /^G-[A-Z0-9]+$/i.test(value);
const isGoogleTagManagerId = (value: string): boolean => /^GTM-[A-Z0-9]+$/i.test(value);

const appendExternalScript = (id: string, src: string): void => {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

// Função para inicializar Google Analytics
export const initializeGA = () => {
  if (!analyticsConfig.enableTracking) {
    console.log('🔍 Analytics desabilitado em desenvolvimento');
    return;
  }

  if (!isGoogleAnalyticsId(analyticsConfig.GA_TRACKING_ID)) {
    console.warn('Google Analytics não foi inicializado: identificador inválido.');
    return;
  }

  // Carregar gtag
  appendExternalScript(
    'google-analytics-script',
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsConfig.GA_TRACKING_ID)}`
  );

  // Configurar gtag
  const dataLayer = window.dataLayer ?? (window.dataLayer = []);
  const gtag = (...args: unknown[]): void => {
    dataLayer.push(args);
  };
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', analyticsConfig.GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    // Enhanced ecommerce
    custom_map: {
      'dimension1': 'business_type',
      'dimension2': 'location',
      'dimension3': 'user_intent'
    }
  });

  // Configurações específicas para o negócio
  gtag('event', 'page_view', {
    business_type: 'móveis_planejados',
    location: 'três_lagoas_ms',
    user_intent: 'browsing'
  });

  if (analyticsConfig.debugMode) {
    console.log('📊 Google Analytics inicializado:', analyticsConfig.GA_TRACKING_ID);
  }
};

// Função para inicializar Google Tag Manager
export const initializeGTM = () => {
  if (!analyticsConfig.enableTracking) return;

  if (!isGoogleTagManagerId(analyticsConfig.GTM_ID)) {
    console.warn('Google Tag Manager não foi inicializado: identificador inválido.');
    return;
  }

  // A validação do identificador e a criação por DOM evitam interpretar valores de ambiente como HTML.
  const dataLayer = window.dataLayer ?? (window.dataLayer = []);
  dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  appendExternalScript(
    'google-tag-manager-script',
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(analyticsConfig.GTM_ID)}`
  );

  if (analyticsConfig.debugMode) {
    console.log('🏷️ Google Tag Manager inicializado:', analyticsConfig.GTM_ID);
  }
};

// Função para tracking de eventos de negócio
export const trackBusinessEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (!analyticsConfig.enableTracking) {
    if (analyticsConfig.debugMode) {
      console.log('📈 Event tracked (dev):', eventName, parameters);
    }
    return;
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      currency: analyticsConfig.ecommerce.currency,
      ...parameters
    });
  }

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
      timestamp: new Date().toISOString(),
      site_name: analyticsConfig.SITE_NAME
    });
  }

  if (analyticsConfig.debugMode) {
    console.log('📊 Business event tracked:', eventName, parameters);
  }
};

// Função para tracking de conversões
export const trackConversion = (conversionType: string, value?: number) => {
  const conversionValue = value || analyticsConfig.ecommerce.conversionGoals[conversionType as keyof typeof analyticsConfig.ecommerce.conversionGoals] || 1;

  trackBusinessEvent('conversion', {
    event_category: 'conversion',
    event_label: conversionType,
    value: conversionValue,
    conversion_type: conversionType
  });

  // Enhanced ecommerce para conversão
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: analyticsConfig.ecommerce.currency,
      value: conversionValue * analyticsConfig.ecommerce.defaultValue,
      lead_source: conversionType
    });
  }
};
