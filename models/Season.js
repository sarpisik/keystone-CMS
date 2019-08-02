var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Season Model
 * ==========
 */

var Season = new keystone.List('Season', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
	defaultSort: 'name',
});

Season.add({
	state: {
		type: Types.Select,
		options: 'finished, unfinished',
		default: 'unfinished',
		index: true,
	},
	name: { type: String, index: true, required: true },
});

Season.defaultColumns = 'name';
Season.register();
