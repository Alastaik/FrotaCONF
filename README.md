# 🚛 FrotaCONF — Sistema de Gerenciamento de Frota

<p align="center">
  <strong>Sistema web completo para controle de frota veicular.</strong><br/>
  Frontend em <em>React + TypeScript + Bootstrap</em> · Backend em <em>Spring Boot + PostgreSQL</em>
</p>

---

## 🚀 Stack Tecnológica

### Frontend — React + TypeScript + Bootstrap

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | 18 | Biblioteca de UI — componentes funcionais e hooks |
| **TypeScript** | 5 | Tipagem estática sobre o JavaScript |
| **Bootstrap** | 5.3 | Framework CSS — grid responsivo, botões, modais, dark mode |
| **React Router DOM** | 6 | Roteamento SPA (Single Page Application) |
| **Lucide React** | — | Ícones SVG como componentes React |
| **Vite** | 5 | Build tool e servidor de desenvolvimento |

> O Bootstrap é instalado via **npm** e importado no `main.tsx`, não via CDN.

### Backend — Spring Boot + PostgreSQL

| Tecnologia | Finalidade |
|---|---|
| **Java 17+** | Linguagem principal do servidor |
| **Spring Boot 4** | Framework para API REST |
| **Spring Data JPA / Hibernate** | Persistência e acesso ao banco de dados |
| **PostgreSQL** | Banco de dados relacional |
| **Spring Security** | Autenticação Basic Auth + CORS |
| **Bean Validation** | Validação de dados de entrada |
| **Lombok** | Redução de boilerplate (Getters/Setters) |

---

## 📂 Estrutura do Projeto

```text
FrotaCONF/
│
├── backend/                                → API REST (Spring Boot)
│   ├── src/main/java/com/frotaconf/
│   │   ├── config/SecurityConfig.java      → Configuração CORS + Basic Auth
│   │   ├── controller/VeiculoController.java → Endpoints REST (/api/veiculos)
│   │   ├── model/Veiculo.java              → Entidade JPA
│   │   └── repository/VeiculoRepository.java → Interface Spring Data
│   ├── src/main/resources/
│   │   └── application.properties          → Configuração do banco e segurança
│   └── pom.xml                             → Dependências Maven
│
├── src/                                    → Frontend (React + TypeScript + Bootstrap)
│   ├── components/
│   │   ├── Header.tsx                      → Navbar com navegação (Bootstrap nav)
│   │   ├── Sidebar.tsx                     → Painel lateral de filtros (Bootstrap buttons)
│   │   └── VehicleCard.tsx                 → Card individual de veículo (Bootstrap grid + badges)
│   ├── pages/
│   │   ├── Home.tsx                        → Página inicial (Dashboard)
│   │   └── Frota.tsx                       → Página de gestão da frota (CRUD completo)
│   ├── styles/
│   │   └── custom.css                      → Estilos customizados sobre o Bootstrap
│   ├── types/
│   │   └── index.ts                        → Interfaces TypeScript (contratos de dados)
│   ├── App.tsx                             → Roteamento principal
│   └── main.tsx                            → Ponto de entrada (importa Bootstrap + React)
│
├── public/
│   └── favicon.svg                         → Ícone do aplicativo
│
├── index.html                              → Template HTML (dark mode via data-bs-theme)
├── vite.config.ts                          → Configuração do Vite
├── tsconfig.json                           → Configuração do TypeScript
└── package.json                            → Dependências do frontend (inclui Bootstrap)
```

---

## 🔧 Como Executar Localmente

### Pré-requisitos

- **Node.js 18+** e **npm** instalados
- **Java 17+** (JDK) instalado
- **PostgreSQL** rodando localmente (porta `5432`)

### 1. Configurar o Banco de Dados

Crie um banco chamado `frotaconf` no PostgreSQL:

```sql
CREATE DATABASE frotaconf;
```

> As credenciais padrão configuradas em `application.properties` são:
> - **Usuário:** `postgres`
> - **Senha:** `postgres`

### 2. Iniciar o Backend

```bash
cd backend
./mvnw spring-boot:run
```

> O servidor Spring Boot inicia na porta **8080**.

### 3. Iniciar o Frontend

Em outro terminal, na raiz do projeto:

```bash
npm install
npm run dev
```

> O servidor de desenvolvimento inicia na porta **5173**.
> Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## 🔑 Autenticação

A API usa **Basic Auth**. As credenciais padrão de desenvolvimento são:

| Usuário | Senha |
|---|---|
| `admin` | `admin` |

O frontend já envia as credenciais automaticamente nas requisições à API.

---

## 📡 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/veiculos` | Listar todos os veículos |
| `POST` | `/api/veiculos` | Cadastrar novo veículo |
| `PUT` | `/api/veiculos/{id}/status` | Alterar status do veículo |

---

## 🎨 Recursos do Bootstrap Utilizados

| Recurso | Onde é usado |
|---|---|
| **Grid System** (`container`, `row`, `col-*`) | Layout responsivo em todas as páginas |
| **Dark Mode** (`data-bs-theme="dark"`) | Tema escuro nativo aplicado globalmente |
| **Navbar / Nav Pills** (`nav`, `nav-pills`) | Navegação no Header |
| **Buttons** (`btn`, `btn-primary`, `btn-outline-*`) | Ações em cards, sidebar, formulário |
| **Badges** (`badge`, `rounded-pill`) | Indicador de status do veículo |
| **Modal** (`modal`, `modal-dialog`) | Formulário de adição de veículo |
| **Forms** (`form-control`, `form-select`) | Inputs estilizados no modal |
| **Utilities** (`d-flex`, `gap-*`, `mt-*`, `text-*`) | Espaçamento e alinhamento |

---

## 📝 Licença

Projeto acadêmico — uso educacional.

**Aluno:** Yuri de Sousa Silva
**Disciplina:** Desenvolvimento de Software Web — Prof. Alexandre Almeida
