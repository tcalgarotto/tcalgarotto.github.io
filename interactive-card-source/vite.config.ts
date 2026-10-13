import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({define:{'process.env.NODE_ENV':JSON.stringify('production')},plugins:[react()],build:{outDir:'../assets/interactive-card',emptyOutDir:false,lib:{entry:'src/main.tsx',formats:['es'],fileName:()=> 'card.js'},rolldownOptions:{output:{chunkFileNames:'chunks/[name]-[hash].js'}},minify:true}})
