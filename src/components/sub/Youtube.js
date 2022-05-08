import Layout from '../common/Layout';
import Popup from '../common/Popup';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Youtube() {
	const [vids, setVids] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const playListId = 'PLlM8MQlXeresOXqKmguYK0m04KTjnamS4';
		const key = 'AIzaSyBmkrTuDWtAo4Y49kWA9tJVe6DvS6usIkA';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;
		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
	}, []);
	return (
		<>
			<Layout name='youtube' bg='thumb3.jpg'>
				<div className='inner'>
					{vids.map((vid, idx) => {
						let title = vid.snippet.title;
						let desc = vid.snippet.description;
						let date = vid.snippet.publishedAt;
						return (
							<article
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
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
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
