# Gradatim — landing page

Site público de gradatim.com.br. A aplicação fica em outro repositório
(splash-sites/saas-psicologia), em app.gradatim.com.br.

- Astro estático, CSS puro, fontes hospedadas no próprio site (Fontsource).
- Vercel Analytics (sem cookies, sem banner).
- URLs, WhatsApp e preços ficam em `src/consts.ts`.
- `/privacidade` e `/termos` são cópias das páginas do app: manter as duas iguais.
- As telas da página são ilustrações em HTML/CSS com dados fictícios
  (`src/components/AgendaMock.astro` e `src/components/Recursos.astro`).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run og       # regenera public/og.png
```

## Deploy na Vercel

Importar o repositório na Vercel (framework detectado: Astro), apontar
gradatim.com.br e www.gradatim.com.br para o projeto e ativar o Analytics
no painel do projeto.
