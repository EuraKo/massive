import Header from '../common/Header';
import Visual from './Visual';
import Gallery from './Gallery';
import Notice from './Notice';
import Vids from './Vids';
import Members from './Members';
import Btns from './Btns';

import Anime from '../../class/anime';
import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]); // 재갱신 방지
	const [index, setIndex] = useState(0); // 스크롤로 변경되는 수
	const [num, setNum] = useState(0); // 총 섹션 개수
	const [first, setFirst] = useState(false); // 첫번째 섹션 판단

	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.scroll_section');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setNum(secs.length);
	};

	const activation = () => {
		const base = -200;
		const scroll = window.scrollY;
		setScrolled(scroll);

		const btns = main.current.querySelectorAll('.scroll_navi li');
		const secs = main.current.querySelectorAll('.scroll_section');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (let i = 0; i < secs.length; i++) {
					btns[i].classList.remove('on');
					secs[i].classList.remove('on');
				}
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
		if (!secs[0].classList.contains('on')) {
			setFirst(true);
		} else {
			setFirst(false);
		}
	};

	useEffect(() => {
		getPos();

		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<>
			<main ref={main}>
				<Header type={'header_main'} fisrtSec={first} />
				<Btns num={num} setIndex={setIndex} />
				<Visual scrolled={scrolled} start={pos.current[0]} />
				<Gallery scrolled={scrolled} start={pos.current[1]} />
				<Notice />
				<Vids />
				<Members />
			</main>
		</>
	);
}

export default Main;
