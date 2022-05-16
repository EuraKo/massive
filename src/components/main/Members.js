import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const path = process.env.PUBLIC_URL;
function Members() {
	const members = useSelector((store) => store.membersReducer.members);

	return (
		<section id='members' className='scroll_section'>
			<div className='inner'>
				<div className='title_wrap'>
					<h2>Ours story</h2>
					<div className='disc'>
						We set up teams to shape your identity. push your idea & manage the
						work-flow from pre- to post production.
					</div>
				</div>
			</div>
			<div className='swiper_box'>
				<div className='inner'>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						grabCursor={true}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						breakpoints={{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},

							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							840: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
						modules={[Autoplay, Pagination]}
						className='mySwiper'>
						{members.map((member, idx) => {
							return (
								<SwiperSlide key={idx}>
									<div className='pic'>
										<img src={`${path}/img/department/${member.img}`} alt='' />
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default Members;
