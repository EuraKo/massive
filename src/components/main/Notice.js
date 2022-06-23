import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
const path = process.env.PUBLIC_URL;

function Notice() {
	const getLocalData = () => {
		const dummy = [
			{
				title: 'How streams become stories',
				comment:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
				date: '2022.02.02',
			},
			{
				title:
					'Contrary to popular belief, Lorem Ipsum is not simply random text.',
				comment:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
				date: '2022.02.02',
			},
			{
				title: 'Where does it come from?',
				comment:
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
				date: '2022.02.02',
			},
			{
				title: 'Vestibulum id ante varius, fermentum leo non, luctus elit.',
				comment:
					'Donec ullamcorper ligula vitae purus vestibulum, fermentum aliquet magna tincidunt.Mauris vel odio faucibus, tincidunt lorem et, finibus est. ',
				date: '2022.02.02',
			},
			{
				title: 'Vestibulum id ante varius, fermentum leo non, luctus elit.',
				comment:
					"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
				date: '2022.02.02',
			},
			{
				title: 'fermentum leo non, luctus elit.',
				comment:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
				date: '2022.02.02',
			},
		];
		const data = localStorage.getItem('post');
		console.log(data);
		if (data) {
			console.log(data);
			return JSON.parse(data);
		} else {
			return dummy;
		}
	};

	const [posts] = useState(getLocalData);

	useEffect(() => {
		// localStorage.removeItem('post');
		localStorage.setItem('post', JSON.stringify(posts));
	}, []);

	return (
		<section id='notice' className='scroll_section'>
			<div className='inner'>
				<div className='title_wrap'>
					<h2>COMMUNITY</h2>
					<figure>
						<img src={`${path}/img/bg2.jpg`} alt='' />
					</figure>
				</div>
				<div className='list_box'>
					<ul>
						{posts.map((post, idx) => {
							if (idx < 4) {
								console.log(post);
								return (
									<li key={idx} className='post'>
										<div className='title'>
											{post.title.length > 50
												? post.title.substr(0, 50) + '...'
												: post.title}
										</div>
										<div className='comment'>
											{post.comment.length > 100
												? post.comment.substr(0, 300) + '...'
												: post.comment}
										</div>
									</li>
								);
							}
						})}
					</ul>
					<div className='btn_wrap'>
						<NavLink to='/Community' className='btn_normal'>
							MORE
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Notice;
