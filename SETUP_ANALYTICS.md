# 📊 Guia de Configuração - Analytics e SEO

## Configuração do Google Analytics 4 e Google Tag Manager

### 1. Google Analytics 4

1. **Criar Conta no Google Analytics**
   - Acesse [analytics.google.com](https://analytics.google.com)
   - Crie uma nova propriedade para o site
   - Copie o ID de medição (GA_MEASUREMENT_ID)

2. **Configurar no Site**
   - Substitua `GA_TRACKING_ID` no arquivo `index.html`
   - Ou configure via variáveis de ambiente

### 2. Google Tag Manager

1. **Criar Conta no GTM**
   - Acesse [tagmanager.google.com](https://tagmanager.google.com)
   - Crie um novo contêiner
   - Copie o ID do GTM (GTM-XXXXXXX)

2. **Configurar no Site**
   - Substitua `GTM-XXXXXXX` no arquivo `index.html`
   - Configure via variáveis de ambiente

### 3. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Google Analytics 4
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX

# Configurações do Site
VITE_APP_URL=https://aNdReLuizMe.github.io/paulocostaplanejados
VITE_CANONICAL_URL=https://aNdReLuizMe.github.io/paulocostaplanejados
VITE_OG_IMAGE=https://aNdReLuizMe.github.io/paulocostaplanejados/logo/pcplanejados_logo.png
```

## 🎯 Eventos Configurados

### Eventos de Negócio
- `whatsapp_click` - Clique no botão WhatsApp
- `portfolio_view` - Visualização de imagens do portfólio
- `business_contact` - Contato comercial
- `quote_request` - Solicitação de orçamento
- `gallery_interaction` - Interações com galeria

### Conversões Rastreadas
- **WhatsApp Contact** - Valor: R$ 1.500
- **Portfolio Engagement** - Valor: R$ 750
- **Quote Request** - Valor: R$ 3.000

## 🔍 SEO Implementado

### Meta Tags Avançadas
- ✅ Title otimizado com palavras-chave locais
- ✅ Meta description rica com call-to-action
- ✅ Keywords direcionadas para Três Lagoas/MS
- ✅ Open Graph completo para redes sociais
- ✅ Twitter Cards otimizadas
- ✅ Canonical URL definida
- ✅ Meta tags de geolocalização

### Schema.org (Structured Data)
- ✅ LocalBusiness Schema completo
- ✅ Organization Schema
- ✅ Website Schema com SearchAction
- ✅ BreadcrumbList para navegação
- ✅ ImageGallery para portfólio
- ✅ ContactPoint para WhatsApp

### Arquivos Técnicos
- ✅ `sitemap.xml` otimizado com imagens
- ✅ `robots.txt` configurado para máximo SEO
- ✅ `manifest.json` para PWA

### Performance SEO
- ✅ Lazy loading em todas as imagens
- ✅ Preload de recursos críticos
- ✅ DNS prefetch para domínios externos
- ✅ Alt texts descritivos e otimizados
- ✅ Semantic HTML (header, main, section, article)

## 📱 Acessibilidade (WCAG 2.1 AA)

### Navegação
- ✅ Skip links para conteúdo principal
- ✅ Focus indicators visíveis
- ✅ Keyboard navigation completa
- ✅ Screen reader friendly

### Conteúdo
- ✅ ARIA labels adequados
- ✅ Heading hierarchy correta (h1-h4)
- ✅ Touch targets mínimo 44px
- ✅ Contrast ratios adequados

## 🚀 Como Testar

### 1. Lighthouse (Chrome DevTools)
```bash
# Abra o site e execute Lighthouse
# Métricas esperadas:
# - Performance: 95+ (mobile) / 98+ (desktop)
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100
```

### 2. Google Search Console
1. Adicione a propriedade no Search Console
2. Envie o sitemap: `https://aNdReLuizMe.github.io/paulocostaplanejados/sitemap.xml`
3. Teste URLs individualmente

### 3. Rich Results Test
- Acesse [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Teste as páginas para verificar Schema.org

### 4. PageSpeed Insights
- Acesse [pagespeed.web.dev](https://pagespeed.web.dev)
- Analise Core Web Vitals

## 📈 Monitoramento

### Analytics Real-Time
1. **Google Analytics** - Acompanhe visitantes em tempo real
2. **GTM Preview** - Teste eventos antes de publicar
3. **Console do navegador** - Logs de debug em desenvolvimento

### Métricas Importantes
- **Sessões** e **Usuários únicos**
- **Taxa de conversão** (WhatsApp clicks)
- **Tempo na página** por seção
- **Eventos de engajamento** no portfólio
- **Core Web Vitals** (LCP, FID, CLS)

### Relatórios Customizados
Configure relatórios para:
- Funil de conversão (Home → Portfólio → WhatsApp)
- Análise de comportamento por dispositivo
- Performance por região (Três Lagoas/MS)
- Efetividade das CTAs

## 🔧 Troubleshooting

### Analytics não aparece
1. Verifique se o ID está correto no `index.html`
2. Aguarde até 24h para dados aparecerem
3. Use Real-Time para testes imediatos

### Schema.org não validando
1. Use o [Schema Markup Validator](https://validator.schema.org/)
2. Verifique se JSON-LD está bem formado
3. Teste URLs no Rich Results Test

### SEO Issues
1. Verifique se sitemap está acessível
2. Confirme robots.txt não está bloqueando
3. Teste canonical URLs
4. Valide meta tags em ferramentas SEO

## 📋 Checklist de Deploy

- [ ] IDs do GA4 e GTM configurados
- [ ] Sitemap submetido ao Search Console
- [ ] Schema.org validado
- [ ] Meta tags verificadas
- [ ] Performance testada no Lighthouse
- [ ] Links internos funcionando
- [ ] WhatsApp link testado
- [ ] Imagens com alt text
- [ ] Acessibilidade validada

## 📞 Próximos Passos

### Curto Prazo (1-2 semanas)
1. 🔗 Configurar Google My Business
2. 📊 Setup de Goals no GA4
3. 🎯 Campanhas de remarketing
4. 📱 Testes de performance mobile

### Médio Prazo (1 mês)
1. 🌍 Otimização para outras cidades (MS)
2. 📝 Blog para SEO de conteúdo
3. 🎬 Vídeos do portfólio
4. 🔍 A/B testing de CTAs

### Longo Prazo (3 meses)
1. 🤖 Chatbot integration
2. 📅 Sistema de agendamento
3. 🛒 Catálogo de produtos online
4. 📊 Business Intelligence dashboard

---

**Desenvolvido com ❤️ para Paulo Costa Planejados**  
*Transformando dados em resultados desde 2024* 