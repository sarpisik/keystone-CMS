import React from 'react';
import { object } from 'prop-types';
import { MDBRow } from 'mdbreact';
import { MatchCard } from './Layout';

export const MatchCardContainer = ({ finished, unfinished }) => (
	<MDBRow className="justify-content-around">
		{finished && <MatchCard status="son" {...finished} />}
		{unfinished && <MatchCard status="sonraki" {...unfinished} />}
	</MDBRow>
);

MatchCardContainer.propTypes = {
	finished: object,
	unfinished: object,
};
