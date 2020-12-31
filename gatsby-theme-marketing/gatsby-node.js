const withDefaults = require('./defaultOptions');

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);

  // These templates are graphql queries that import components
  const homepageTemplate = require.resolve('./src/templates/HomepageQuery.tsx');

  createPage({
    path: basePath,
    component: homepageTemplate
  });
};