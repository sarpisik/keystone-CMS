// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Next app
const next = require('next'),
	dev = process.env.NODE_ENV !== 'production',
	app = next({ dev }),
	// Require keystone
	keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
	'name': 'my-cms',
	'brand': 'my-cms',

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '7843oaerngdsm,.bgfl;kewaoipqw89y7q24ht54wkhry;klduy8gty',
});

// Models
keystone.import('models');

// Start Next App
app.prepare().then(() => {
	keystone.set('session store', 'mongo');
	// keystone.set('locals', {
	// 	_: require('lodash'),
	// 	env: keystone.get('env'),
	// 	utils: keystone.utils,
	// 	editable: keystone.content.editable,
	// });

	// Load your project's Routes
	keystone.set('routes', require('./routes')(app));

	// Admin UI navigation bar.
	keystone.set('nav', {
		posts: ['posts', 'post-categories'],
		galleries: 'galleries',
		enquiries: 'enquiries',
		users: 'users',
		teams: 'teams',
		leagues: 'leagues',
		fixtures: ['fixtures', 'fixture-categories'],
		sponsors: 'sponsors',
	});

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log(
			'----------------------------------------'
				+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
				+ '\n----------------------------------------'
				+ '\nYou have opted into email sending but have not provided'
				+ '\nmailgun credentials. Attempts to send will fail.'
				+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
				+ '\nset up your mailgun integration'
		);
	}

	keystone.start();
});
