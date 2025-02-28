# ♻️ Waste Track Chain Workshop  

This repository houses the **Waste Track Chain Workshop** project, a monorepo integrating multiple applications, libraries, and Solidity smart contracts. Follow this guide to set up the project locally and run the applications.  

---

## 🗂️ Monorepo Contents  

- **Simple Counter Smart Contract (Solidity)**: A basic smart contract to demonstrate counter functionality.  
- **Waste Track Chain Smart Contract (Solidity)**: The core smart contract for the Waste Track Chain application.  
- **React Native Application**: A mobile app built with React Native.  
- **Next.js Frontend**: A web application frontend developed with Next.js.  
- **NestJS Backend**: A comprehensive backend featuring:  
  - GraphQL API  
  - REST API with Swagger documentation  
  - Smart Contract Event Listeners  
- **Libraries**: Supporting libraries for various functionalities:  
  - Forms  
  - Network  
  - UI components  

---
## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using Git.

```bash
git clone https://github.com/ary433/traceint
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
