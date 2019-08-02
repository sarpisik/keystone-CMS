var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Model
 * ==========
 */

var Team = new keystone.List('Team', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Team.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdDate: {
		type: Types.Date,
		index: true,
	},
	image: { type: Types.CloudinaryImage },
});

Team.defaultColumns = 'title, createdDate|20%, author|20%, image|20%';
Team.register();
