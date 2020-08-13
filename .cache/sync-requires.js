const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/404.js")
    )
  ),
  "component---src-pages-about-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/about.js")
    )
  ),
  "component---src-pages-elements-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/elements.js")
    )
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/index.js")
    )
  ),
  "component---src-pages-projects-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/projects.js")
    )
  ),
  "component---src-pages-scroll-stop-motion-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/scrollStopMotion.js")
    )
  ),
  "component---src-pages-tags-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/pages/tags.js")
    )
  ),
  "component---src-templates-blog-post-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/templates/blog-post.js")
    )
  ),
  "component---src-templates-tag-page-js": hot(
    preferDefault(
      require("/Users/alexanderlong/Documents/Code/pers/personalsite/src/templates/tag-page.js")
    )
  )
};
