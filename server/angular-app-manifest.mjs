
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-angular-material/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-angular-material"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23651, hash: '2eb3164c77cadc3e6e840c763df5683487f06d81412cf3b2f51bce808a30aaf7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17225, hash: 'c63ea5c928c35472a740578bc25a9a70608e1fbdbb352a7285808ed037f18729', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44169, hash: '6b2a546cca19106680e3569479adfab66680e867000ce8dba26597fced4abc5a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
