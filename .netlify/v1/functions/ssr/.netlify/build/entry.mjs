import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BU6mgaRa.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aviso-legal.astro.mjs');
const _page2 = () => import('./pages/farmacia.astro.mjs');
const _page3 = () => import('./pages/politica-cookies.astro.mjs');
const _page4 = () => import('./pages/politica-privacidad.astro.mjs');
const _page5 = () => import('./pages/punto-limpio.astro.mjs');
const _page6 = () => import('./pages/transporte.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aviso-legal.astro", _page1],
    ["src/pages/farmacia.astro", _page2],
    ["src/pages/politica-cookies.astro", _page3],
    ["src/pages/politica-privacidad.astro", _page4],
    ["src/pages/punto-limpio.astro", _page5],
    ["src/pages/transporte.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b6500b74-0f26-461c-9c05-c35c496ffbf5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
