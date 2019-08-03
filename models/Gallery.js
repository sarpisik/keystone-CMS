var keystone = require('keystone');
var Types = keystone.Field.Types;
var { each, parallel } = require('async');
const cloudinary = require('cloudinary').v2;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	images: {
		type: Types.CloudinaryImages,
		folder: '/gallery',
	},
});

Gallery.schema.pre('remove', function (next) {
	try {
		each(
			this._doc.images,
			({ _doc: { public_id } }, callBackEach) =>
				cloudinary.uploader.destroy(public_id, callBackEach),
			err => {
				if (err) {
					console.error(err);
					next(err);
				} else {
					next();
				}
			}
		);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

Gallery.register();
