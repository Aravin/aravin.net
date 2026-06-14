# 🚀 Deployment

The `aravin.net` monorepo has multiple deployment pipelines corresponding to its different components.

## Backend (Strapi)

The Strapi backend is manually deployed to a virtual machine (VM).
- **Target environment**: `vm.aravin.net`
- **Command**: `yarn deploy` inside the `backend/` directory triggers a manual deploy sequence.
- **Media Storage**: The production backend is configured to use AWS S3 for media uploads (via `@strapi/provider-upload-aws-s3`). This ensures that image assets persist across VM redeployments and are delivered quickly.
- **Database**: Ensure the VM has access to the production MySQL database.

## Frontend (Next.js)

The Next.js frontend is built as a static site and can be hosted on any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, or AWS S3 + CloudFront).
- **Build Process**: The command `yarn deploy` inside the `frontend/` directory executes `next build && next export`.
- **Note**: Because the frontend is statically generated at build time, any content updates made in the Strapi CMS will require a *rebuild* of the frontend application to reflect the changes live. Typically, this is achieved by configuring webhooks in Strapi to trigger a build pipeline on the frontend hosting provider when an article is published.

## Hugo Static Sites (`static/` & `tnc/`)

Both Hugo directories are configured for deployment on **Netlify**.
- Each directory contains a `netlify.toml` file detailing the build settings (`hugo --gc --minify`) and publish directories (`public`).
- These are likely hooked up directly to Netlify via GitHub integrations, where pushes to the repository automatically trigger rebuilds of the static assets.
