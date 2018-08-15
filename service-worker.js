/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "baa891034da6984822bd54034169d317"
  },
  {
    "url": "api/base.html",
    "revision": "a48ad66d1c7e0ea4bc3f1f9b8184393c"
  },
  {
    "url": "api/hash.html",
    "revision": "00ebb2858c63e2dd689c199c6e806f45"
  },
  {
    "url": "api/index.html",
    "revision": "c6a1b902e2e4fb3c8535b8b10f31ed06"
  },
  {
    "url": "api/key.html",
    "revision": "d3e6acd95b111c32715dae13eaba663c"
  },
  {
    "url": "api/list.html",
    "revision": "845d1c566139e53aff37611daf068604"
  },
  {
    "url": "api/pool.html",
    "revision": "e42d00ad564889a45092375eb11e05df"
  },
  {
    "url": "api/set.html",
    "revision": "3cc826da767ab6a28e66795a5ce341d1"
  },
  {
    "url": "api/string.html",
    "revision": "05a7fbc0c95169de9f8c9d9923e79bf0"
  },
  {
    "url": "api/zset.html",
    "revision": "4f9638b40b8dba32bfe8b0f499a12c00"
  },
  {
    "url": "assets/css/0.styles.838cf428.css",
    "revision": "72089533987c43b9ba8ace4e313341ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.05ece676.js",
    "revision": "11dce8aadd2b1a90812ef53b1459f5c8"
  },
  {
    "url": "assets/js/11.51eaf782.js",
    "revision": "451cde744285c7bc3009f6db2816bb05"
  },
  {
    "url": "assets/js/12.736b7904.js",
    "revision": "09037c4be1040b6675baf05adcdcfca8"
  },
  {
    "url": "assets/js/13.bc4816a8.js",
    "revision": "b9af658c0fff28059c634119d253758f"
  },
  {
    "url": "assets/js/14.330b27dd.js",
    "revision": "615d1623e7b65ac1ed9a5ce627434786"
  },
  {
    "url": "assets/js/15.263a878b.js",
    "revision": "d5c5170f23ad9a8a67344926a2d1da35"
  },
  {
    "url": "assets/js/16.fbbfca5a.js",
    "revision": "7bb5848eca0476584beda18fc6d347c0"
  },
  {
    "url": "assets/js/17.66186075.js",
    "revision": "bf22625e676a9a4dcbf58c9f45204fb9"
  },
  {
    "url": "assets/js/18.1d080212.js",
    "revision": "b4e53e7c33dd3d454e9f59de44897fb8"
  },
  {
    "url": "assets/js/19.57e20801.js",
    "revision": "7d32ef864021b4ef8274c07cf577f7ff"
  },
  {
    "url": "assets/js/2.c450ab5b.js",
    "revision": "9b3db024196e39a903e5d2021e52f319"
  },
  {
    "url": "assets/js/20.8cf1ff0d.js",
    "revision": "ae8ee2fc2b00a1279aae9aabee25b74d"
  },
  {
    "url": "assets/js/21.e9d45bfd.js",
    "revision": "b61288183a7aba035868b506036c584b"
  },
  {
    "url": "assets/js/22.0d8f31b5.js",
    "revision": "9ea5e68f6cadbe4ca7a82a64d3641499"
  },
  {
    "url": "assets/js/23.6c8ca2e0.js",
    "revision": "91a02ea8073944831f622e5105f7e80d"
  },
  {
    "url": "assets/js/24.0e6b26e1.js",
    "revision": "9435be4f9e38ae919530f0953626dbc9"
  },
  {
    "url": "assets/js/25.1c82ced2.js",
    "revision": "2cc717c2af30efe7cce2a3b2a909cc41"
  },
  {
    "url": "assets/js/26.34f7a594.js",
    "revision": "3f83af8fc6e92d92f2ab6ed427266fca"
  },
  {
    "url": "assets/js/27.8a50ff49.js",
    "revision": "f8dbbc967c49c775ad65dab06833c7ce"
  },
  {
    "url": "assets/js/28.e22aea66.js",
    "revision": "c2d3bd1755a981366516f9876f698004"
  },
  {
    "url": "assets/js/29.2b4f3e2b.js",
    "revision": "c58bb80ce5dd132df483aab151688961"
  },
  {
    "url": "assets/js/3.1b360cd4.js",
    "revision": "1cd5cac033ecf13d45ed7113b3da422a"
  },
  {
    "url": "assets/js/30.8011fe8a.js",
    "revision": "0edf3d9e287fed1a7d7beb69620835e2"
  },
  {
    "url": "assets/js/4.587d3970.js",
    "revision": "a20491f5483ce07fb126d1b6f73f5993"
  },
  {
    "url": "assets/js/5.d84e540a.js",
    "revision": "0d6d7da445766bda34ef663d4e9e9d10"
  },
  {
    "url": "assets/js/6.623280a7.js",
    "revision": "0a311f6e393884badc6c3fa10c92c982"
  },
  {
    "url": "assets/js/7.939eb63d.js",
    "revision": "57cb6fd2979a8424df944aa6f99236a9"
  },
  {
    "url": "assets/js/8.ea129f7d.js",
    "revision": "dfdde18fe8c64f9b2a78ad02e62c2551"
  },
  {
    "url": "assets/js/9.247014a5.js",
    "revision": "4814dd281d938aedfd0601607a32d53d"
  },
  {
    "url": "assets/js/app.0c930ad4.js",
    "revision": "c1349fc8cbac2e333061292f6fa8d205"
  },
  {
    "url": "en/api/base.html",
    "revision": "2bf9fbe8c8f25c887d4dd9a8a6586d83"
  },
  {
    "url": "en/api/hash.html",
    "revision": "a9e7d116d025d51b6435140a8768d59a"
  },
  {
    "url": "en/api/index.html",
    "revision": "638bd5f182d7f7d5864b79a9df20b18d"
  },
  {
    "url": "en/api/key.html",
    "revision": "693148f235c11825f2d2d05803ef9206"
  },
  {
    "url": "en/api/list.html",
    "revision": "f6da46f175f0d869fc85015d758608b8"
  },
  {
    "url": "en/api/pool.html",
    "revision": "c1f97f218fc1099f04c2248f00950bb5"
  },
  {
    "url": "en/api/set.html",
    "revision": "5e1ac42c35c171641ff07b26ae6898d3"
  },
  {
    "url": "en/api/string.html",
    "revision": "22e804e148780de722640eee5a696bb5"
  },
  {
    "url": "en/api/zset.html",
    "revision": "75e37662ce24eadac3c50c203e6c13f1"
  },
  {
    "url": "en/guide/index.html",
    "revision": "301871c675b6bd8b6bbfd033365a26c8"
  },
  {
    "url": "en/index.html",
    "revision": "9352cab306b1a3ca2c6880000a5c816c"
  },
  {
    "url": "guide/index.html",
    "revision": "a1b719c37c5504838b27600919a0fbbe"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "25d18b3f903a191bac46214869bd41d5"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "0e542f4df96304da40fe91c17410b2ab"
  },
  {
    "url": "icons/apple-touch-icon-512x512.png",
    "revision": "fc57bb08f42ebce37f6190e5c38c0162"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "0e615d6b77cb879259e43631483f9d8c"
  },
  {
    "url": "images/biao.png",
    "revision": "482e37989fcd08c754b6401a9d0515aa"
  },
  {
    "url": "images/coin-btc.png",
    "revision": "6fbc051e55b8b5ed9389e879d3186e04"
  },
  {
    "url": "images/coin-eth.png",
    "revision": "4368a7459c94f9f572f2b3de5d874e60"
  },
  {
    "url": "images/coin-ltc.png",
    "revision": "c34641113e693481589846c4e6da12c0"
  },
  {
    "url": "images/favicon.png",
    "revision": "5423f638851bd441057fb363969ac6c9"
  },
  {
    "url": "images/paypal.png",
    "revision": "067bd556ce9e4c76538a8057adb6d596"
  },
  {
    "url": "images/xin.png",
    "revision": "482e37989fcd08c754b6401a9d0515aa"
  },
  {
    "url": "index.html",
    "revision": "30ccbb63b9b37a33484759d2e59f96d0"
  },
  {
    "url": "log/index.html",
    "revision": "3522698dae738928dc6c45716d4e02cc"
  },
  {
    "url": "support-tedis/index.html",
    "revision": "82cfea76f71a6bd46c1799fea18b0688"
  },
  {
    "url": "team/index.html",
    "revision": "6d23010f5b15139e792e014985ec33bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
