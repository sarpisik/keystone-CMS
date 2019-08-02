var keystone = require('keystone');

/**
 * MatchCategory Model
 * ==================
 */

var MatchCategory = new keystone.List('MatchCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

MatchCategory.add({
	name: { type: String, required: true },
});

MatchCategory.relationship({
	ref: 'Match',
	path: 'matches',
	refPath: 'category',
});

MatchCategory.register();
