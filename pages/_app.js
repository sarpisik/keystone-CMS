import App, { Container } from 'next/app';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../static/scss/mdb.scss';
import { Layout, Loading } from '../components';

export default class MyApp extends App {
	state = { isLoading: true, navBarHeight: 0, width: 0, height: 0 };

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
		this.setState({ isLoading: false });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	componentDidUpdate(prevProps, prevState) {
		prevState.isLoading !== this.state.isLoading &&
			this.navBar &&
			this.updateDimensions();
	}

	updateDimensions = () => {
		const width = window.innerWidth,
			height = window.innerHeight,
			navBarHeight = this.getNavBarHeight();
		this.setState({ width, height, navBarHeight });
	};

	setNavBarRef = el => (this.navBar = el);

	getNavBarHeight = () => this.navBar.clientHeight;

	render() {
		const { Component, pageProps } = this.props,
			{ isLoading, ...dimensions } = this.state,
			pageWrapperStyle = { paddingTop: dimensions.navBarHeight + 'px' };

		return (
			<Container>
				<Layout navBarRef={this.setNavBarRef}>
					{isLoading ? (
						<Loading />
					) : (
						<div style={pageWrapperStyle} className="row">
							<Component {...dimensions} {...pageProps} />
						</div>
					)}
				</Layout>
			</Container>
		);
	}
}
