# aravin.net

This repository contains the source code for the `aravin.net` personal website, portfolio, and technology blog.

## 🚀 Architecture

The site was recently completely overhauled into a modern, lightning-fast statically generated application:
- **Frontend Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Content Management:** Local Markdown files with YAML Frontmatter
- **Routing:** React Router DOM

This new architecture completely removes the need for a database (MySQL) or headless CMS (Strapi), meaning it is 100% portable, incredibly fast, and very cheap to host.

## 📁 Project Structure

- **`client/src/`**: Contains all React components, pages, and logic.
- **`client/public/content/articles/`**: This is where all blog posts live! They are standard `.md` files.
- **`client/public/images/`**: Contains static images, including thumbnails and inline article images.

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- Yarn or npm

### Installation & Running
1. Navigate into the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

The site will be available at `http://localhost:5173`.

## ✍️ How to Add a New Article

Adding a new article is as simple as creating a new markdown file!

1. Create a new `.md` file in `client/public/content/articles/`. The filename will become the URL slug.
2. Add the required YAML frontmatter at the very top of the file:

```markdown
---
title: "Your Awesome Article Title"
description: "A short description that will appear on cards and SEO."
published_at: 2024-10-15T10:00:00Z
image: /images/articles/your-thumbnail.png
category:
  name: "React"
tags:
  - slug: "react"
  - slug: "frontend"
---

# Your content starts here!
You can use standard markdown formatting.
```

3. Save the file. The site will automatically detect it and render it on the `/articles` page, sorting it seamlessly by the `published_at` date!
