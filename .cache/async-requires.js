// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": () =>
    import(
      "./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */
    ),
  "component---src-pages-404-js": () =>
    import(
      "./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */
    ),
  "component---src-pages-about-js": () =>
    import(
      "./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */
    ),
  "component---src-pages-elements-js": () =>
    import(
      "./../../../src/pages/elements.js" /* webpackChunkName: "component---src-pages-elements-js" */
    ),
  "component---src-pages-index-js": () =>
    import(
      "./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */
    ),
  "component---src-pages-projects-js": () =>
    import(
      "./../../../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */
    ),
  "component---src-pages-scroll-stop-motion-js": () =>
    import(
      "./../../../src/pages/scrollStopMotion.js" /* webpackChunkName: "component---src-pages-scroll-stop-motion-js" */
    ),
  "component---src-pages-tags-js": () =>
    import(
      "./../../../src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */
    ),
  "component---src-templates-blog-post-js": () =>
    import(
      "./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */
    ),
  "component---src-templates-tag-page-js": () =>
    import(
      "./../../../src/templates/tag-page.js" /* webpackChunkName: "component---src-templates-tag-page-js" */
    )
};
