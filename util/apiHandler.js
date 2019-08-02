import { Component } from 'react';
import url from 'url';
import axios from 'axios';
import getComponentName from './getComponentName';

const absoluteUrl = (req, setLocalhost) => {
	let protocol = 'https',
		host = req ? req.headers.host : window.location.hostname;
	if (host.indexOf('localhost') > -1) {
		if (setLocalhost) host = setLocalhost;
		protocol = 'http';
	}
	return url.format({
		protocol,
		host,
	});
};

export const apiHandler = (options, req) => {
	const baseUrl = absoluteUrl(req, 'localhost:3000');
	options.url =
		process.env.NODE_ENV === 'production'
			? baseUrl + options.url
			: options.url.indexOf('localhost') > -1
			? options.url
			: `http://localhost:3000${options.url}`;
	return axios(options);
};

export const withApiHandler = WrappedComponent => (
	request,
	reqData,
	queryString
) =>
	class extends Component {
		static displayName = `withAuthSync(${getComponentName(WrappedComponent)})`;

		static async getInitialProps(ctx) {
			try {
				// Parse query from url if exist.
				if (queryString) {
					request.data.searchBy = {
						[queryString]: ctx.query[queryString],
					};
				}
				// Request data.
				const { data } = await apiHandler(request, ctx.req);
				return { [reqData]: data };
			} catch (error) {
				console.error(error);
				return { [reqData]: null };
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
