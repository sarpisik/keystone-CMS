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
			<img className="d-block w-100" src={secure_url} alt={title} />
			<MDBMask overlay="black-light" />
		</MDBView>
		<MDBCarouselCaption>
			<h3 className="h3-responsive">{title}</h3>
			<div dangerouslySetInnerHTML={{ __html: brief }} />
		</MDBCarouselCaption>
	</MDBCarouselItem>
);

const Slide = ({ posts }) => {
	return (
		<MDBRow>
			<MDBCarousel
				activeItem={1}
				length={3}
				showControls={true}
				showIndicators={false}
				className="z-depth-1"
				slide>
				<MDBCarouselInner>{posts.map(SlideItem)}</MDBCarouselInner>
			</MDBCarousel>
		</MDBRow>
	);
};

export default Slide;
