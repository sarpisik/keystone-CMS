import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBIcon,
} from 'mdbreact';
import BrandLogo from '../../static/images/Muğlaspor.png';

const Links = [
		{ href: '/', icon: 'home', title: 'Anasayfa' },
		{ href: '/club', icon: 'trophy', title: 'Kulübümüz' },
		{ href: '/teams', icon: 'futbol', title: 'Takımlarımız' },
		{ href: '/news', icon: 'newspaper', title: 'Haberler' },
		{ href: '/gallery', icon: 'images', title: 'Galeri' },
		{ href: '/store', icon: 'store', title: 'Mağaza' },
		{ href: '/contact', icon: 'headset', title: 'İletişim' },
	],
	SocialLinks = [
		{
			href: 'https://www.facebook.com/cuneyt.erdan.75/',
			icon: 'facebook-square',
		},
		{ href: '', icon: 'instagram' },
	];

const LinkItem = ({ href, icon, title }) => (
	<MDBNavItem active={useRouter().route === href} key={href}>
		<Link href={href}>
			{/* <a className={`nav-link ${isActive(href)}`}> */}
			<a className="nav-link">
				<MDBIcon icon={icon} />
				<span>
					<b>{` ${title}`}</b>
				</span>
			</a>
		</Link>
	</MDBNavItem>
);

const SoacialItem = ({ href, icon }) => (
	<MDBNavItem key={href}>
		<Link href={href}>
			{/* <a className={`nav-link ${isActive(href)}`}> */}
			<a className="nav-link">
				<MDBIcon fab icon={icon} />
			</a>
		</Link>
	</MDBNavItem>
);

const NavBar = ({ navBarRef }) => {
	const [collapse, setCollapse] = useState(false),
		toggleCollapse = () => setCollapse(!collapse);

	return (
		<nav
			ref={navBarRef}
			className="navbar navbar-dark fixed-top navbar-expand-md teal darken-4"
			role="navigation">
			<MDBNavbarBrand>
				<img
					src={BrandLogo}
					className="img-fluid"
					height={50}
					width={50}
					alt="brand-logo"
				/>
			</MDBNavbarBrand>
			<MDBNavbarToggler onClick={toggleCollapse} />
			<MDBCollapse isOpen={collapse} navbar>
				<MDBNavbarNav left>{SocialLinks.map(SoacialItem)}</MDBNavbarNav>
				<MDBNavbarNav right>{Links.map(LinkItem)}</MDBNavbarNav>
			</MDBCollapse>
		</nav>
	);
};

export default NavBar;
