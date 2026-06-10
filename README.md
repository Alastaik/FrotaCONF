# FrotaCONF — Sistema de Gerenciamento de Frota (Premium)

Sistema web completo para controle de frota veicular. O projeto foi modernizado e agora conta com uma arquitetura "Single Page Application" robusta, utilizando **React, Vite e TypeScript** no Frontend, e uma API REST segura construída com **Java Spring Boot e PostgreSQL** no Backend.

## 🚀 Tecnologias

### Frontend (React SPA)
- **Vite + React + TypeScript** — Arquitetura de compilação ultrarrápida.
- **React Router DOM** — Navegação instantânea e dinâmica entre as páginas.
- **Bootstrap 5.3 + Lucide Icons** — Sistema responsivo de grids, modal nativo e ícones modernos.
- **CSS Customizado** — Tema Escuro (Dark Mode) nativo com efeitos premium de "Glassmorphism" e micro-animações.

### Backend (Spring Boot REST API)
- **Java 17+ e Spring Boot 3.4** — Framework robusto para o servidor.
- **Spring Data JPA & Hibernate** — Abstração de persistência no banco de dados.
- **PostgreSQL** — Banco de dados relacional definitivo da aplicação.
- **Spring Security** — Proteção com CORS habilitado e autenticação "Basic Auth" para endpoints protegidos.
- **Lombok** — Redução de código boilerplate (Getters/Setters).

---

## 📂 Estrutura do Projeto (Monorepo)

```text
FrotaCONF/
├── backend/                        → Diretório da API (Spring Boot)
│   ├── src/main/java/.../model/    → Entidades JPA (ex: Veiculo.java)
│   ├── src/main/java/.../repository/ → Interfaces Spring Data
│   ├── src/main/java/.../controller/ → Endpoints REST
│   └── src/main/resources/         → Configurações (application.properties)
│
├── src/                            → Diretório do Frontend (React)
│   ├── components/                 → Componentes de interface (Header, Sidebar, VehicleCard)
│   ├── pages/                      → Rotas da aplicação (Home.tsx, Frota.tsx)
│   ├── styles/                     → Estilos do tema escuro (custom.css)
│   ├── App.tsx                     → Roteamento principal
│   └── main.tsx                    → Ponto de entrada do React
│
├── index.html                      → Template principal (aciona o dark mode)
└── vite.config.ts                  → Configuração do Vite + React
```

---

## 🔧 Como Executar Localmente

### 1. Requisitos
- Node.js e NPM instalados.
- Java 17 (JDK) instalado.
- Servidor PostgreSQL rodando localmente (porta 5432).

### 2. Configurando e Rodando o Backend
1. Certifique-se que o banco PostgreSQL possui um banco chamado `frotaconf`.
2. As credenciais padrão da aplicação (`backend/src/main/resources/application.properties`) são usuário: `postgres` e senha: `postgres`.
3. Pelo terminal, na raiz do projeto:
```bash
cd backend
./mvnw spring-boot:run
```
O servidor Spring iniciará na porta `8080`.

### 3. Configurando e Rodando o Frontend
Em um novo terminal, volte para a raiz do repositório (`FrotaCONF`) e instale as dependências recém-adicionadas:
```bash
npm install
npm run dev
```
O servidor Vite inciará. Acesse `http://localhost:5173` no seu navegador. A integração com o backend será feita automaticamente utilizando credenciais básicas encapsuladas no React.

---

**Desenvolvido como projeto acadêmico:**  
**Aluno:** Yuri de Sousa Silva  
**Disciplina:** Desenvolvimento de Software Web — Prof. Alexandre Almeida
