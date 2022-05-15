import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Gallery() {
	const item = useRef(null);
	const [index, setIndex] = useState(0);

	// 썸네일 클릭 시
	const changeImg = (e) => {
		const target = e.currentTarget;
		const src = target.querySelector('img').getAttribute('src');
		item.current.querySelector('.pic img').setAttribute('src', src);

		const lis = target.closest('ul').querySelectorAll('li');
		for (const li of lis) {
			li.classList.remove('on');
		}
		target.closest('li').classList.add('on');
	};

	return (
		<section id='gallery'>
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
							<li className='on'>
								<button
									type='button'
									onClick={(e) => {
										changeImg(e);
									}}>
									<img src={`${path}/img/visual.jpg`} alt='' />
								</button>
							</li>
							<li>
								<button
									type='button'
									onClick={(e) => {
										changeImg(e);
									}}>
									<img src={`${path}/img/visual1.jpg`} alt='' />
								</button>
							</li>
							<li>
								<button
									type='button'
									onClick={(e) => {
										changeImg(e);
									}}>
									<img src={`${path}/img/visual2.jpg`} alt='' />
								</button>
							</li>
							<li>
								<button
									type='button'
									onClick={(e) => {
										changeImg(e);
									}}>
									<img src={`${path}/img/visual2.jpg`} alt='' />
								</button>
							</li>
						</ul>
					</div>
					<div className='cont_box'>
						<ul>
							<li ref={item}>
								<div className='pic'>
									<img src={`${path}/img/visual.jpg`} alt='' />
								</div>
								<h3>Lorem ipsum dolor sit.</h3>
								<button className='btn_modal'>
									<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
