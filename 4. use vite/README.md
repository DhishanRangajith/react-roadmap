1) install vite@6
2) install @vitejs/plugin-react
3) create file - vite.config.js
 
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    }
    });

4) serve - npx vite



vite
- Webpack is replaced with vite
- minimum configs
- super fast to Dev server startup time
- hot module reload(HMR) very fast
- cuncurrently update changes to the server(only change changed module)
- ES^+ and ts support
- use only with modern js
- in production builds - give rollup builds (tree-shaken)