# 🛠 Development Guide

This guide provides instructions and conventions for developing features in the `aravin.net` repository.

## For AI Agents

When interacting with this repository, keep the following context in mind:
- **Port Constraints**: Ensure that you run the `backend` first so that it successfully binds to port `1337`. The `frontend` relies on this endpoint during the `develop` script.
- **Monorepo Tools**: We use `npm-run-all` in the root `package.json` to execute commands across workspaces. Avoid running commands directly in the subdirectories unless specifically targeting a singular system (e.g., adding a dependency only to the frontend).
- **Environment Variables**: The frontend likely requires variables (e.g., `NEXT_PUBLIC_STRAPI_API_URL`) to know where to fetch data. The backend requires database connection strings (MySQL credentials) and AWS keys for S3 image uploads.
- **Strapi Customization**: 
  - To modify the API models, adjust the JSON schemas in `backend/src/api/*/content-types/*/schema.json`.
  - For custom routes, controllers, or services, edit the respective files under `backend/src/api/*/`.
- **Next.js Components**:
  - The site uses **TailwindCSS** and **DaisyUI**. Favor utility classes over custom CSS.
  - Core pages reside in `frontend/pages/`. Dynamic routing is used for articles (e.g., fetching by slug).
  - UI Components should be placed in `frontend/components/`.

## Common Tasks

### Adding a New Package
If you need to install a package for the frontend, run:
```bash
yarn --cwd frontend add <package-name>
```

For the backend:
```bash
yarn --cwd backend add <package-name>
```

### Creating a New Article Content Block
1. Add the new attribute to `backend/src/api/article/content-types/article/schema.json`.
2. Restart the Strapi server.
3. On the frontend, ensure the Next.js `getStaticProps` query fetches the new attribute.
4. Update the corresponding React component in `frontend/components/` to render the new field using TailwindCSS.

### Updating Tailwind Config
Modify `frontend/tailwind.config.js`. You will likely need to restart the Next.js dev server for changes to take effect properly.
