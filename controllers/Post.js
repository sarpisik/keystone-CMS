const keystone = require('keystone');

module.exports.getPostsHandler = (req, res, next) =>
	keystone
		.list('Post')
		.model.find()
		.where('state', 'published')
		.sort('-publishedDate')
		.exec(function (err, results) {
			if (err) throw err;
			res.json(results);
		});
