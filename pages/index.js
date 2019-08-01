import { withApiHandler } from '../util/apiHandler';
import { Slide } from '../components';
import { Fragment } from 'react';

const Home = ({ posts }) => (
	<Fragment>
		<div className="header">
			<h1>Keystone Next Example</h1>
		</div>
		{posts ? <Slide posts={posts} /> : 'İçerik bulunamadı.'}
	</Fragment>
);

export default withApiHandler(Home)(
	{ method: 'get', url: 'api/posts' },
	'posts'
);
