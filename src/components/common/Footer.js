import { NavLink } from 'react-router-dom';
const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<h2 className='logo'>
					<NavLink exact to='/'>
						massive.
					</NavLink>
				</h2>
				<div className='sitemap'>
					<ul>
						<li>
							<NavLink to='/Department'>Department</NavLink>
						</li>
						<li>
							<NavLink to='/Youtube'>Youtube</NavLink>
						</li>
						<li>
							<NavLink to='/Community'>Community</NavLink>
						</li>
						<li>
							<NavLink to='/Gallery'>Gallery</NavLink>
						</li>
						<li>
							<NavLink to='/Location'>Location</NavLink>
						</li>
					</ul>
				</div>
				<div className='copy'>
					Copyright &copy; 2022. massive. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
