function Btns(props) {
	const arr = Array.from(Array(props.num).keys());
	return (
		<nav className='scroll_navi'>
			<ul>
				{arr.map((_, idx) => {
					let active = '';
					idx === 0 ? (active = 'on') : (active = '');
					return (
						<li
							key={idx}
							className={active}
							onClick={() => props.setIndex(idx)}></li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Btns;
