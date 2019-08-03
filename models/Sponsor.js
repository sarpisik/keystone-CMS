var keystone = require('keystone');
var Types = keystone.Field.Types;
var { onImageRemove } = require('../util/backend');

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
	image: {
		type: Types.CloudinaryImage,
		select: true,
		autoCleanup: true,
		selectPrefix: '/sponsors',
		folder: '/sponsors',
		generateFilename: file => file.originalname.replace(/ /g, '-'),
	},
});

Sponsor.schema.pre('remove', onImageRemove);
Sponsor.defaultColumns = 'name, createdDate|20%, image|20%';
Sponsor.register();
