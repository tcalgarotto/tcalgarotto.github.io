'use strict';
const translations = {
  "pt": {
    "skip": "Pular para o conteúdo",
    "toolsListLabel": "Ferramentas",
    "pauseTools": "Pausar movimento",
    "resumeTools": "Retomar movimento",
    "navProjects": "Projetos",
    "navAbout": "Sobre",
    "navCerts": "Certificações",
    "navContact": "Contato",
    "heroRole": "Engenharia de software, automação e IA aplicada.",
    "heroDescription": "Desenvolvo produtos e sistemas, conecto serviços e exploro novas formas de trabalhar com inteligência artificial.",
    "heroCta": "Conhecer meu trabalho",
    "contactCta": "Conversar",
    "projectsTitle": "Trabalhos selecionados",
    "projectsDescription": "Produtos próprios que mostram diferentes frentes do meu trabalho.",
    "ownership": "Desenvolvimento completo",
    "ownershipDescription": "Criei a arquitetura, o frontend, o backend, as APIs e o banco de dados.",
    "duckType": "Mídia exterior digital",
    "duckDescription": "Da escolha da tela à veiculação da campanha. Uma plataforma que conecta anunciantes à mídia exterior digital, com contratação e pagamento pela web.",
    "duckDetails": "Interface em Next.js e TypeScript, API em Python/FastAPI e dados em PostgreSQL. Integrações com Asaas para pagamentos e Yodeck para veiculação de campanhas.",
    "duckChallenge": "Conectar a escolha de telas e a contratação de campanhas aos serviços de pagamento e veiculação.",
    "duckArchitecture": "Frontend em Next.js, API em FastAPI e persistência em PostgreSQL. Asaas e Yodeck compõem as integrações externas do produto.",
    "duckScope": "Desenvolvi a interface, as regras de negócio, a API, a estrutura de dados e as integrações externas.",
    "duckCase": "Detalhes do DuckDooh",
    "duckCta": "Conhecer o DuckDooh",
    "duckPreview": "Visão da plataforma",
    "ortoType": "Gestão odontológica",
    "ortoDescription": "A rotina da clínica em um só sistema. Pacientes, agenda, vendas, financeiro e comunicação por WhatsApp conectados à gestão odontológica.",
    "ortoDetails": "API em Fastify e TypeScript, banco PostgreSQL e implantação com Docker. O CRM se conecta a um serviço de WhatsApp separado da API principal.",
    "ortoChallenge": "Reunir os dados dos pacientes e as rotinas de agenda, vendas, financeiro e comunicação em um único produto.",
    "ortoArchitecture": "Frontend conectado à API em Fastify, dados em PostgreSQL e implantação com Docker. A comunicação por WhatsApp utiliza um serviço separado.",
    "ortoScope": "Desenvolvi os módulos da clínica, o frontend, a API, o banco de dados e a integração de comunicação.",
    "ortoCase": "Detalhes do OrtoClean",
    "ortoCta": "Experimentar o OrtoClean",
    "ortoPreview": "Visão do sistema",
    "challenge": "O desafio",
    "architecture": "Implementação",
    "scope": "O que desenvolvi",
    "aboutTitle": "Como penso e construo",
    "aboutDescription": "Gosto de entender como as coisas funcionam e de construir soluções que façam sentido para quem usa. Meu trabalho passa por arquitetura, desenvolvimento de produtos, automação e inteligência artificial.",
    "practiceProduct": "Produtos e experiência",
    "practiceProductDescription": "Interfaces, regras de negócio e dados pensados como partes de uma mesma experiência. Trabalho com TypeScript, React e Next.js.",
    "practiceAutomation": "Automação e integrações",
    "practiceAutomationDescription": "Processos que conectam serviços e reduzem trabalho repetitivo. Python e Git se encontram com pagamentos, comunicação e operação dos produtos.",
    "practiceAi": "Inteligência artificial",
    "practiceAiDescription": "Agentes, busca com contexto e integração de ferramentas. Meu repertório inclui RAG, LangChain, LangGraph, MCP e bancos vetoriais.",
    "certsTitle": "Certificações",
    "certsDescription": "Aprofundamento em automação, agentes e aplicações de IA, com certificações IBM e Google.",
    "specialization": "Especialização",
    "professionalCertificate": "Certificado profissional",
    "ibmDate": "26 ago 2026",
    "googleDate": "23 jul 2026",
    "ibmDescription": "RAG, bancos vetoriais, agentes e integração de ferramentas com MCP.",
    "googleDescription": "Python, Git, depuração e automação de tarefas e infraestrutura.",
    "verifyCta": "Ver credencial",
    "moreCredentials": "Outras certificações em IA",
    "credentialIssuer": "IBM, credencial no Credly",
    "contactTitle": "Vamos trabalhar juntos",
    "contactDescription": "Tem um projeto ou uma oportunidade em mente? Vamos conversar.",
    "emailCta": "Enviar e-mail",
    "linkedinCta": "LinkedIn",
    "footerThanks": "Obrigado por chegar até aqui.",
    "footerInvitation": "Vamos criar algo bonito juntos?",
    "backToTop": "Voltar ao início",
    "pageTitle": "Thales Calgarotto | Software, automação e inteligência artificial",
    "pageDescription": "Thales Calgarotto. Engenharia de software, automação e inteligência artificial aplicada. Conheça trabalhos selecionados e certificações.",
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
    "newTab": "abre em nova aba",
    "aboutContinuation": "Assumo projetos inteiros quando o contexto pede. Investigo, desenho, implemento e testo. Aprender algo novo e voltar para melhorar o que já existe fazem parte da mesma rotina.",
    "practiceSystems": "Arquitetura e sistemas",
    "practiceSystemsDescription": "Backend, APIs, modelagem de dados e serviços externos. Python, FastAPI, Fastify, PostgreSQL e Docker estão entre as ferramentas que uso."
  },
  "en": {
    "skip": "Skip to content",
    "toolsListLabel": "Tools",
    "pauseTools": "Pause motion",
    "resumeTools": "Resume motion",
    "navProjects": "Projects",
    "navAbout": "About",
    "navCerts": "Credentials",
    "navContact": "Contact",
    "heroRole": "Software engineering, automation, and applied AI.",
    "heroDescription": "I develop products and systems, connect services, and explore new ways of working with artificial intelligence.",
    "heroCta": "Explore my work",
    "contactCta": "Get in touch",
    "projectsTitle": "Selected work",
    "projectsDescription": "Independent products that show different sides of my work.",
    "ownership": "End-to-end development",
    "ownershipDescription": "I designed the architecture and built the frontend, backend, APIs, and database.",
    "duckType": "Digital out-of-home advertising",
    "duckDescription": "From choosing a screen to delivering a campaign. A platform that connects advertisers to digital out-of-home media, with online booking and payment.",
    "duckDetails": "Next.js and TypeScript frontend, Python/FastAPI API, and PostgreSQL database. Asaas handles the payment integration, while Yodeck connects campaign delivery.",
    "duckChallenge": "Connect screen selection and campaign booking to payment and ad delivery services.",
    "duckArchitecture": "Next.js frontend, FastAPI API, and PostgreSQL persistence. Asaas and Yodeck provide the product’s external integrations.",
    "duckScope": "I developed the interface, business logic, API, data model, and external integrations.",
    "duckCase": "DuckDooh details",
    "duckCta": "Explore DuckDooh",
    "duckPreview": "Platform overview",
    "ortoType": "Dental practice management",
    "ortoDescription": "A clinic’s daily work in one system. Patients, appointments, sales, finances, and WhatsApp communication connected to dental practice management.",
    "ortoDetails": "Fastify and TypeScript API, PostgreSQL database, and Docker deployment. The CRM connects to a WhatsApp service that runs separately from the main API.",
    "ortoChallenge": "Bring patient data, appointments, sales, finances, and communication together in one product.",
    "ortoArchitecture": "Frontend connected to a Fastify API, PostgreSQL data, and Docker deployment. WhatsApp communication uses a separate service.",
    "ortoScope": "I developed the clinic modules, frontend, API, database, and communication integration.",
    "ortoCase": "OrtoClean details",
    "ortoCta": "Try OrtoClean",
    "ortoPreview": "System overview",
    "challenge": "The challenge",
    "architecture": "Implementation",
    "scope": "What I built",
    "aboutTitle": "How I think and build",
    "aboutDescription": "I like understanding how things work and building solutions that make sense to the people using them. My work spans architecture, product development, automation, and artificial intelligence.",
    "practiceProduct": "Products and experience",
    "practiceProductDescription": "Interfaces, business logic, and data designed as parts of one experience. I work with TypeScript, React, and Next.js.",
    "practiceAutomation": "Automation and integrations",
    "practiceAutomationDescription": "Workflows that connect services and reduce repetitive work. Python and Git meet payments, communication, and product operations.",
    "practiceAi": "Artificial intelligence",
    "practiceAiDescription": "Agents, contextual search, and tool integration. My technical repertoire includes RAG, LangChain, LangGraph, MCP, and vector databases.",
    "certsTitle": "Credentials",
    "certsDescription": "Further study in automation, agents, and AI applications, with IBM and Google credentials.",
    "specialization": "Specialization",
    "professionalCertificate": "Professional certificate",
    "ibmDate": "Aug 26, 2026",
    "googleDate": "Jul 23, 2026",
    "ibmDescription": "RAG, vector databases, agents, and tool integration with MCP.",
    "googleDescription": "Python, Git, debugging, and task and infrastructure automation.",
    "verifyCta": "View credential",
    "moreCredentials": "More AI credentials",
    "credentialIssuer": "IBM, credential on Credly",
    "contactTitle": "Let’s work together",
    "contactDescription": "Have a project or an opportunity in mind? Let’s talk.",
    "emailCta": "Send an email",
    "linkedinCta": "LinkedIn",
    "footerThanks": "Thank you for making it this far.",
    "footerInvitation": "Shall we create something beautiful together?",
    "backToTop": "Back to top",
    "pageTitle": "Thales Calgarotto | Software, automation, and artificial intelligence",
    "pageDescription": "Thales Calgarotto. Software engineering, automation, and applied artificial intelligence. Explore selected work and credentials.",
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
    "newTab": "opens in a new tab",
    "aboutContinuation": "I take on complete projects when the context calls for it. I investigate, design, implement, and test. Learning something new and returning to improve existing work are part of the same practice.",
    "practiceSystems": "Architecture and systems",
    "practiceSystemsDescription": "Backend services, APIs, data modeling, and external services. Python, FastAPI, Fastify, PostgreSQL, and Docker are among the tools I use."
  }
};
let language = 'pt';
let cardInstance = null;
const badgePreviews={light:'assets/interactive-card/fallback-light.svg?v=336a7536511b',dark:'assets/interactive-card/fallback-dark.svg?v=ef60970b65f3'};
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
  const fallback=document.getElementById('card-fallback');
  fallback.src=badgePreviews[currentTheme()];
  document.querySelector('.hero-card source').srcset=fallback.src;
  cardInstance?.setActive(!document.hidden);
}
themeButton.addEventListener('click', () => {
  document.documentElement.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
  savePreference('tc-theme', document.documentElement.dataset.theme);
  updateThemeLabel();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeLabel);
function updateToolsLabel() {
  const button = document.getElementById('tools-toggle');
  const paused = button.getAttribute('aria-pressed') === 'true';
  button.textContent = translations[language][paused ? 'resumeTools' : 'pauseTools'];
}
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
  person.jobTitle = lang === 'pt' ? 'Desenvolvedor de software' : 'Software developer';
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
  schemaElement.textContent = JSON.stringify(schema);
  updateThemeLabel();
  updateToolsLabel();
  savePreference('tc-language', lang);
}
document.getElementById('language-toggle').addEventListener('click', () => applyLanguage(language === 'pt' ? 'en' : 'pt'));
const requestedLanguage = new URLSearchParams(location.search).get('lang');
applyLanguage(requestedLanguage === 'en' || requestedLanguage === 'pt' ? requestedLanguage : readPreference('tc-language') === 'en' ? 'en' : 'pt');

async function startCard(){
 const fail=()=>{document.querySelector('.hero-card').classList.remove('card-ready');document.body.classList.remove('badge-rendered');document.getElementById('card-status').textContent=translations[language].cardFallback;queueMicrotask(()=>{cardInstance?.unmount();cardInstance=null})};
 try{
  const {mountBadge}=await import('./assets/interactive-card/card.js?v=a779557e8d9b');
  cardInstance=mountBadge(document.getElementById('lanyard-root'),()=>{document.querySelector('.hero-card').classList.add('card-ready');document.body.classList.add('badge-rendered');document.getElementById('card-status').textContent=translations[language].cardReady},fail);
  const updateVisibility=()=>cardInstance?.setActive(!document.hidden);
  document.addEventListener('visibilitychange',updateVisibility);
 }catch{fail()}
}
// Fetch immediately; the complete hanging preview remains until WebGL has rendered.
startCard();

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
// Brief, varied entrances. Content starts visible and remains readable without JS.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      const element = entry.target;
      const picture = element.matches('.project-preview');
      element.animate(picture
        ? [{transform:'scale(.985)'},{transform:'scale(1)'}]
        : [{transform:'translateY(14px)'},{transform:'translateY(0)'}],
        {duration:picture?650:460,easing:'cubic-bezier(.22,1,.36,1)'});
      entrances.unobserve(element);
    }
  }, {threshold:.08});
  document.querySelectorAll('.section-heading,.about-intro,.practice-list>div,.project-preview,.project-content,.featured-credential,.contact>div').forEach(el=>entrances.observe(el));
}

// Keep the restored tools rail controllable and idle outside the viewport.
const toolsStrip = document.querySelector('.tool-strip');
const toolsToggle = document.getElementById('tools-toggle');
toolsToggle.hidden = false;
toolsToggle.addEventListener('click', () => {
  const paused = toolsStrip.classList.toggle('paused');
  toolsToggle.setAttribute('aria-pressed', String(paused));
  updateToolsLabel();
});
let toolsInView = !('IntersectionObserver' in window);
function updateToolsActivity() {
  toolsStrip.dataset.active = String(toolsInView && !document.hidden);
}
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    toolsInView = entries[0].isIntersecting;
    updateToolsActivity();
  }).observe(toolsStrip);
}
document.addEventListener('visibilitychange', updateToolsActivity);
updateToolsActivity();

// Same reveal progress and visual treatment as DuckDooh's SiteFooterReveal.
const revealFooter=document.querySelector('.footer-eleven');
const revealFade=document.querySelector('.footer-reveal-fade');
const revealShell=document.querySelector('.footer-reveal-shell');
const siteLift=document.querySelector('[data-site-lift]');
let revealFrame=0;
function updateFooterReveal(){
 revealFrame=0;
 const height=revealFooter.offsetHeight;
 const staticFooter=height>innerHeight;
 revealFooter.classList.toggle('footer-reveal-static',staticFooter);
 if(reducedMotion.matches||staticFooter||!height){
  revealFade.dataset.p='1';revealFade.style.opacity='1';revealShell.style.transform='none';revealShell.style.filter='none';return;
 }
 const uncovered=Math.min(height,Math.max(0,innerHeight-siteLift.getBoundingClientRect().bottom));
 const p=uncovered/height;
 revealFade.dataset.p=p.toFixed(3);
 revealFade.style.opacity=String(.45+.55*p);
 revealShell.style.transform=`scale(${.96+.04*p})`;
 revealShell.style.filter=`blur(${(6*(1-p)).toFixed(2)}px)`;
}
function scheduleFooterReveal(){if(!revealFrame)revealFrame=requestAnimationFrame(updateFooterReveal)}
window.addEventListener('scroll',scheduleFooterReveal,{passive:true});
window.addEventListener('resize',scheduleFooterReveal);
reducedMotion.addEventListener('change',scheduleFooterReveal);
if('ResizeObserver' in window){const observer=new ResizeObserver(scheduleFooterReveal);observer.observe(revealFooter);observer.observe(siteLift)}
scheduleFooterReveal();
