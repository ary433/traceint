# 🚀 Traceint

<div align="center">
  <img src="assets/logo.png" alt="Traceint Logo" width="200"/>
  <p><strong>A Modern Supply Chain Management Solution</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#api">API</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

## 🌟 Overview

Traceint is a cutting-edge supply chain management platform that leverages blockchain technology to provide transparent, secure, and efficient tracking solutions. Built with modern technologies and best practices, it offers a comprehensive suite of tools for managing and monitoring supply chain operations.

## ✨ Features

- 🔗 **Blockchain Integration** - Secure and immutable transaction records
- 📱 **Cross-Platform Support** - Web and mobile applications
- 🔐 **Advanced Security** - End-to-end encryption and secure authentication
- 📊 **Real-time Analytics** - Comprehensive dashboards and reporting
- 🔄 **Smart Contract Automation** - Automated workflow management
- 🌐 **API Integration** - RESTful and GraphQL APIs

## 🏗 Architecture

### Tech Stack

- **Frontend**: Next.js, React Native
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Blockchain**: Solidity Smart Contracts
- **APIs**: REST & GraphQL
- **Infrastructure**: Docker, Kubernetes

### Project Structure
```
traceint/
├── apps/
│   ├── api/         # NestJS backend
│   ├── web/         # Next.js frontend
│   └── mobile/      # React Native app
├── libs/
│   ├── ui/          # Shared UI components
│   ├── core/        # Core business logic
│   └── contracts/   # Smart contracts
└── docs/           # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- Docker
- Yarn/npm
- MetaMask or similar Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/traceint.git
cd traceint
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start development servers:
```bash
yarn dev
```

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Smart Contract Specs](docs/contracts.md)
- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)

## 📡 API

The Traceint API provides endpoints for managing supply chain data. It supports both GraphQL and RESTful interfaces, allowing for flexible data retrieval and manipulation.

### Endpoints
- **GraphQL**: `/graphql`
- **REST**: `/api`

### Authentication
All requests to the API require authentication via JWT tokens.

### Example Request
```bash
curl -X GET 'http://localhost:3000/api/products' -H 'Authorization: Bearer <token>'
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Security

For security concerns, please email security@traceint.com

## 📧 Contact

For support or inquiries, reach out to support@traceint.com

---

<div align="center">
  Made with ❤️ by the Traceint Team
</div>
# RecycleChain Workshop

This repository houses the RecycleChain Workshop project, a monorepo that integrates multiple applications, libraries, and Solidity smart contracts. Follow this guide to set up the project locally and run the applications.

## Monorepo Contents

- Simple Counter Smart Contract (Solidity): A basic smart contract to demonstrate counter functionality.
- Recycle Chain Smart Contract (Solidity): The core smart contract for the RecycleChain application.
- React Native Application: A mobile app built with React Native.
- Next.js Frontend: A web application frontend developed with Next.js.
- NestJS Backend: A comprehensive backend featuring:
  - GraphQL API
  - REST API with Swagger documentation
  - Smart Contract Event Listeners
- Libraries: Supporting libraries for various functionalities:
  - Forms
  - Network
  - UI components

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using Git.

```bash
git clone
cd waste-track-chain
```

### 2. Install Dependencies

Install the project dependencies using Yarn.

```
yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the necessary environment variables. Refer to .env.example for the required variables.

### 4. Run the Database with Docker Compose

Start the PostgreSQL database using Docker Compose.

```
docker-compose up -d
```

### 5. Run Prisma Migrations

After the database is running, apply Prisma migrations to set up the database schema.

```
yarn prisma migrate dev
```

### 6. Run the Applications

You can run the individual applications using the following commands:

#### API Application

Navigate to the apps/api directory and start the API server and event listeners.

```
cd apps/api
yarn dev
```

#### WEB Application

Navigate to the apps/web directory and start the WEB server.

```
cd apps/web
yarn dev
```

License
This project is licensed under the MIT License.
