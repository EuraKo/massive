import Popup from '../common/Popup';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);
function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);

	const pop = useRef(null);
	const [index, setIndex] = useState(0);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const handleClick = (index) => {
		pop.current.open();
		setIndex(index);
	};

	return (
		<>
			<section id='vids'>
				<div className='inner'>
					<div className='title_wrap'>
						<h2>Our Videos</h2>
						<div className='disc'>
							There are many variations of passages of Lorem Ipsum available,
							words which don't look even slightly believable.
						</div>
					</div>
					<div className='vid_box'>
						<Swiper
							slidesPerView={1}
							navigation={{
								prevEl: navigationPrevRef.current,
								nextEl: navigationNextRef.current,
							}}
							modules={[Navigation]}>
							{vidData.map((vid, idx) => {
								let title = vid.snippet.title;
								if (idx < 4) {
									return (
										<SwiperSlide key={idx}>
											<div className='pic'>
												<img src={vid.snippet.thumbnails.standard.url} alt='' />
											</div>
											<div className='cont'>
												<button
													type='button'
													onClick={() => {
														console.log(idx);
														handleClick(idx);
													}}>
													<svg viewBox='0 0 65 65'>
														<g>
															<circle cx='32.5' cy='32.5' r='32.5'>
																<animate
																	attributeName='r'
																	dur='1.5s'
																	values='32.5;25;32.5'
																	keyTimes='0;0.5;1'
																	repeatCount='indefinite'></animate>
															</circle>
															<circle cx='32.5' cy='32.5' r='24.5' />
															<polyline points='31 24 39.47 32.47 31.47 40.47' />
														</g>
													</svg>
												</button>
												<h3>{title}</h3>
											</div>
										</SwiperSlide>
									);
								}
							})}
							<button ref={navigationPrevRef} className='swiper-button-prev'>
								<svg viewBox='0 0 28.11 6.86'>
									<g>
										<line y1='3.43' x2='27' y2='3.43' />
										<polyline points='3.78 6.5 0.71 3.43 3.78 0.35' />
									</g>
								</svg>
							</button>
							<button ref={navigationNextRef} className='swiper-button-next'>
								<svg viewBox='0 0 28.11 6.86'>
									<g>
										<line y1='3.43' x2='27' y2='3.43' />
										<polyline points='24.32 0.35 27.4 3.43 24.32 6.5' />
									</g>
								</svg>
							</button>
						</Swiper>
					</div>
				</div>
			</section>
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

export default Vids;
