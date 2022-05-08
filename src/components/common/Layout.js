import { useEffect, useRef } from 'react';
const path = process.env.PUBLIC_URL;

function Layout(props) {
	const frame = useRef(null);
	useEffect(() => {
		frame.current.classList.add('on');
	}, []);
	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='title_box'>
				<figure>
					<img src={`${path}/img/${props.bg}`} alt='' />
				</figure>
				<h2>{props.name}</h2>
			</div>
			{props.children}
		</section>
	);
}

export default Layout;
