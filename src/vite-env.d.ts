/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />
/// <reference types="vite-plugin-svg-icons/client" />

declare global {
  const Link: typeof import('react-router-dom')['Link']
}
