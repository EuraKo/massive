import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const [pics, setPics] = useState([]);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [enableClick, setEnableClick] = useState(true);

	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const getFlickr = async (opt) => {
		const key = 'df93661d16064f006391d9d061379d39';
		const num = opt.count;
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&tags=${opt.tags}`;
		}
		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=${opt.user}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어에 이미지가 없습니다.');
				return;
			}
			setPics(json.data.photos.photo);
		});
		setTimeout(() => {
			frame.current.classList.add('on_list');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};
	const showSearch = (e) => {
		const result = input.current.value.trim();

		if (!result) return alert('입력하세요');
		input.current.value = '';

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on_list');

			getFlickr({
				type: 'search',
				count: 20,
				tags: result,
			});
		}
	};
	useEffect(() => {
		getFlickr({
			type: 'user',
			user: '195406071@N05',
			count: 20,
		});
	}, []);

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
						<button onClick={() => showSearch}>
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
						{pics.map((pic, idx) => {
							return (
								<li
									key={idx}
									onClick={() => {
										setOpen(true);
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
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
											alt=''
										/>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						alt=''
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Gallery;
