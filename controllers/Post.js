const keystone = require('keystone');

module.exports.getPostsHandler = ({ query: { count } }, res, next) =>
	keystone
		.list('Post')
		.model.find()
		.where('state', 'published')
		.sort('-publishedDate')
		.limit(parseInt(count, 10))
		.exec(function (err, results) {
			if (err) throw err;
			res.json(results);
		});
