import { NavLink } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Gallery(props) {
	const scrolled = props.scrolled;
	const start = props.start;
	const base = 300;
	const position = scrolled - start + base;
	const { gallery } = useSelector((store) => store.galleryReducer);
	const inner = useRef(null);
	const bigTitle = useRef(null);
	const item = useRef(null);
	const [index, setIndex] = useState(0);
	const [move, setMove] = useState(0);

	// 썸네일 클릭 시
	const changeImg = (e, idx) => {
		const target = e.currentTarget;
		setIndex(idx);

		const lis = target.closest('ul').querySelectorAll('li');
		for (const li of lis) {
			li.classList.remove('on');
		}
		target.closest('li').classList.add('on');
	};

	const moveText = (pos) => {
		const innerW = inner.current.clientWidth;
		const bigTitleW = bigTitle.current.clientWidth;
		const remainder = innerW - bigTitleW;
		let result = pos / 1.2;
		if (result > remainder) {
			result = remainder;
		} else {
			result = pos / 1.2;
		}
		return result;
	};
	useEffect(() => {
		setMove(moveText(position));
	}, [position]);

	return (
		<section id='gallery' className='scroll_section'>
			<div className='inner' ref={inner}>
				<h2>
					<span>Massive </span>
					<span>Construction </span>
					<span>and </span>
					<span>development.</span>
				</h2>
				<div
					className='big_text'
					ref={bigTitle}
					style={
						position >= 0
							? // ? { transform: `translateX(-${position / 1.2}px)` }
							  { right: `${move}px` }
							: null
					}>
					GALLERY
				</div>
				<div className='gallery_box'>
					<div className='thumb_box'>
						<ul>
							{gallery.map((pic, idx) => {
								if (idx < 4) {
									let active = '';
									idx === 0 ? (active = 'on') : (active = '');
									return (
										<li className={active} key={idx}>
											<button
												type='button'
												onClick={(e) => {
													changeImg(e, idx);
												}}>
												<img
													src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
													alt=''
												/>
											</button>
										</li>
									);
								}
							})}
						</ul>
					</div>
					<div className='cont_box'>
						<ul>
							<li ref={item}>
								{gallery.length !== 0 ? (
									<>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${gallery[index].server}/${gallery[index].id}_${gallery[index].secret}_z.jpg`}
												alt=''
											/>
										</div>
										<h3>{gallery[index].title}</h3>
									</>
								) : null}
								<NavLink to='/Gallery' className='btn_link'>
									<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
