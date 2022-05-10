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

	const [map, setMap] = useState(null);

	useEffect(() => {
		const mapOption = {
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level: 3, // 지도의 확대 레벨
		};
		const map_instance = new kakao.maps.Map(container.current, mapOption);
		setMap(map_instance);
	}, []);

	return (
		<>
			<Layout name='location' bg='thumb10.jpg'>
				<div className='info'>
					<div className='inner'>
						<div className='item'>
							<div className='title'>adress</div>
							<div className='desc'>
								(주)카카오 판교오피스 경기도 성남시 분당구 삼평동 판교역로 235
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
				</div>
				<div id='map' ref={container}></div>
			</Layout>
		</>
	);
}

export default Location;
