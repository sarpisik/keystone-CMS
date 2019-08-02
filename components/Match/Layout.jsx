import React from 'react';
import {
	MDBRow,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCol,
} from 'mdbreact';
import dateFormatter from '../../util/dateFormatter';

const Header = ({ text }) => (
	<MDBCardTitle className="h3-responsive text-white m-0 text-uppercase font-weight-bold">
		{`${text} maç`}
	</MDBCardTitle>
);

const Date = ({ date }) => (
	<MDBRow className="justify-content-center">
		<MDBCardTitle className="h4-responsive font-weight-bold m-0">
			{date}
		</MDBCardTitle>
	</MDBRow>
);

const MatchCategory = ({ category }) => (
	<MDBRow className="border-bottom border-success justify-content-center mb-3 pt-1">
		<MDBCardTitle className="h5-responsive font-weight-bold text-uppercase font-italic">
			{category}
		</MDBCardTitle>
	</MDBRow>
);

const Club = ({ name, image: { secure_url } }) => (
	<MDBRow className="flex-column align-items-center">
		<div style={{ width: 100 }}>
			<img className="d-block w-100" src={secure_url} alt={name} />
		</div>
		<MDBCardText>{name}</MDBCardText>
	</MDBRow>
);

const Score = ({ home, away }) => (
	<MDBCardTitle className="h3-responsive font-weight-bold">{`${home} - ${away}`}</MDBCardTitle>
);

const Stadium = ({ location }) => (
	<MDBRow className="border-top border-success justify-content-center mt-3 pt-3">
		<MDBCardTitle className="h5-responsive font-weight-bold text-uppercase m-0">
			{location}
		</MDBCardTitle>
	</MDBRow>
);

export const MatchCard = ({
	status,
	awayTeam,
	awayTeamScore,
	homeTeam,
	homeTeamScore,
	category: { name },
	date,
	location,
}) => (
	<MDBCol sm={6}>
		<MDBCard className="matches text-center mt-3 mx-auto">
			<MDBCardBody className="teal darken-4">
				<Header text={status} />
			</MDBCardBody>

			<MDBCardBody className="green-text py-2">
				<Date date={dateFormatter(date)} />
				<MatchCategory category={name} />
				<Club {...homeTeam} />
				<Score home={homeTeamScore} away={awayTeamScore} />
				<Club {...awayTeam} />
				<Stadium location={location} />
			</MDBCardBody>
		</MDBCard>
	</MDBCol>
);
