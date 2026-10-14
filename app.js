'use strict';
const translations = {
  "pt": {
    "skip": "Pular para o conteúdo",
    "navProjects": "Projetos",
    "navAbout": "Sobre",
    "navCerts": "Formação",
    "navContact": "Contato",
    "heroRole": "Produtos web, APIs e integrações — da arquitetura à interface.",
    "heroDescription": "Desenvolvi DuckDooh e OrtoClean de ponta a ponta, conectando interfaces, APIs e dados em produtos para mídia digital e gestão odontológica.",
    "heroCta": "Explorar projetos",
    "contactCta": "Entrar em contato",
    "soloLabel": "Desenvolvimento independente · Full stack",
    "projectsTitle": "Projetos que desenvolvi de ponta a ponta",
    "projectsDescription": "Uma plataforma de mídia exterior digital e um sistema de gestão odontológica. Em ambos, sou responsável pela arquitetura e pelo desenvolvimento completo.",
    "ownership": "Minha atuação",
    "ownershipDescription": "Arquitetura, frontend, backend, APIs e banco de dados.",
    "duckType": "Mídia exterior digital",
    "duckDescription": "Plataforma para anunciantes encontrarem telas e contratarem campanhas de mídia exterior digital. Contratação, pagamento e veiculação conectados em um mesmo fluxo.",
    "duckDetails": "Interface em Next.js e TypeScript, API em Python/FastAPI e dados em PostgreSQL. Integrações com Asaas para pagamentos e Yodeck para veiculação de campanhas.",
    "duckChallenge": "Conectar a escolha de telas e a contratação de campanhas aos serviços de pagamento e veiculação.",
    "duckArchitecture": "Frontend em Next.js, API em FastAPI e persistência em PostgreSQL. Asaas e Yodeck compõem as integrações externas do produto.",
    "duckScope": "Desenvolvi a interface, as regras de negócio, a API, a estrutura de dados e as integrações externas.",
    "duckCase": "Ver detalhes técnicos do DuckDooh",
    "duckCta": "Conhecer o DuckDooh",
    "duckPreview": "Visão da plataforma",
    "ortoType": "Gestão odontológica",
    "ortoDescription": "Sistema de gestão odontológica que reúne pacientes, agenda, vendas e financeiro. A comunicação por WhatsApp se integra ao CRM para apoiar o acompanhamento dos pacientes.",
    "ortoDetails": "API em Fastify e TypeScript, banco PostgreSQL e implantação com Docker. O CRM se conecta a um serviço de WhatsApp separado da API principal.",
    "ortoChallenge": "Reunir os dados dos pacientes e as rotinas de agenda, vendas, financeiro e comunicação em um único produto.",
    "ortoArchitecture": "Frontend conectado à API em Fastify, dados em PostgreSQL e implantação com Docker. A comunicação por WhatsApp utiliza um serviço separado.",
    "ortoScope": "Desenvolvi os módulos da clínica, o frontend, a API, o banco de dados e a integração de comunicação.",
    "ortoCase": "Ver detalhes técnicos do OrtoClean",
    "ortoCta": "Abrir demonstração do OrtoClean",
    "ortoPreview": "Visão do sistema",
    "challenge": "O desafio",
    "architecture": "Implementação",
    "scope": "O que desenvolvi",
    "aboutTitle": "Da visão do produto ao desenvolvimento completo",
    "aboutDescription": "Em DuckDooh e OrtoClean, assumi todas as camadas do desenvolvimento. Esse trabalho conecta as rotinas de cada negócio à interface, às regras da API, à modelagem dos dados e aos serviços externos.",
    "practiceProduct": "Desenvolvimento de produtos",
    "practiceProductDescription": "Arquitetura, interfaces web, APIs e dados. Uma visão do produto inteiro, com responsabilidade por sua implementação.",
    "practiceAutomation": "Integrações e automação",
    "practiceAutomationDescription": "Conexões com serviços de pagamento, veiculação de mídia e comunicação. Formação em automação com Python e Git.",
    "practiceAi": "Formação em IA",
    "practiceAiDescription": "Estudos em RAG, bancos vetoriais, agentes e MCP, com formação IBM. As credenciais abaixo detalham essa base técnica.",
    "toolsLabel": "Tecnologias que conectam cada camada",
    "toolsDescription": "A stack dos projetos, organizada pelo papel de cada ferramenta.",
    "toolsWeb": "Interfaces",
    "toolsApi": "APIs e integrações",
    "toolsData": "Dados e infraestrutura",
    "toolsAi": "IA e busca · formação",
    "workflow": "No fluxo de desenvolvimento",
    "certsTitle": "Formação em automação e inteligência artificial",
    "certsDescription": "Formação complementar em automação com Python, recuperação de informação e desenvolvimento de agentes de IA. Credenciais públicas para consulta.",
    "specialization": "Especialização",
    "professionalCertificate": "Certificado profissional",
    "ibmDate": "26 ago 2026",
    "googleDate": "23 jul 2026",
    "ibmDescription": "RAG, bancos vetoriais, agentes e integração de ferramentas com MCP.",
    "googleDescription": "Python, Git, depuração e automação de tarefas e infraestrutura.",
    "verifyCta": "Ver credencial",
    "moreCredentials": "Ver outras 6 credenciais em IA",
    "credentialIssuer": "IBM · Credly",
    "contactTitle": "Vamos conversar sobre seu próximo produto?",
    "contactDescription": "Entre em contato para falar sobre desenvolvimento web, integrações ou oportunidades de trabalho.",
    "emailCta": "Enviar e-mail",
    "linkedinCta": "Conversar no LinkedIn",
    "footerThanks": "Produtos construídos de ponta a ponta.",
    "footerInvitation": "Vamos conectar a próxima ideia.",
    "backToTop": "Voltar ao início",
    "pageTitle": "Thales Calgarotto | Produtos web, APIs e integrações",
    "pageDescription": "Thales Calgarotto: desenvolvimento completo de produtos web, APIs e integrações. Conheça DuckDooh, OrtoClean e sua formação em automação e IA.",
    "imageAlt": "Portfólio de Thales Calgarotto",
    "brandLabel": "tc_ Thales Calgarotto, início",
    "navLabel": "Navegação principal",
    "githubLabel": "GitHub de Thales Calgarotto (abre em nova aba)",
    "emailLabel": "Enviar e-mail para Thales Calgarotto",
    "linkedinLabel": "Thales Calgarotto no LinkedIn (abre em nova aba)",
    "ortoLinkLabel": "Abrir demonstração do OrtoClean (abre em nova aba)",
    "duckLinkLabel": "Conhecer o DuckDooh (abre em nova aba)",
    "signatureAlt": "Assinatura de Thales Calgarotto",
    "cardAlt": "Crachá de Thales Calgarotto com seu monograma",
    "cardLabel": "Crachá interativo de Thales Calgarotto",
    "cardReady": "Crachá interativo pronto. Arraste-o pela página.",
    "cardFallback": "Crachá exibido como imagem neste navegador.",
    "techLabel": "Tecnologias",
    "duckImageAlt": "Interface da plataforma DuckDooh",
    "ortoImageAlt": "Interface do sistema OrtoClean",
    "badgeAlt": "Selo da credencial",
    "verifyLabel": "Ver credencial de",
    "newTab": "abre em nova aba"
  },
  "en": {
    "skip": "Skip to content",
    "navProjects": "Projects",
    "navAbout": "About",
    "navCerts": "Education",
    "navContact": "Contact",
    "heroRole": "Web products, APIs, and integrations — from architecture to interface.",
    "heroDescription": "I built DuckDooh and OrtoClean end to end, connecting interfaces, APIs, and data in products for digital advertising and dental practice management.",
    "heroCta": "Explore projects",
    "contactCta": "Get in touch",
    "soloLabel": "Independent development · Full stack",
    "projectsTitle": "Products I built end to end",
    "projectsDescription": "A digital advertising platform and a dental practice management system. I designed the architecture and developed every layer of both products.",
    "ownership": "My contribution",
    "ownershipDescription": "Architecture, frontend, backend, APIs, and databases.",
    "duckType": "Digital out-of-home advertising",
    "duckDescription": "A platform for advertisers to find screens and book digital out-of-home campaigns. Campaign booking, payments, and ad delivery connected in one workflow.",
    "duckDetails": "Next.js and TypeScript frontend, Python/FastAPI API, and PostgreSQL database. Asaas handles the payment integration, while Yodeck connects campaign delivery.",
    "duckChallenge": "Connect screen selection and campaign booking to payment and ad delivery services.",
    "duckArchitecture": "Next.js frontend, FastAPI API, and PostgreSQL persistence. Asaas and Yodeck provide the product’s external integrations.",
    "duckScope": "I developed the interface, business logic, API, data model, and external integrations.",
    "duckCase": "View DuckDooh technical details",
    "duckCta": "Explore DuckDooh",
    "duckPreview": "Platform overview",
    "ortoType": "Dental practice management",
    "ortoDescription": "A dental practice management system that brings together patients, appointments, sales, and finances. WhatsApp communication integrates with the CRM to support patient follow-up.",
    "ortoDetails": "Fastify and TypeScript API, PostgreSQL database, and Docker deployment. The CRM connects to a WhatsApp service that runs separately from the main API.",
    "ortoChallenge": "Bring patient data, appointments, sales, finances, and communication together in one product.",
    "ortoArchitecture": "Frontend connected to a Fastify API, PostgreSQL data, and Docker deployment. WhatsApp communication uses a separate service.",
    "ortoScope": "I developed the clinic modules, frontend, API, database, and communication integration.",
    "ortoCase": "View OrtoClean technical details",
    "ortoCta": "Open the OrtoClean demo",
    "ortoPreview": "System overview",
    "challenge": "The challenge",
    "architecture": "Implementation",
    "scope": "What I built",
    "aboutTitle": "From product vision to complete implementation",
    "aboutDescription": "For DuckDooh and OrtoClean, I took responsibility for every layer of development. This work connects each business’s workflows to the interface, API logic, data model, and external services.",
    "practiceProduct": "Product development",
    "practiceProductDescription": "Architecture, web interfaces, APIs, and data. A view of the whole product, with responsibility for its implementation.",
    "practiceAutomation": "Integrations and automation",
    "practiceAutomationDescription": "Connections to payment, ad delivery, and communication services. Training in automation with Python and Git.",
    "practiceAi": "AI education",
    "practiceAiDescription": "Studies in RAG, vector databases, agents, and MCP through IBM programs. The credentials below document this technical foundation.",
    "toolsLabel": "Technologies behind each layer",
    "toolsDescription": "The project stack, organized by the role of each tool.",
    "toolsWeb": "Interfaces",
    "toolsApi": "APIs and integrations",
    "toolsData": "Data and infrastructure",
    "toolsAi": "AI and search · education",
    "workflow": "In my development workflow",
    "certsTitle": "Education in automation and artificial intelligence",
    "certsDescription": "Additional training in Python automation, information retrieval, and AI agent development. Public credentials are available for review.",
    "specialization": "Specialization",
    "professionalCertificate": "Professional certificate",
    "ibmDate": "Aug 26, 2026",
    "googleDate": "Jul 23, 2026",
    "ibmDescription": "RAG, vector databases, agents, and tool integration with MCP.",
    "googleDescription": "Python, Git, debugging, and task and infrastructure automation.",
    "verifyCta": "View credential",
    "moreCredentials": "View 6 more AI credentials",
    "credentialIssuer": "IBM · Credly",
    "contactTitle": "Let’s discuss your next product.",
    "contactDescription": "Get in touch to talk about web development, integrations, or job opportunities.",
    "emailCta": "Send an email",
    "linkedinCta": "Connect on LinkedIn",
    "footerThanks": "Products built end to end.",
    "footerInvitation": "Let’s bring the next idea together.",
    "backToTop": "Back to top",
    "pageTitle": "Thales Calgarotto | Web products, APIs, and integrations",
    "pageDescription": "Thales Calgarotto: end-to-end development of web products, APIs, and integrations. Explore DuckDooh, OrtoClean, and his education in automation and AI.",
    "imageAlt": "Thales Calgarotto’s portfolio",
    "brandLabel": "tc_ Thales Calgarotto, home",
    "navLabel": "Main navigation",
    "githubLabel": "Thales Calgarotto on GitHub (opens in a new tab)",
    "emailLabel": "Send an email to Thales Calgarotto",
    "linkedinLabel": "Thales Calgarotto on LinkedIn (opens in a new tab)",
    "ortoLinkLabel": "Open the OrtoClean demo (opens in a new tab)",
    "duckLinkLabel": "Explore DuckDooh (opens in a new tab)",
    "signatureAlt": "Thales Calgarotto’s signature",
    "cardAlt": "Thales Calgarotto’s badge with his monogram",
    "cardLabel": "Thales Calgarotto’s interactive badge",
    "cardReady": "Interactive badge ready. Drag it across the page.",
    "cardFallback": "Badge displayed as an image in this browser.",
    "techLabel": "Technologies",
    "duckImageAlt": "DuckDooh platform interface",
    "ortoImageAlt": "OrtoClean system interface",
    "badgeAlt": "Credential badge for",
    "verifyLabel": "View credential for",
    "newTab": "opens in a new tab"
  }
};
let language = 'pt';
let cardInstance = null;
const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
const themeButton = document.getElementById('theme-toggle');
function currentTheme() {
  return document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function updateThemeLabel() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const label = language === 'pt' ? `Ativar tema ${next === 'light' ? 'claro' : 'escuro'}` : `Switch to ${next} theme`;
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  document.querySelector('meta[name="theme-color"]').content = currentTheme() === 'dark' ? '#171a1b' : '#f5f6f2';
  cardInstance?.setActive(!document.hidden);
}
themeButton.addEventListener('click', () => {
  document.documentElement.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
  savePreference('tc-theme', document.documentElement.dataset.theme);
  updateThemeLabel();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeLabel);
function applyLanguage(lang) {
  language = lang;
  const copy = translations[lang];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  for (const attribute of ['aria-label', 'alt']) {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
      element.setAttribute(attribute, copy[element.getAttribute(`data-i18n-${attribute}`)]);
    });
  }
  document.querySelectorAll('[data-credential]').forEach(element => {
    element.setAttribute('aria-label', `${copy.verifyLabel} ${element.dataset.credential} (${copy.newTab})`);
  });
  document.querySelectorAll('[data-credential-alt]').forEach(element => {
    element.alt = `${copy.badgeAlt} ${element.dataset.credentialAlt}`;
  });
  const button = document.getElementById('language-toggle');
  button.textContent = lang === 'pt' ? 'EN' : 'PT';
  button.lang = lang === 'pt' ? 'en' : 'pt-BR';
  button.setAttribute('aria-label', lang === 'pt' ? 'EN: Switch to English' : 'PT: Mudar para português');
  document.title = copy.pageTitle;
  for (const [selector, value] of [
    ['meta[name="description"]', copy.pageDescription],
    ['meta[property="og:title"]', copy.pageTitle],
    ['meta[property="og:description"]', copy.pageDescription],
    ['meta[name="twitter:title"]', copy.pageTitle],
    ['meta[name="twitter:description"]', copy.pageDescription],
    ['meta[property="og:image:alt"]', copy.imageAlt],
    ['meta[name="twitter:image:alt"]', copy.imageAlt],
    ['meta[property="og:locale"]', lang === 'pt' ? 'pt_BR' : 'en_US'],
    ['meta[property="og:locale:alternate"]', lang === 'pt' ? 'en_US' : 'pt_BR']
  ]) document.querySelector(selector).content = value;
  const schemaElement = document.querySelector('script[type="application/ld+json"]');
  const schema = JSON.parse(schemaElement.textContent);
  const profile = schema['@graph'].find(item => item['@type'] === 'ProfilePage');
  Object.assign(profile, {name: copy.pageTitle, description: copy.pageDescription, inLanguage: document.documentElement.lang});
  const person = schema['@graph'].find(item => item['@type'] === 'Person');
  person.jobTitle = lang === 'pt' ? 'Desenvolvedor full stack' : 'Full-stack developer';
  person.description = copy.heroDescription;
  for (const [name, key] of [['DuckDooh', 'duck'], ['OrtoClean', 'orto']]) {
    const project = schema['@graph'].find(item => item.name === name);
    project.description = `${copy[key + 'Description']} ${copy[key + 'Details']}`;
    project.genre = copy[key + 'Type'];
  }
  schemaElement.textContent = JSON.stringify(schema);
  if (document.querySelector('.hero-card').classList.contains('card-ready')) {
    document.getElementById('card-status').textContent = copy.cardReady;
  } else if (document.getElementById('card-status').textContent) {
    document.getElementById('card-status').textContent = copy.cardFallback;
  }
  updateThemeLabel();
  savePreference('tc-language', lang);
}
document.getElementById('language-toggle').addEventListener('click', () => applyLanguage(language === 'pt' ? 'en' : 'pt'));
const requestedLanguage = new URLSearchParams(location.search).get('lang');
applyLanguage(requestedLanguage === 'en' || requestedLanguage === 'pt' ? requestedLanguage : readPreference('tc-language') === 'en' ? 'en' : 'pt');

async function startCard(){
 const fail=()=>{document.querySelector('.hero-card').classList.remove('card-ready');document.getElementById('card-status').textContent=translations[language].cardFallback;queueMicrotask(()=>{cardInstance?.unmount();cardInstance=null})};
 try{
  const {mountBadge}=await import('./assets/interactive-card/card.js?v=ab0e414f2960');
  cardInstance=mountBadge(document.getElementById('lanyard-root'),()=>{document.querySelector('.hero-card').classList.add('card-ready');document.getElementById('card-status').textContent=translations[language].cardReady},fail);
  const updateVisibility=()=>cardInstance?.setActive(!document.hidden);
  document.addEventListener('visibilitychange',updateVisibility);
 }catch{fail()}
}
// Load automatically after the main content has had a chance to paint.
if('requestIdleCallback' in window)requestIdleCallback(startCard,{timeout:1000});else setTimeout(startCard,0);
