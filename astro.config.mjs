// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
// import DecapCMS from 'astro-decap-cms';


import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

});