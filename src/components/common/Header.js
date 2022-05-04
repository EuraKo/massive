import { NavLink } from 'react-router-dom';

function Header() {
	const active = { color: 'aqua' };
	return (
		<header>
			<h1>
				<NavLink activeStyle={active} exact to='/'>
					massive.
				</NavLink>
			</h1>
			<button type='button' className='mo_btn'>
				<span className='hidden'>모바일 메뉴버튼</span>
			</button>
			<nav id='gnb'>
				<ul>
					<li>
						<NavLink to='/Members'>Members</NavLink>
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
				<NavLink className='join' to='/Join'>
					Join
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
