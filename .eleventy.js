module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true,
    pathPrefix: "/course-20-21/",
    dir: {
      includes: "_includes",
      data: "_data",
      output: "docs"
    }
  }
}
