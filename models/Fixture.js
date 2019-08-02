var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Fixture Model
 * ==========
 */

var Fixture = new keystone.List('Fixture', {
	map: { name: 'date' },
	autokey: { path: 'slug', from: 'date', unique: true },
	defaultSort: 'date',
});

Fixture.add({
	state: {
		type: Types.Select,
		options: 'finished, unfinished',
		default: 'unfinished',
		index: true,
	},
	league: { type: Types.Relationship, ref: 'League' },
	homeTeam: { type: Types.Relationship, ref: 'Team', index: true },
	homeTeamScore: { type: Number, default: 0 },
	awayTeam: { type: Types.Relationship, ref: 'Team', index: true },
	awayTeamScore: { type: Number, default: 0 },
	date: { type: Types.Date, index: true },
	categories: { type: Types.Relationship, ref: 'FixtureCategory' },
});

Fixture.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Fixture.defaultColumns
	= 'date|20%, categories|20%, state|20%, homeTeam|20%, awayTeam|20%';
Fixture.register();
