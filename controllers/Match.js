const keystone = require('keystone'),
	{ parallel } = require('async');

module.exports.getHomePageMatches = (req, res, next) =>
	parallel(
		{
			finished: callback =>
				keystone
					.list('Match')
					.model.find()
					.populate('awayTeam category homeTeam season')
					.where('state', 'finished')
					.sort('-date')
					.limit(1)
					.exec(callback),
			unfinished: callback =>
				keystone
					.list('Match')
					.model.find()
					.populate('awayTeam category homeTeam season')
					.where('state', 'unfinished')
					.sort('date')
					.limit(1)
					.exec(callback),
		},
		(err, results) => {
			if (err) throw err;
			res.json(results);
		}
	);
