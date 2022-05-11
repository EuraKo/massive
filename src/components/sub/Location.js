import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const path = process.env.PUBLIC_URL;

function Location(props) {
	const { kakao } = window;

	const container = useRef(null);
	// const branch = useRef(null);

	const info = [
		{
			title: 'HEAD OFFICE',
			latlng: new kakao.maps.LatLng(37.4020048, 127.1085146),
		},
		{
			title: 'OFFICE PANKYO',
			latlng: new kakao.maps.LatLng(33.450701, 126.570667),
		},
		{
			title: 'SERVICE CENTER',
			latlng: new kakao.maps.LatLng(37.4027251, 127.1073615),
		},
	];
	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const mapOption = {
			center: mapInfo[index].latlng,
			level: 3,
		};
		const map_instance = new kakao.maps.Map(container.current, mapOption);
		setMap(map_instance);

		const markerPosition = mapInfo[index].latlng;
		const markerSize = new kakao.maps.Size(62, 49);
		const maekerImg = `${path}/img/marker.png`;
		const markerPos = { offset: new kakao.maps.Point(31, 49) };

		const markerImage = new kakao.maps.MarkerImage(
			maekerImg,
			markerSize,
			markerPos
		);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});
		marker.setMap(map_instance);

		const mapTypeControl = new kakao.maps.MapTypeControl();
		map_instance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);
		const zoomControl = new kakao.maps.ZoomControl();
		map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const mapInit = () => {
			console.log('마커 중앙위치');
			map_instance.setCenter(mapInfo[index].latlng);
		};
		window.addEventListener('resize', mapInit);

		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, []);

	return (
		<>
			<Layout name='location' bg='thumb10.jpg'>
				<div className='inner'>
					<form action='' className='send_mail'>
						<fieldset>
							<legend>Send to Mail</legend>
							<p className='desc'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque illo consectetur cumque quos voluptas minus.
							</p>
							<div className='form_group'>
								<input type='text' placeholder='Name' />
								<input type='text' placeholder='E - mail' />
								<textarea name='' id='' placeholder='comments'></textarea>
								<div className='btn_wrap'>
									<input type='submit' className='btn_normal' value='SEND' />
								</div>
							</div>
						</fieldset>
					</form>
					<div className='info'>
						<div className='item'>
							<div className='title'>Adress</div>
							<div className='desc'>
								(주)카카오 판교오피스 경기도 성남시 분당구
								<br /> 삼평동 판교역로 235
							</div>
						</div>
						<div className='item'>
							<div className='title'>Phone</div>
							<div className='desc'>010 8222 8443</div>
						</div>
						<div className='item'>
							<div className='title'>Email</div>
							<div className='desc'>sow5252@gmail.com</div>
						</div>
						<div className='item'>
							<ul className='sns_box'>
								<li>
									<a href='#' className='btn_icon'>
										<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
									</a>
								</li>
								<li>
									<a href='#' className='btn_icon'>
										<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
									</a>
								</li>
								<li>
									<a href='#' className='btn_icon'>
										<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id='map' ref={container}></div>
			</Layout>
		</>
	);
}

export default Location;
