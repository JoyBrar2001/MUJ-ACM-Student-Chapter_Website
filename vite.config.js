/** 
 * FileName - vite.config.js
 * FileType - .js (Js file)
 * Lines - 26
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - Vite Configuration file
 * ///////// DO NOT MODIFY ///////////
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/MUJ-ACM-Student-Chapter_Website/',
  plugins: [react()],
})
