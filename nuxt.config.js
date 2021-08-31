export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "auth-demo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  router: {
    middleware: ["auth"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAOQ18MTjzhz4v8hNCHgltS3aKcOVlh2zA",
          authDomain: "react-client-e30f1.firebaseapp.com",
          databaseURL: "https://react-client-e30f1.firebaseio.com",
          projectId: "react-client-e30f1",
          storageBucket: "react-client-e30f1.appspot.com",
          messagingSenderId: "883111884898",
          appId: "1:883111884898:web:b4f36206a5ae3f89c8793b",
          measurementId: "G-5C2HC59N2J"
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              subscribeManually: false
            },
            ssr: true // default
          },
          firestore: {
            memoryOnly: false, // default
            chunkName:
              process.env.NODE_ENV !== "production" ? "firebase-auth" : "[id]", // default
            enablePersistence: true
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    },
    workbox: {
      importScripts: [
        // ...
        "/firebase-auth-sw.js"
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === "development"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
