const path = process.env.PUBLIC_URL;
function Visual() {
	return (
		<section id='visual' className='scroll_section'>
			<figure>
				{/* <img src={`${path}/img/visual.jpg`} alt='' /> */}
				<video src={`${path}/img/whiteHouse.mp4`} muted autoPlay loop></video>
			</figure>
			<div className='inner'>
				<h2>Number of House.</h2>
				<div className='bg_text'>MASSIVE.</div>
			</div>
			<button className='btn_scroll'>
				<svg viewBox='0 0 32 54.2'>
					<title>wheel</title>
					<rect x='12.4' y='0' width='7.2' height='14.4' rx='3.6' ry='3.6'>
						<animate
							attributeName='y'
							dur='1s'
							values='0;10;0'
							keyTimes='0;0.5;1'
							repeatCount='indefinite'></animate>
					</rect>
					<path
						d='M410,261.33v2.2A13.89,13.89,0,0,1,417.67,276v16a14,14,0,0,1-28,0V276a13.89,13.89,0,0,1,7.66-12.46v-2.21A15.87,15.87,0,0,0,387.67,276v16a16,16,0,0,0,32,0V276A15.88,15.88,0,0,0,410,261.33Z'
						transform='translate(-387.67 -253.8)'
					/>
				</svg>
				scroll
			</button>
		</section>
	);
}

export default Visual;
