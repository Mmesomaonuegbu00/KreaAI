# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js project (App Router) bootstrapped with `create-next-app`.
- Main UI and logic live in `src/`:
  - `app/` contains global styles, layout, and the main page (`page.tsx`).
  - `components/` contains feature components (e.g., `Hero`, `Navbar`, `Footer`, `Generate`).
- The project is image/media-heavy, with assets in `public/`.

## Key Patterns & Conventions
- **Component Structure:**
  - Each major UI section is a folder in `components/` with a single file (e.g., `Hero/Hero.tsx`).
  - Components use functional React with hooks (`useState`, `useEffect`, `useRef`).
  - Tailwind CSS utility classes are used for all styling.
- **Slider/Carousel Pattern:**
  - See `Hero/Hero.tsx` for a custom slider using cloned slides for infinite looping.
  - Uses `useRef` for DOM measurement and `useEffect` for responsive behavior.
  - Transition logic is managed with state (`isTransitioning`, `index`).
- **Image Handling:**
  - Images are loaded from both `public/` and external URLs.
  - Use `img` tags directly (Next.js image optimization is not enforced).

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Edit Main Page:**
  - Modify `src/app/page.tsx` for the homepage.
- **Component Development:**
  - Add new UI features as folders/files in `src/components/`.
- **Styling:**
  - Use Tailwind CSS classes in JSX. Global styles in `src/app/globals.css`.
- **No explicit test or build scripts** are defined beyond Next.js defaults.

## Integration & External Dependencies
- Uses `react-icons` for icons (see `Hero/Hero.tsx`).
- No custom API or backend integration is present in this codebase.
- No Redux, Zustand, or other state management libraries are used—state is local to components.

## Project-Specific Notes
- **Infinite Carousel:**
  - The `Hero` slider uses a clone-at-ends pattern for seamless looping. When the index reaches a clone, it snaps to the real slide without transition.
  - Responsive measurement is handled via `getBoundingClientRect` and `getComputedStyle`.
- **Image Sourcing:**
  - Local images are referenced as `/c2.png`, `/c4.png`, etc. in `public/`.
  - External images use Unsplash URLs.

## Examples
- To add a new carousel slide: update the `slides` array in `Hero/Hero.tsx`.
- To add a new section: create a folder and component in `src/components/`, then import/use it in `app/page.tsx`.

---

For more details, see `README.md` and component source files. If a pattern is unclear, review the relevant file in `src/components/` for a working example.
