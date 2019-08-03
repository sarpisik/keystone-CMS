const cloudinary = require('cloudinary').v2;

module.exports.onImageRemove = async function (next) {
	try {
		const { result } = await cloudinary.uploader.destroy(
			this._doc.image.public_id
		);
		result === 'ok' ? next() : next(result);
		next();
	} catch (error) {
		console.error(error);
		next(error);
	}
};
