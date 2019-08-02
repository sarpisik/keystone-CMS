var keystone = require('keystone');

/**
 * FixtureCategory Model
 * ==================
 */

var FixtureCategory = new keystone.List('FixtureCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

FixtureCategory.add({
	name: { type: String, required: true },
});

FixtureCategory.relationship({
	ref: 'Fixture',
	path: 'fixtures',
	refPath: 'categories',
});

FixtureCategory.register();
