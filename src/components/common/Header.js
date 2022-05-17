import Menu from './Menu';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	const menu = useRef(null);
	const mo_btn = useRef(null);
	const [toggle, setToggle] = useState(false);
	const active = { color: '#1d8ddc' };
	const clickMo = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		if (toggle) {
			menu.current.open();
			mo_btn.current.classList.add('show');
		} else {
			menu.current.close();
			mo_btn.current.classList.remove('show');
		}
	}, [toggle]);
	return (
		<>
			<header className={props.type}>
				<div className='inner'>
					<h1 className='logo'>
						<NavLink exact to='/'>
							massive.
						</NavLink>
					</h1>
					<button
						type='button'
						className='mo_btn'
						ref={mo_btn}
						onClick={() => {
							clickMo();
						}}>
						<span className='hidden'>모바일 메뉴버튼</span>
						<div className='bars'>
							<span className='bar top'></span>
							<span className='bar center'></span>
							<span className='bar bottom'></span>
						</div>
					</button>
					<nav id='gnb'>
						<ul>
							<li>
								<NavLink to='/Department' activeStyle={active}>
									Department
								</NavLink>
							</li>
							<li>
								<NavLink to='/Youtube' activeStyle={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/Community' activeStyle={active}>
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to='/Gallery' activeStyle={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/Location' activeStyle={active}>
									Location
								</NavLink>
							</li>
						</ul>
						<NavLink className='join' to='/Join'>
							Join
						</NavLink>
					</nav>
				</div>
			</header>
			<Menu ref={menu} toggle={toggle} setToggle={setToggle} />
		</>
	);
}

export default Header;
