import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function Youtube() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);

	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	const handleClick = (index) => {
		pop.current.open();
		setIndex(index);
	};
	return (
		<>
			<Layout name='youtube' bg='thumb3.jpg'>
				<div className='inner'>
					{vidData.map((vid, idx) => {
						let title = vid.snippet.title;
						let desc = vid.snippet.description;
						let date = vid.snippet.publishedAt;
						return (
							<article
								key={idx}
								onClick={() => {
									handleClick(idx);
								}}>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.standard.url} alt='' />
								</div>
								<div className='cont'>
									<h3>
										{title.length > 30 ? title.substr(0, 30) + '...' : title}
									</h3>
									<div className='desc'>
										{desc.length > 50 ? desc.substr(0, 50) + '...' : desc}
									</div>
									<div className='date'>{date.split('T')[0]}</div>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<Popup ref={pop} type='pop_full'>
				{vidData.length !== 0 ? (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}></iframe>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Youtube;
