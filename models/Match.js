var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Match Model
 * ==========
 */

var Match = new keystone.List('Match', {
	map: { name: 'date' },
	autokey: { path: 'slug', from: 'date', unique: true },
	defaultSort: 'date',
});

Match.add({
	state: {
		type: Types.Select,
		options: 'finished, unfinished',
		default: 'unfinished',
		index: true,
	},
	category: { type: Types.Relationship, ref: 'MatchCategory' },
	season: { type: Types.Relationship, ref: 'Season' },
	homeTeam: { type: Types.Relationship, ref: 'Team', index: true },
	homeTeamScore: { type: String, default: '' },
	awayTeam: { type: Types.Relationship, ref: 'Team', index: true },
	awayTeamScore: { type: String, default: '' },
	date: { type: Types.Date, index: true },
	location: { type: String },
});

Match.defaultColumns
	= 'date|20%, category|20%, state|20%, homeTeam|20%, awayTeam|20%';
Match.register();
