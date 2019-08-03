import React from 'react';
import { object } from 'prop-types';
import { MDBRow, MDBCol } from 'mdbreact';
import { MatchCard } from './Layout';

export const MatchCardContainer = ({ finished, unfinished }) => (
	<MDBCol>
		<MDBRow className="justify-content-around">
			{finished && <MatchCard status="son" {...finished} />}
			{unfinished && <MatchCard status="sonraki" {...unfinished} />}
		</MDBRow>
	</MDBCol>
);

MatchCardContainer.propTypes = {
	finished: object,
	unfinished: object,
};
