import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
	const [pics, setPics] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const method_interest = 'flickr.interestingness.getList';
		const key = 'df93661d16064f006391d9d061379d39';
		const num = 20;
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json`;

		axios.get(url).then((json) => {
			setPics(json.data.photos.photo);
		});
	}, []);

	return (
		<>
			<Layout name='gallery' bg='thumb5.jpg'>
				<div className='inner'>
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
										<h3>{pic.title}</h3>
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
