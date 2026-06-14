# aravin.net

This repository contains the source code for the `aravin.net` personal website, blog, and its corresponding backend content management system. It's structured as a monorepo containing multiple independently deployable services and sites.

## 📁 Repository Structure

The monorepo contains the following primary directories:

- **`frontend/`**: The main user-facing website built with **Next.js**. It statically exports pages using data fetched from the Strapi backend. It uses TailwindCSS for styling.
- **`backend/`**: A headless CMS built with **Strapi**. It manages the content (articles, categories, tags, global settings) that drives the frontend.
- **`static/`**: An older/alternative static site built with **Hugo**.
- **`tnc/`**: A static site built with **Hugo**, likely housing Terms and Conditions or policies.

## 🚀 Getting Started Locally

You can run both the frontend and backend simultaneously from the root of the project using `npm-run-all`.

### Prerequisites
- Node.js (v14.19.1 - v18.x.x recommended by the Strapi backend)
- Yarn or npm
- MySQL (configured for the Strapi backend)

### Installation
1. Install dependencies at the root:
   ```bash
   yarn install
   ```
2. You will also need to configure your environment variables. 
   - Look at `backend/.env.example` to create `backend/.env`.
   - Ensure you have a running MySQL database that matches the backend configuration.

### Running the Environment
From the root directory, run:

```bash
yarn develop
```

This command will:
1. Start the Strapi backend on `http://localhost:1337`.
2. Wait for the backend admin panel to become available.
3. Start the Next.js frontend dev server (usually on `http://localhost:3000`).

## 📚 Documentation for AI Agents & Developers

For comprehensive details on how the system is designed, deployed, and how to develop features, please refer to the `docs/` directory:

- [Architecture Guide](docs/ARCHITECTURE.md): Details on the headless CMS approach, the data models, and the frontend integrations.
- [Deployment Guide](docs/DEPLOYMENT.md): Instructions on how the backend, Next.js frontend, and Hugo sites are deployed to production.
- [Development Guide](docs/DEVELOPMENT.md): Tips, tricks, and conventions for navigating the codebase and making changes.

---
*This documentation was generated to assist human developers and AI agents in understanding the aravin.net ecosystem.*
