if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3CPQOBdCuUovrOcIbtWRo/_buildManifest.js",revision:"7123053484d9d179413f2ef4e560f5c1"},{url:"/_next/static/3CPQOBdCuUovrOcIbtWRo/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/913864824938d5e11d3881c3e812ac3f0503a127.74233627e55b79d0a3c5.js",revision:"ee773ffa2027f31273389a0412044fca"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.31387775794fb9735d83.js",revision:"8f09664ebc4bd3a75c4ea7feefe93ee7"},{url:"/_next/static/chunks/framework.659e5b1cdb8eb2b7461f.js",revision:"b0cf932d1c5267093f603bb890577cca"},{url:"/_next/static/chunks/main-2c77e718438e1fcdfb45.js",revision:"33995035503bb1fb578cec970c38ac29"},{url:"/_next/static/chunks/pages/About-7e93ae7c731a50c66e24.js",revision:"d55c6eb0a908e6b82de5cb025d63c13e"},{url:"/_next/static/chunks/pages/Communication-5c8f23930160669b1d87.js",revision:"a97b220c21e8302fe2b3212c5356a2b6"},{url:"/_next/static/chunks/pages/Contact-af4d33a69e2a8c8532ad.js",revision:"329e959a9524e2e7dc27df8ad8d1cb16"},{url:"/_next/static/chunks/pages/Education-e4516e9db8bde67f66fc.js",revision:"b66350c387f300c47219eb07c68d8976"},{url:"/_next/static/chunks/pages/Experience-ab21f5ae9a2b2e676848.js",revision:"29e7db4edef8975dfc06c6b3c39149e9"},{url:"/_next/static/chunks/pages/Footer-e3b8592220a79cee21f8.js",revision:"19f2e8fa5159f7176ab016d7da0fd6b1"},{url:"/_next/static/chunks/pages/Navbar-d2797a9754c706557895.js",revision:"ffc3317d06e624b42daccc98c0250dfd"},{url:"/_next/static/chunks/pages/Portfolio-ddeb5c73f0e8656add0f.js",revision:"47e07d61b04b5b2f005203b9a981fd54"},{url:"/_next/static/chunks/pages/Profile-1ae12f5f2310856c1715.js",revision:"ca801ad52523b2ef5e4c80b78fb48704"},{url:"/_next/static/chunks/pages/Skill-4272926430932fb8720e.js",revision:"d0ecd09f7f402dcd49425fd8f8f0861a"},{url:"/_next/static/chunks/pages/WorkExperience-ea45bdcacf5d728ea5e5.js",revision:"b4c9259b0121707668ace1775fea692a"},{url:"/_next/static/chunks/pages/_app-4355916935ab989b3cdd.js",revision:"a98ab8ce2537e4f6e9034d2e76a92dbd"},{url:"/_next/static/chunks/pages/_error-07b61053bae64e152862.js",revision:"49d09406b53b7196b5b86bfa61de8eca"},{url:"/_next/static/chunks/pages/index-e7b36af76c34423e85be.js",revision:"0f857d9c57095cc766569078aa04882a"},{url:"/_next/static/chunks/polyfills-0f7f0f508d490b5a473d.js",revision:"8f44e0698587becb11ef6f9d6d6e6677"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/7293302411fa261ce457.css",revision:"b3f2b6b688acabc0dd0ee4b6eb1da10a"},{url:"/css/aos.css",revision:"a38e7369a5fa53e51cf9604655924831"},{url:"/css/bootstrap.min.css",revision:"36b68f2f272355307d4f0e946ff2a9c4"},{url:"/favicon.ico",revision:"56747cd720ab21bd218b70fdc08580ea"},{url:"/icon/pooria 310x150.png",revision:"b11d27086ea10cb6e7646d8565516050"},{url:"/icon/pooria 310x310.png",revision:"4eda85d0e073ff98e2cc51328927fff1"},{url:"/icon/pooria150x150.png",revision:"64d7820271b1a5930db6f271c547b4af"},{url:"/icon/pooria16x16.png",revision:"ea685a968c5dd4f283c67cd8554b5c41"},{url:"/icon/pooria180x180.png",revision:"8ea991895e448b33c4fe3316b211f175"},{url:"/icon/pooria192x192.png",revision:"6fab3a9061801148352e3ae725eee9e0"},{url:"/icon/pooria32x32.png",revision:"56747cd720ab21bd218b70fdc08580ea"},{url:"/icon/pooria70x70.png",revision:"528cc6b33bf4f30dc9e85241884ccccf"},{url:"/images/Gallery.png",revision:"255492347fe56a9ad0e2befe5b54c270"},{url:"/images/Mina.png",revision:"1f61bd8d0495011725f7451776a29e5d"},{url:"/images/anthony.jpg",revision:"fedd3c549f9ca5cd5297cf7184ce3aac"},{url:"/images/cc-bg-1.jpg",revision:"35218858a32caf218a9166ed4b5e2580"},{url:"/images/creative-cv-screenshot.png",revision:"dc43fd86da94f0a22705b64dbd041fd9"},{url:"/images/dehgan.png",revision:"ca0b77f9004f3618e714bbd2a541b9af"},{url:"/images/drkarafariny.png",revision:"635389d794fdba682f7540bba6136299"},{url:"/images/eight.jpg",revision:"e2db2116c4b2410e27d7af22b3b321ee"},{url:"/images/fourteen.jpg",revision:"9a2b166c399801a9efef0c1c4e82b7d6"},{url:"/images/graphic-design-1.jpg",revision:"5339a1405e9661c71fffc086e73261db"},{url:"/images/graphic-design-2.jpg",revision:"a3e3f9d59dfd7557146c429ca2feef5a"},{url:"/images/graphic-design-3.jpg",revision:"d198adbb698973a2e5a6c9925adf2bb8"},{url:"/images/graphic-design-4.jpg",revision:"2e520cad6fa860193f8dadcb8b373940"},{url:"/images/hakupainportfolio.jpg",revision:"d9c7d94488daf183a13aed34defdd6fe"},{url:"/images/hakupian.png",revision:"8e82900dcf862e8f3e9435e2baef2bb0"},{url:"/images/photography-1.jpg",revision:"cd3c87d2ac243106f1d491d12814f402"},{url:"/images/photography-2.jpg",revision:"81860fa9595e78c280a90136a3930a14"},{url:"/images/photography-3.jpg",revision:"9e363f0fd0eecbd7f052fecf4db7bafc"},{url:"/images/photography-4.jpg",revision:"fefbcba01f54823cc88489191b717325"},{url:"/images/pooria.jpg",revision:"84fb2dc8dbeec28e761deb34cc8bc3cb"},{url:"/images/portfolio.png",revision:"bd8485aca4df16f38f4637c5f8d53d76"},{url:"/images/project-1.jpg",revision:"54f3853a299eea760496c32019323d2d"},{url:"/images/project-2.jpg",revision:"e40e8b42f03b3237f905b9a23e0c44c8"},{url:"/images/project-3.jpg",revision:"a95cf36b62e41d0e34650ace186cfb4a"},{url:"/images/project-4.jpg",revision:"a19962a905b7570090edcc1d7589ff5a"},{url:"/images/reference-image-1.jpg",revision:"e03a8e14b6a0849bc7ce78d301ef997f"},{url:"/images/reference-image-2.jpg",revision:"3eca11b0b7a33ab2fe5b4c863f0e1939"},{url:"/images/reference-image-3.jpg",revision:"6f023ede82987f12ede28a8280dfbea7"},{url:"/images/seven.jpg",revision:"2092d2ed8e544e906641421d94f9b41f"},{url:"/images/seventeen.jpg",revision:"05cc35047fa246150306c12fff77c336"},{url:"/images/staticmap.png",revision:"8221bc81454d40fd7900bda6d88770fd"},{url:"/images/twenty.png",revision:"8bb1a7e0dae900912c54ff454b6ea3a0"},{url:"/images/zhoon.png",revision:"8dbb5f6519383f2a4abd1e59fdbc7752"},{url:"/js/aos.js",revision:"f4823b8c64cf524bec0bbd3c0692e8d5"},{url:"/js/core/bootstrap.min.js",revision:"2b58e3a5d7ff7e82c553e342cd44fa1c"},{url:"/js/core/jquery.3.2.1.min.js",revision:"d157dbff4c8d0679bc8f88226cedb21a"},{url:"/js/core/popper.min.js",revision:"9fd1cd8f656aa751feed29996e8c27b1"},{url:"/js/now-ui-kit.js",revision:"441252fb61894c4acbebdcd0632e16ff"},{url:"/js/plugins/bootstrap-datepicker.js",revision:"a2edaa52724a078f89307a5967d46331"},{url:"/js/plugins/bootstrap-switch.js",revision:"12a2b882f957ddd0c9451c1df4336a0b"},{url:"/js/plugins/jquery.sharrre.js",revision:"1247e3369fd2a859c966c9562ced6ebe"},{url:"/js/plugins/nouislider.min.js",revision:"03f857db94e436c30079eb1cfa1d8028"},{url:"/resume/resume.jpg",revision:"b0fe178a985251637d5ceba4c9654b1b"},{url:"/scripts/main.js",revision:"eb69bbdee2aa0233da1f3240cd6e4663"},{url:"/styles/main.css",revision:"8beff07928f8f18d39aa5d3a077b4fc2"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
