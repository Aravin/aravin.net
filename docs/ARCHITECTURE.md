# 🏗 Architecture

The `aravin.net` repository follows a decoupled, **Headless CMS** architecture. The responsibilities of content management and content delivery are split across a backend application and a frontend application, respectively.

## 1. High-Level Overview

```mermaid
graph LR
    A[Strapi Backend (Port 1337)] -->|REST/GraphQL API| B[Next.js Frontend]
    B -->|Build Time (next export)| C[Static HTML/JS/CSS]
    C --> D[End User Browser]
    E[MySQL Database] --> A
```

- **Content Management**: A Strapi instance handles all content creation, editing, and media uploads.
- **Content Delivery**: A Next.js application consumes the Strapi APIs and generates static pages. 
- **Database**: A MySQL database serves as the persistent data store for the Strapi application.

## 2. Backend (Strapi)
Located in the `backend/` directory.

### Core Technologies
- **Strapi (v4.15.2)**: A Node.js based headless CMS.
- **Database**: MySQL.
- **Media Storage**: Configured to use `@strapi/provider-upload-aws-s3` for storing images and assets externally (likely in an AWS S3 bucket).

### Content Types (Data Models)
The CMS defines several core entities in `backend/src/api/`:
- **Article**: The primary blog post entity. Contains a `title`, `description`, `content` (Rich Text), `slug`, `image`, and relations to `category` and `tags`. Draft & Publish workflow is enabled.
- **Category**: A grouping for articles (One-to-One relation with Article).
- **Tag**: Granular topics for articles (Many-to-Many relation with Article).
- **Global**: Likely a singleton content type for site-wide settings (e.g., SEO metadata, site name).

## 3. Frontend (Next.js)
Located in the `frontend/` directory.

### Core Technologies
- **Next.js (v13.4.4)**: Used primarily for Static Site Generation (SSG).
- **Styling**: TailwindCSS, DaisyUI, and PostCSS.
- **Icons**: FontAwesome & HeroIcons.
- **Content Rendering**: Uses `react-markdown` and `rehype-raw` to safely render the rich text content provided by Strapi.

### Data Fetching Strategy
Since the frontend deployment script runs `next build && next export`, the application fetches content from the Strapi backend at *build time* using Next.js functions like `getStaticProps` and `getStaticPaths`. 

This approach ensures the live website is incredibly fast, highly secure (no direct database connection from the public site), and easy to cache on a CDN.

## 4. Legacy / Sub-Sites (Hugo)
The repository also contains two directories, `static/` and `tnc/`, which are independent **Hugo** static site generator projects. 
- These were likely previous iterations of the website or separate domains/subdomains (like a terms & conditions site) that are maintained alongside the main application.
- They do not rely on the Strapi backend.
