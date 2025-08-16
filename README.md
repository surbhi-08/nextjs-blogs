# Next.js Blog Website

A simple, appealing, and functional blog website built with Next.js and its default dependencies. This project demonstrates core web development techniques, including SCSS for styling, pure CSS animations, and client-side data filtering for search functionality, all without relying on third-party libraries.

### Features
-   **Static Site Generation (SSG):** Blog posts are pre-rendered at build time for performance and SEO.
-   **Client-side Search:** Dynamically filter blog posts based on a search query.
-   **Responsive Design:** The layout adapts to different screen sizes.
-   **SCSS Styling:** Structured and maintainable styling using SCSS modules.
-   **CSS Animations:** Subtle animations for a more engaging user experience.

### Technologies Used
-   Next.js (App Router)
-   TypeScript
-   SCSS

### Getting Started

#### Prerequisites
-   Node.js (version 18 or later)
-   npm

#### Installation
1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd nextjs-blogs
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    Note: `npm install sass` is the only external package required, and it's a compiler, not a runtime dependency.

#### Development Server
To run the development server:
```bash
npm run dev
```

#### Production Build
To build the production version of the app:
```bash
npm run build
```

#### Start Production Server
To start the production server:
```bash
npm run start
```

## Deploy on Vercel

Vercel URl : https://nextjs-blogs-rho.vercel.app/

<!-- additional info for folder structure -->

Here is a breakdown of my directories and files in this project:

public/: Contains static assets such as images and fonts that can be accessed directly from the root of the application.

src/: The main source code directory. All the application logic and components reside here.

layout.tsx: Defines the root layout for the entire application, including global styles and fonts.

page.tsx: The primary page component that contains all the other components and contains the main application logic.

page.module.scss: Contains all the component-specific styles for the main page.

components/: A collection of reusable React components.

Header.tsx, Footer.tsx: Components for the header and footer sections.

PostCard.tsx: The component responsible for displaying a single blog post.

...module.scss: Each component has its own SCSS module for scoped styling.

data/: Stores static data used by the application, such as posts.json.

styles/: Global styles that are applied across the entire application, such as globals.scss.

types/: This directory is used for storing TypeScript type definitions and interfaces, such as post.ts.

utils/: Contains utility functions and constant values used throughout the project.

