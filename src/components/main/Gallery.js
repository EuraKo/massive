import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
	const { gallery } = useSelector((store) => store.galleryReducer);
	const item = useRef(null);
	const [index, setIndex] = useState(0);

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

	return (
		<section id='gallery' className='scroll_section'>
			<div className='inner'>
				<h2>
					<span>Massive </span>
					<span>Construction </span>
					<span>and </span>
					<span>development.</span>
				</h2>
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
													src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_s.jpg`}
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
