import { apiHandler } from '../util/apiHandler';
import { Slide, Matches } from '../components';
import { Fragment } from 'react';
import axios from 'axios';
import { POSTS, HOME_PAGE_MATCHES } from '../constants/api';

const Home = ({ posts, matches }) => {
	console.log(posts);
	console.log(matches);
	return (
		<Fragment>
			<div className="header">
				<h1>Keystone Next Example</h1>
			</div>
			{posts ? <Slide posts={posts} /> : 'İçerik bulunamadı.'}
			{matches && (
				<Matches
					finished={matches.finished[0]}
					unfinished={matches.unfinished[0]}
				/>
			)}
		</Fragment>
	);
};

Home.getInitialProps = async ({ req }) => {
	try {
		const posts = { method: 'get', url: POSTS },
			matches = { method: 'get', url: HOME_PAGE_MATCHES },
			[postsApi, matchesApi] = await axios.all([
				apiHandler(posts, req),
				apiHandler(matches, req),
			]);
		return {
			posts: postsApi.data,
			matches: matchesApi.data,
		};
	} catch (error) {
		console.error(error);
		return {
			posts: null,
			matches: null,
		};
	}
};

export default Home;
