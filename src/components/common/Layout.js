import { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);
	useEffect(() => {
		frame.current.classList.add('on');
	}, []);
	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure></figure>
			<h2>{props.name}</h2>
		</section>
	);
}

export default Layout;
