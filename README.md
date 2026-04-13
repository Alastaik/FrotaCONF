# FrotaCONF — Sistema de Gerenciamento de Frota

Sistema web para controle de frota veicular, desenvolvido com **Vite + TypeScript** e estilizado com **Bootstrap 5** via CDN.

## Funcionalidades

- Dashboard com contadores dinâmicos (total, em dia, manutenção pendente)
- Listagem de veículos em cards com status visual (badges)
- Filtros por status na barra lateral
- Alternância de status dos veículos (Em Dia ↔ Manutenção Pendente)
- Cadastro de novos veículos via modal

## Estrutura do Projeto

```
FrotaCONF/
├── index.html                  → Página principal com Bootstrap via CDN
├── vite.config.ts              → Configuração do Vite (base para GitHub Pages)
├── tsconfig.json               → Configuração do TypeScript
├── package.json                → Dependências e scripts
├── public/
│   └── favicon.svg             → Ícone da aplicação
└── src/
    ├── main.ts                 → Ponto de entrada, estado e renderização
    ├── types/
    │   └── index.ts            → Interfaces e contratos de dados
    ├── components/
    │   ├── cabecalho.ts        → Componente de cabeçalho (header)
    │   ├── barra-lateral.ts    → Componente de filtros (aside)
    │   ├── area-principal.ts   → Componente que agrupa dashboard + cards (main)
    │   ├── dashboard.ts        → Componente de contadores (section)
    │   ├── card-veiculo.ts     → Componente individual de veículo
    │   ├── formulario-veiculo.ts → Modal de cadastro de veículo
    │   └── rodape.ts           → Componente de rodapé (footer + address)
    └── styles/
        └── custom.css          → Estilos personalizados
```

## Justificativa da Arquitetura

A divisão em componentes segue o princípio de **responsabilidade única**, onde cada arquivo representa um pedaço isolado da interface:

| Componente | Tag semântica | Responsabilidade |
|------------|---------------|------------------|
| `cabecalho.ts` | `<header>` | Identidade visual e título do sistema |
| `barra-lateral.ts` | `<aside>` | Navegação secundária com filtros por status |
| `area-principal.ts` | `<main>` | Composição do conteúdo central (dashboard + lista) |
| `dashboard.ts` | `<section>` | Exibição de indicadores numéricos da frota |
| `card-veiculo.ts` | `<div>` (card) | Representação visual de um veículo individual |
| `formulario-veiculo.ts` | `<div>` (modal) | Formulário de cadastro de novos veículos |
| `rodape.ts` | `<footer>` + `<address>` | Identificação do aluno e da disciplina |

Essa separação foi adotada pelos seguintes motivos:

1. **Organização**: cada componente fica em seu próprio arquivo, facilitando a localização e manutenção do código.
2. **Reusabilidade**: componentes como `card-veiculo.ts` são reutilizados para cada veículo da lista, recebendo dados diferentes via props (interfaces TypeScript).
3. **Tipagem forte**: a pasta `types/` centraliza todas as interfaces (`IVeiculo`, `ICardVeiculoProps`, etc.), garantindo que os dados trafegados entre componentes respeitem contratos bem definidos.
4. **Separação de responsabilidades**: o `main.ts` gerencia o estado global e a renderização, enquanto os componentes apenas recebem dados e devolvem HTML.
5. **Semântica HTML**: cada componente utiliza a tag HTML mais adequada (`header`, `aside`, `main`, `section`, `footer`, `address`), melhorando acessibilidade e SEO.

## Tecnologias

- **Vite** — Bundler e dev server
- **TypeScript** — Tipagem estática
- **Bootstrap 5.3.3** — Framework CSS via CDN

## Como Executar

```bash
npm install
npm run dev
```

## Aluno

**Yuri de Sousa Silva**
Disciplina: Desenvolvimento de Software Web — Prof. Alexandre Almeida
