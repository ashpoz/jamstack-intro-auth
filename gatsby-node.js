exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/^\/dashboard/)) {
        page.matchPath = '/dashboard/*';
        actions.createPage(path);
    }
};