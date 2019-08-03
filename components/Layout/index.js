// import Head from 'next/head';
import Head from '../Head';
import { MDBContainer } from 'mdbreact';
import NavBar from '../NavBar';

const Layout = ({ navBarRef, children }) => (
	<MDBContainer fluid style={{ minHeight: '100vh' }}>
		<Head title="MUĞLASPOR" />
		<NavBar navBarRef={navBarRef} />
		{children}
	</MDBContainer>
);
export default Layout;
