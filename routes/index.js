const { POSTS, HOME_PAGE_MATCHES } = require('../constants/api'),
	{ getPostsHandler } = require('../controllers/Post'),
	{ getHomePageMatches } = require('../controllers/Match');

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {
	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.get(POSTS, getPostsHandler);

	keystoneApp.get(HOME_PAGE_MATCHES, getHomePageMatches);

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
