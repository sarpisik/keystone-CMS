const withCSS = require('@zeit/next-css'),
	withSass = require('@zeit/next-sass'),
	withFonts = require('next-fonts'),
	withImages = require('next-images'),
	withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withSass(), withCSS, withFonts, withImages]);
