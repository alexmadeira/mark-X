# Mark X

<p align="center">
  <img src="https://github.com/alexmadeira/mark-X/blob/main/public/doc/mark-x_logo.png" alt="Logo do Mark X" width="400" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-12-000000?style=flat-square&logo=nextdotjs" alt="Next.js 12" />
  <img src="https://img.shields.io/badge/React-17-61DAFB?style=flat-square&logo=react&logoColor=000000" alt="React 17" />
  <img src="https://img.shields.io/badge/TypeScript-4.3-3178C6?style=flat-square&logo=typescript&logoColor=ffffff" alt="TypeScript 4.3" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="Licença MIT" />
</p>

Portfólio pessoal de Alex Madeira desenvolvido com Next.js, React e TypeScript. A aplicação apresenta projetos cadastrados no Prismic, com banner rotativo na página inicial, lista global de projetos e páginas estáticas de detalhe.

[Repositório](https://github.com/alexmadeira/mark-X)

## Preview

<p align="center">
  <img src="https://github.com/alexmadeira/mark-X/blob/main/public/doc/mark-x_home.png" alt="Preview da home do Mark X" width="900" />
</p>
<p align="center">
   <img src="https://github.com/alexmadeira/mark-X/blob/main/public/doc/mark-x_project-2.png" alt="Preview de página de projeto do Mark X" width="900" />
</p>

## Sobre o projeto

O Mark X é uma aplicação web para apresentação de projetos de portfólio. O conteúdo principal vem do Prismic: projetos em destaque alimentam o banner da home, e documentos do tipo `project` geram páginas em `/projeto/[slug]`.

A aplicação centraliza elementos globais de interface, como menu, lista de projetos, rodapé, SEO, animações de transição e estilos compartilhados. Também há uma rota `/misc`, construída a partir do documento único `misc` do Prismic e de projetos filtrados pelo tipo `Misc`.

## Funcionalidades

- Banner principal com projetos em destaque buscados no Prismic.
- Navegação manual entre projetos do banner por controles de próximo e anterior.
- Temporizador visual para alternância automática dos projetos em destaque.
- Pausa do banner ao passar o mouse sobre o projeto ativo.
- Lista global de projetos com filtro para ocultar documentos do tipo `CSS Art`.
- Páginas estáticas de projeto em `/projeto/[slug]`, geradas pelo `uid` dos documentos do CMS.
- Página `/misc` com conteúdo do documento único `misc` e grid de projetos do tipo `Misc`.
- Navegação entre projeto anterior e próximo a partir dos campos `prev` e `next`.
- SEO por página com título, descrição, Open Graph e Twitter Card.
- Renderização de imagens remotas com `next/image`.
- Importação de SVGs como componentes React via SVGR.

## Tecnologias

| Responsabilidade | Tecnologias |
|---|---|
| Framework | Next.js 12 |
| Interface | React 17 |
| Linguagem | TypeScript 4.3 |
| Estilização | styled-components, polished |
| Animações | framer-motion |
| CMS | Prismic (`prismic-javascript`, `prismic-dom`) |
| Dados remotos | Axios, SWR |
| Imagens e assets | `next/image`, `@svgr/webpack` |
| Ícones | react-icons |
| Qualidade e commits | ESLint, Prettier, Husky, lint-staged, Commitlint, Commitizen |

## Arquitetura e decisões técnicas

O projeto usa o roteamento baseado em `pages/` do Next.js. A entrada global fica em `src/pages/_app.tsx`, onde são aplicados `ThemeProvider`, `GlobalStyle`, providers de contexto e componentes persistentes como `Menu`, `Projects` e `Footer`.

Principais decisões observadas no código:

- `src/lib/prismic.ts` centraliza a criação do client do Prismic usando o endpoint `https://mark-x.cdn.prismic.io/api/v2`.
- `src/pages/projeto/[slug].tsx` usa `getStaticPaths`, `getStaticProps`, `fallback: true` e `revalidate: true` para gerar páginas de projeto.
- `src/hooks/BannerContext.tsx` controla projetos em destaque, índice ativo, porcentagem do temporizador, pausa e navegação do banner.
- `src/hooks/ProjectListContext.tsx` controla abertura da lista global de projetos e busca documentos do tipo `project`.
- `src/hooks/WindowContext.tsx` disponibiliza dimensões da janela para componentes que dependem do viewport.
- `src/components/SEO.tsx` centraliza metadados de página e usa `NEXT_PUBLIC_SITE_URL` para montar URLs absolutas quando uma imagem é informada.
- `src/services/api.ts` cria uma instância Axios apontada para `https://www.instagram.com/` com o parâmetro `__a=1`.
- O alias `~/*` aponta para `src/*`, conforme `tsconfig.json`.
- `next.config.js` adiciona suporte a SVG via SVGR e libera imagens remotas de Prismic e domínios do Instagram.

## Estrutura de pastas

```txt
src/
├── assets/         # SVGs e declarações de assets
├── components/     # Componentes reutilizáveis da interface
├── hooks/          # Contextos e hooks reutilizáveis
├── lib/            # Integrações base, como o client do Prismic
├── pages/          # Rotas e entradas globais do Next.js
├── services/       # Clientes de serviços externos
├── styles/         # Estilos globais, tema, páginas e variantes
└── utils/          # Funções utilitárias

public/
├── doc/            # Logo e imagens de preview usadas no README
└── favicon/        # Favicons, manifest e PDF público do currículo
```

## Como executar localmente

O repositório contém `package-lock.json` e `pnpm-lock.yaml`. Para evitar divergência de dependências, escolha um gerenciador e mantenha o lockfile correspondente no fluxo de desenvolvimento. Os exemplos abaixo usam `npm`, alinhado ao `package-lock.json`.

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Variáveis de ambiente

Existe um arquivo `.env.development` com a variável usada pelo componente de SEO.

| Variável | Descrição | Obrigatória |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base usada para montar URLs absolutas de imagem no componente `SEO`. | Sim, quando páginas informarem imagem de compartilhamento |

Exemplo local:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

O endpoint do Prismic está definido diretamente em `src/lib/prismic.ts`; não há variável de ambiente para o repositório do CMS no estado atual do código.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Next.js. |
| `npm run build` | Gera o build de produção. |
| `npm run start` | Executa a aplicação a partir do build gerado. |

## Testes

Não foram encontrados arquivos `*.test.*`, arquivos `*.spec.*`, pasta `__tests__` ou script de teste no `package.json`.

## Qualidade de código

O projeto possui configuração de ESLint, Prettier, Husky, lint-staged, Commitlint e Commitizen.

- O ESLint está configurado em `.eslintrc.json`, com regras para TypeScript, React, React Hooks, Airbnb, Prettier e ordenação de imports.
- O Prettier está configurado em `prettier.config.js`.
- O `lint-staged` executa `npx eslint --fix` em arquivos staged dentro de `src/`.
- Os commits seguem `@commitlint/config-conventional`, com Commitizen configurado para `cz-conventional-changelog`.
- Não há script `lint` declarado no `package.json`; a execução configurada ocorre no hook de pre-commit.

## Build e produção

Gere o build:

```bash
npm run build
```

Execute a versão de produção:

```bash
npm run start
```

Por padrão, `next start` usa a porta `3000`, salvo configuração externa de ambiente.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
