const yaml = require('js-yaml');

module.exports = (eleventyConfig) => {
  // Add YAML data file support (https://www.11ty.dev/docs/data-custom/)
  eleventyConfig.addDataExtension('yml', (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/style.css');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
