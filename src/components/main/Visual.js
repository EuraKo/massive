const path = process.env.PUBLIC_URL;
function Visual() {
	return (
		<section className='section_visual'>
			<figure>
				<img src={`${path}/img/visual.jpg`} alt='' />
			</figure>
		</section>
	);
}

export default Visual;
