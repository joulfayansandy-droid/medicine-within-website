# Medicine Within v2: The Astro Migration

This is a professional rebuild of the Medicine Within website using modern web technologies.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [View Transitions API](https://docs.astro.build/en/guides/view-transitions/)
- **Asset Optimization**: Astro's built-in Image component
- **Integrations**:
  - Hipsy (Event Management)
  - ConvertKit (Newsletter)
  - Calendly (Booking)

## Project Structure

- `src/layouts/`: Master layouts for the site.
- `src/components/`: Reusable Astro components (Header, Footer, Navigation, etc.).
- `src/pages/`: File-based routing for all site pages.
- `src/assets/`: Images and other assets processed by Astro's asset manager.
- `src/scripts/`: Modularized JavaScript/TypeScript logic.
- `public/`: Static assets that don't need processing (videos, favicons).

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Development Workflow

- Edit `.astro` files in `src/pages/` or `src/components/`.
- Modular JS goes into `src/scripts/`.
- Styling is handled via Tailwind classes and `src/styles/global.css`.
