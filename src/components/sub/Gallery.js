import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionType';

function Gallery() {
	const { gallery } = useSelector((store) => store.galleryReducer);
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const [opt, setOpt] = useState({
		type: 'user',
		count: 20,
		user: '195406071@N05',
	});
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [enableClick, setEnableClick] = useState(true);

	const endLoading = () => {
		setTimeout(() => {
			if (frame.current !== null) {
				frame.current.classList.add('on_list');
				setLoading(false);
				setEnableClick(true);
			}
		}, 1000);
	};
	const showSearch = (e) => {
		const result = input.current.value.trim();

		if (!result) return alert('단어를 입력하세요');
		input.current.value = '';

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on_list');

			setOpt({
				type: 'search',
				count: 20,
				tag: result,
			});
		}
	};

	useEffect(() => {
		dispatch({ type: types.GALLERY.start, opt });
	}, [opt]);

	useEffect(() => {
		if (gallery.length !== 0) endLoading();
	}, [gallery]);

	return (
		<>
			<Layout name='gallery' bg='thumb7.jpg'>
				<div className='inner' ref={frame}>
					<div className='search_area'>
						<input
							type='text'
							ref={input}
							onKeyUp={(e) => {
								if (e.key === 'Enter') showSearch();
							}}
						/>
						<button
							onClick={() => {
								showSearch();
							}}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					{loading ? (
						<div className='loader' title='3'>
							<svg
								x='0px'
								y='0px'
								width='24px'
								height='24px'
								viewBox='0 0 24 24'>
								<rect x='0' y='0' width='4' height='7' fill='#333'>
									<animateTransform
										attributeType='xml'
										attributeName='transform'
										type='scale'
										values='1,1; 1,3; 1,1'
										begin='0s'
										dur='0.6s'
										repeatCount='indefinite'
									/>
								</rect>

								<rect x='10' y='0' width='4' height='7' fill='#333'>
									<animateTransform
										attributeType='xml'
										attributeName='transform'
										type='scale'
										values='1,1; 1,3; 1,1'
										begin='0.2s'
										dur='0.6s'
										repeatCount='indefinite'
									/>
								</rect>
								<rect x='20' y='0' width='4' height='7' fill='#333'>
									<animateTransform
										attributeType='xml'
										attributeName='transform'
										type='scale'
										values='1,1; 1,3; 1,1'
										begin='0.4s'
										dur='0.6s'
										repeatCount='indefinite'
									/>
								</rect>
							</svg>
						</div>
					) : null}
					<ul className='list'>
						{gallery.map((pic, idx) => {
							return (
								<li
									key={idx}
									onClick={() => {
										pop.current.open();
										setIndex(idx);
									}}>
									<div className='cont'>
										<h3>
											{pic.title.length > 50
												? pic.title.substr(0, 50) + '...'
												: pic.title}
										</h3>
										<div className='owner'>{pic.owner}</div>
									</div>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_n.jpg`}
											alt=''
										/>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</Layout>
			<Popup ref={pop} type='pop_full'>
				{gallery.length !== 0 ? (
					<>
						<img
							src={`https://live.staticflickr.com/${gallery[index].server}/${gallery[index].id}_${gallery[index].secret}_b.jpg`}
							alt=''
						/>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Gallery;
