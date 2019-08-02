var keystone = require('keystone');

/**
 * League Model
 * ==================
 */

var League = new keystone.List('League', {
	map: { name: 'title' },
	autokey: { from: 'name', path: 'key', unique: true },
});

League.add({
	title: { type: String, required: true },
});

League.register();
