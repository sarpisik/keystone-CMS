var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Sponsor Model
 * ==========
 */

var Sponsor = new keystone.List('Sponsor', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Sponsor.add({
	name: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	createdDate: {
		type: Types.Date,
		index: true,
	},
	image: { type: Types.CloudinaryImage },
});

Sponsor.defaultColumns = 'name, createdDate|20%, image|20%';
Sponsor.register();
