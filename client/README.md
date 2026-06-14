# Aravin.net Client

This is the frontend client for `aravin.net`. It has been rebuilt from the ground up using **React 19**, **Vite**, and **Tailwind CSS v4** to be incredibly fast, simple, and entirely static.

## 🚀 Getting Started

To run the site locally:

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Start the development server:
   ```bash
   yarn dev
   ```
   The site will be running at `http://localhost:5173`.

## ✍️ How to Add a New Post

All articles are driven by local Markdown files. No database or CMS server is required!

1. **Create the file:** 
   Navigate to `public/content/articles/` and create a new `.md` file. The filename you choose will automatically become the URL slug for the post (e.g., `my-new-post.md` becomes `/article/my-new-post`).

2. **Add Frontmatter:**
   Every article **must** start with YAML frontmatter to define its metadata. Copy and paste this template at the very top of your new file:

   ```markdown
   ---
   title: "Your Amazing Article Title Here"
   description: "A short snippet describing the article. This appears on the card grid."
   published_at: 2024-10-15T10:00:00Z
   image: /images/articles/your-thumbnail-image.png
   category:
     name: "React"
   tags:
     - slug: "react"
     - slug: "frontend"
   ---
   
   # Write your content here!
   You can use **standard** Markdown formatting!
   ```

3. **Add Images (Optional):**
   If you want to include a thumbnail or inline images, drop the image files into `public/images/articles/` and reference them in your markdown like `![Alt Text](/images/articles/your-image.png)`.

4. **Save and View:**
   As soon as you save the file, the frontend will automatically detect it, parse the frontmatter, and dynamically sort it into the `/articles` feed based on the `published_at` date!

## 🌍 How to Deploy

Because this project uses Vite, it produces a bundle of purely static files (HTML/CSS/JS/Assets) that can be hosted on almost any platform (Vercel, Netlify, Cloudflare Pages, GitHub Pages, AWS S3, etc.).

1. **Build the Production Bundle:**
   ```bash
   yarn build
   ```
   This will run TypeScript type checking (`tsc`) and then package your entire application into a highly optimized `dist/` folder.

2. **Deploying to Vercel (Recommended):**
   - Connect your GitHub repository to Vercel.
   - Set the Framework Preset to **Vite**.
   - Build Command: `yarn build`
   - Output Directory: `dist`
   - Install Command: `yarn install`
   
   Vercel will automatically deploy your site every time you push to the `main` branch.

3. **Deploying to Netlify / Cloudflare Pages:**
   - The settings are exactly the same. Point the build command to `yarn build` and the output directory to `dist`.

Whenever you write a new article, simply commit the `.md` file to your repository and push. Your hosting provider will automatically rebuild the site and publish your new post!
