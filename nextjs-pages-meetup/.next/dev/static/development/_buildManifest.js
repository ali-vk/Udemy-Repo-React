self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[meetupId]": [
    "static/chunks/pages/[meetupId].js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/new-meetup": [
    "static/chunks/pages/new-meetup.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/new-meetup",
    "/new-meetup",
    "/[meetupId]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()