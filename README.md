# 🚛 FrotaCONF — Sistema de Gerenciamento de Frota

<p align="center">
  <strong>Sistema web completo para controle de frota veicular.</strong><br/>
  Monorepo com Frontend <em>(React + Vite + TypeScript)</em> e Backend <em>(Spring Boot + PostgreSQL)</em>.
</p>

---

## 🚀 Tecnologias

### Frontend (SPA)

| Tecnologia | Finalidade |
|---|---|
| **Vite 5** | Build tool ultrarrápida com HMR |
| **React 18** | Biblioteca de UI com componentes funcionais |
| **TypeScript 5** | Tipagem estática e segurança de código |
| **React Router DOM 6** | Roteamento SPA client-side |
| **Bootstrap 5.3** (CDN) | Grid responsivo e componentes base |
| **Lucide React** | Ícones SVG modernos e leves |
| **CSS Customizado** | Dark Mode nativo, Glassmorphism, micro-animações |

### Backend (REST API)

| Tecnologia | Finalidade |
|---|---|
| **Java 17+** | Linguagem principal do servidor |
| **Spring Boot 4** | Framework para API REST |
| **Spring Data JPA / Hibernate** | Persistência e acesso ao banco |
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
├── src/                                    → Frontend (React SPA)
│   ├── components/
│   │   ├── Header.tsx                      → Barra de navegação superior
│   │   ├── Sidebar.tsx                     → Painel lateral de filtros
│   │   └── VehicleCard.tsx                 → Card individual de veículo
│   ├── pages/
│   │   ├── Home.tsx                        → Página inicial (Dashboard)
│   │   └── Frota.tsx                       → Página de gestão da frota
│   ├── styles/
│   │   └── custom.css                      → Tema escuro + Glassmorphism
│   ├── types/
│   │   └── index.ts                        → Interfaces TypeScript
│   ├── App.tsx                             → Roteamento principal
│   └── main.tsx                            → Ponto de entrada React
│
├── public/
│   └── favicon.svg                         → Ícone do aplicativo
│
├── index.html                              → Template HTML (dark mode)
├── vite.config.ts                          → Configuração do Vite
├── tsconfig.json                           → Configuração do TypeScript
└── package.json                            → Dependências do frontend
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

> O servidor Vite inicia na porta **5173**.
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

## 📝 Licença

Projeto acadêmico — uso educacional.

**Aluno:** Yuri de Sousa Silva
**Disciplina:** Desenvolvimento de Software Web — Prof. Alexandre Almeida
