'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "496b48433f5298b8648b79a99266d37a",
"assets/AssetManifest.bin.json": "d4b629ec793f7011a8a40e9f83a2e2a1",
"assets/AssetManifest.json": "0ca2a15a7ccb976b78e8e48bb572c9fa",
"assets/assets/bell-notification.svg": "e9d48c862cddb518fcc360c0d4a225ca",
"assets/assets/body_bg.png": "af9c0f03ad9fc0eab0f6b1b714a036fb",
"assets/assets/body_bg_inside.jpg": "0705ddad45624c88d4d00b8105182eb2",
"assets/assets/cabinet-filing.svg": "56e4f28d5a11f5a4902af878450c3564",
"assets/assets/calendar.svg": "c6bd6c4d8a5a86180b64ce8145573a59",
"assets/assets/chat-dots.svg": "f59bfbda27df76b296611d796c1f3e91",
"assets/assets/chat-exclamation.svg": "763c1baf2e3e315cafe7b01aa893fcf1",
"assets/assets/chat-info.svg": "73a3ac9d23aa9ca1ebcb9a1fd8d00e22",
"assets/assets/chats.svg": "c6f4ee38a8c2b339799a466db7bb4bd1",
"assets/assets/clipboard-check.svg": "08f4cab75fc405490c42e381f2f1f3ec",
"assets/assets/clipboard-search.svg": "14cf008d957e187237a4cfd6ab16c2d3",
"assets/assets/credit-card.svg": "0d845ca71d3804c0b5b460a1ff200759",
"assets/assets/dotenv.development": "c2f2be32224b9af094ae42ba8e31fdfe",
"assets/assets/dotenv.production": "95089996c7355cbb6ad93bef0f56380e",
"assets/assets/envelope.svg": "66d93a6e88cebea62a0778745b65f96b",
"assets/assets/eye.svg": "0c482bd93df36adeb422f823fbe3bef5",
"assets/assets/file-list.svg": "64055de123279a48b1c46b0f3be1110a",
"assets/assets/file-text.svg": "c021ebeb75368be6ea71ac35676f01b0",
"assets/assets/filter.svg": "fabfddc679c397142d4fdf69b20db3fc",
"assets/assets/fire.svg": "a524f07eb8aac405b02c7a774516bd6b",
"assets/assets/fonts/STIXTwoText.ttf": "f30770c0c6d2f28df776fa38e697dd4d",
"assets/assets/GiftAppSplash.svg": "8ae052e32871461990265b3e16b8c71c",
"assets/assets/GiftAppSplash1%2520-%2520Copy.svg": "b185d8c5bccdee6762227897a688f574",
"assets/assets/GiftAppSplash1.svg": "b185d8c5bccdee6762227897a688f574",
"assets/assets/GiftBoxHHO.png": "1ec19e668cace6db0508b9b64ddc5fc5",
"assets/assets/GiftLogo.svg": "33d3f83c9715f1bf3c49c1d1813718b9",
"assets/assets/grid-6.svg": "89bf3393b57111de9ab2b2dc7efb5554",
"assets/assets/grid-circle.svg": "feab85e8b86b12270e7494196aaac9d0",
"assets/assets/grid-square-circle.svg": "bccc169c2c736a159e8445ef79dcc6af",
"assets/assets/grid-square.svg": "ebbe395d57fb70239962a8af8f1b6fe6",
"assets/assets/grid-web-2%2520-%2520Copy.svg": "e5b15e2ff0e5dc825d3300cc900f9092",
"assets/assets/grid-web-2.svg": "e5b15e2ff0e5dc825d3300cc900f9092",
"assets/assets/grid-web-3.svg": "2a533455053829d5063d5cdda49c2ad1",
"assets/assets/grid-web-5.svg": "107c9128b457ceba7f233e6397104b09",
"assets/assets/heart.svg": "f1caeaa4a1a91d5b0c79a82fb94ff895",
"assets/assets/HHO-GIFT-APP.svg": "a01be07524701d49e9bf6ec7a254d1c3",
"assets/assets/HHO-GiftsTitle.svg": "4f34ffa62cdd2ab5963a962cd02ee037",
"assets/assets/home.svg": "1ea69c6cf5322c347bc3451729366668",
"assets/assets/images/APPROVE-IMAGE3.png": "2a011e5fc4692d7ed3e2710d2afe3281",
"assets/assets/images/collectioncover.jpg": "311e0040e601c18ca36139e134bb68ba",
"assets/assets/images/gallaryIcon.png": "d70db500e6f0e5e926fc05d399694d1d",
"assets/assets/images/galleryIcon.png": "26822b7d1902f8dcdf3e58d748c0a64b",
"assets/assets/images/galleryIcon1.png": "32389c6f15d82e387f8c5bfa631c0f61",
"assets/assets/images/logo.png": "ca23f9ec90afe1f59eaf31c7e8e328b8",
"assets/assets/images/PHOTOS.png": "6eb4ae0857c73a22a4f6d53bbc2603b1",
"assets/assets/images/placeholder.jpg": "6e864a490d639bf116730bc9bb879062",
"assets/assets/images/RecentCollections.png": "94ff16a66f419319f4293fb110cbebb6",
"assets/assets/Islamicpatternbody_bg.jpg": "0705ddad45624c88d4d00b8105182eb2",
"assets/assets/locales/ar.json": "c978933fa6c52e15d5e3c7d9305a4936",
"assets/assets/locales/en.json": "c03ab1890146249ca24c15990d12d73c",
"assets/assets/log-out.svg": "3be31f06f9d20d9fad8386380531798a",
"assets/assets/map.svg": "441edf05f8fea16fb04dee339efc59cf",
"assets/assets/menu-left.svg": "9ad94f8f83784cd1374557ba87a86d21",
"assets/assets/minus.svg": "4f33709fecaece2a25dffd14a43df272",
"assets/assets/moon.svg": "619de177f1128d8ae2577e732ec03cd2",
"assets/assets/more-horizontal-circle.svg": "c26590d1ef21b840c077e44ec05cb98c",
"assets/assets/notification.riv": "a347740424e15bb9441b2231acb671e9",
"assets/assets/pen-tool.svg": "a84eec6bc6d318f55f1226c00f103275",
"assets/assets/placeholder.jpg": "6e864a490d639bf116730bc9bb879062",
"assets/assets/Popsound.mp3": "11bfb471af9dbec9f3d20496f7b80f3d",
"assets/assets/seamless.png": "de7adb71f18c095be0da2efb1a330ed0",
"assets/assets/search.svg": "baca6c3882f1390c2d327271bcdc2169",
"assets/assets/send.svg": "4246d31e325e73c54c6d99d31338f608",
"assets/assets/settings.svg": "b7b16205b70e8b6c60e637827c76f35c",
"assets/assets/settingsfill.svg": "1f9d0f4cf2e28fc5812f05ca996a6dc0",
"assets/assets/shield-lock.svg": "96a74048200ad0f01408ccbcf8e3126d",
"assets/assets/shopping-basket.svg": "83bbc12539a47e458e41aa3c17682ed2",
"assets/assets/sliders-horizontal-alt.svg": "e42a37336ea1a12df4eb5fb5ba56ae0c",
"assets/assets/Smart_UI_Notification_Tech.wav": "fabb80199beb3ae2058a6ad46be61978",
"assets/assets/sun.svg": "f959f8a4222489ab260bcdf0c985cf90",
"assets/assets/times-circle.svg": "4ca321a08561a248bf7eda70f398476a",
"assets/assets/times.svg": "c54bba2f91e77013bf715db472cc823c",
"assets/assets/tool.svg": "a3537eaaa5092e1d2f888a1340018bca",
"assets/assets/user.svg": "e307872b84b79d980703a37ed426ac3d",
"assets/assets/users.svg": "f7761ccc01237da4fd37ce8a763181af",
"assets/assets/verify.svg": "b4f0251eda550c4c029cc57b143db041",
"assets/assets/web_support.js": "d7e6c537897bc4e534d2ee4fe858433b",
"assets/assets/whitePaternbackground.png": "9b21375a68930f098587cccff955d5fa",
"assets/body_bg.png": "af9c0f03ad9fc0eab0f6b1b714a036fb",
"assets/FontManifest.json": "94e10651b31136444c1f80d73444f5b1",
"assets/fonts/MaterialIcons-Regular.otf": "e9fc6128364e6b51b0cc8c97b165c32f",
"assets/NOTICES": "fe2c66c17ef48346c2bcbd76fa01eebb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b89682a9e4402af142ce2b40cd2c98b0",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/whitePaternbackground.png": "9b21375a68930f098587cccff955d5fa",
"callback.html": "7652f85d5085785ce39cacffdf7e974b",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"dotenv.development": "c2f2be32224b9af094ae42ba8e31fdfe",
"dotenv.production": "95089996c7355cbb6ad93bef0f56380e",
"favicon.png": "a43164b03ac3370833d830341f0f41ec",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e61baff898064aab43a126a5460f33f2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/MBN-Icon%20maskable-12.png": "66cb803fe871087a590ea543b461db07",
"icons/MBN-Icon%20maskable-192.png": "55cfd024bc39361650b048c80ecb2366",
"icons/MBN-Icon-192-55.png": "5d31eb574f643a62f7352f5aa5003cb5",
"icons/MBN-Icon-192.png": "55cfd024bc39361650b048c80ecb2366",
"icons/MBN-Icon-200x68.png": "49c0dfdeacd21f2e667b9d7cc2547a89",
"icons/MBN-Icon-512.png": "66cb803fe871087a590ea543b461db07",
"icons/MBN-Icon-maskable-512.png": "5d31eb574f643a62f7352f5aa5003cb5",
"index.html": "ed57b1625a3a9b056f15e4fe1a370a0e",
"/": "ed57b1625a3a9b056f15e4fe1a370a0e",
"main.dart.js": "fd30d51547ae2e90429ddc8a74b2e2c6",
"manifest.json": "6515a0824bdb2e44783f7e85f5b6d242",
"saml_auth.js": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "bc091a26b737289042af469deabf7e4c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
