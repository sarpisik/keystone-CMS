var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Model
 * ==========
 */

var Team = new keystone.List('Team', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Team.add({
	name: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdDate: {
		type: Types.Date,
		index: true,
	},
	image: { type: Types.CloudinaryImage },
});

Team.defaultColumns = 'name, createdDate|20%, author|20%, image|20%';
Team.register();
