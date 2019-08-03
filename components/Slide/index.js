import React from 'react';
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselCaption,
	MDBView,
	MDBRow,
	MDBMask,
} from 'mdbreact';

const SlideItem = (
	{ title, content: { brief }, image: { secure_url } },
	index
) => (
	<MDBCarouselItem key={index} itemId={Number(index) + 1}>
		<MDBView>
			<div
				style={{
					height: '100vh',
					width: '100%',
					backgroundImage: `url(${secure_url})`,
					backgroundSize: 'cover',
					backgroundPosition: '50%',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<MDBMask overlay="black-light" />
		</MDBView>
		<MDBCarouselCaption>
			<h3 className="h3-responsive">{title}</h3>
			<div dangerouslySetInnerHTML={{ __html: brief }} />
		</MDBCarouselCaption>
	</MDBCarouselItem>
);

const Slide = ({ posts, navBarHeight, height }) => {
	const slideImageHeight = { height: height - navBarHeight + 'px' };
	return (
		<MDBCarousel
			activeItem={1}
			length={3}
			showControls={true}
			showIndicators={false}
			className="z-depth-1 w-100"
			slide>
			<div className="carousel-inner" style={slideImageHeight}>
				{posts.map(SlideItem)}
			</div>
		</MDBCarousel>
	);
};

export default Slide;
