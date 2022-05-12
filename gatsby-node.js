exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/settings/)) {
    page.matchPath = '/settings/*';
    createPage(page);
  }
}
