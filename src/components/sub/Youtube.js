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
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
							srcDoc={`
							<style>
							*{padding:0;margin:0;overflow:hidden}
							html,body{height:100%}
							img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
							span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black;transition:.5s;}
							span:hover{
								color:#1d8ddc;
								text-shadow:0 0 0.5em #fff;
							}
							</style>
							<a href=https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}>
							<img src=${vidData[index].snippet.thumbnails.standard.url} alt=''>
							<span>▶</span>
							</a>`}></iframe>
					</>
				) : null}
			</Popup>
		</>
	);
}

export default Youtube;
