import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { useSelector } from 'react-redux';
const path = process.env.PUBLIC_URL;

function Department() {
	const members = useSelector((store) => store.membersReducer.members);

	return (
		<>
			<Layout name='dapartment' bg='thumb6.jpg'>
				<div className='inner'>
					<div className='quote'>
						<div className='desc'>
							<FontAwesomeIcon icon={faQuoteLeft} className='quote_icon' />
							<h3>Creative Directors</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
								quis voluptatem tempora ipsam voluptas unde natus aperiam
								eligendi in dicta.
							</p>
							<FontAwesomeIcon icon={faQuoteRight} className='quote_icon' />
						</div>
						<div className='pic'>
							<img src={`${path}/img/thumb1.jpg`} alt='' />
						</div>
					</div>
					<div className='owner'>
						<div className='pic'>
							<img
								src={`${path}/img/department/member12.jpg`}
								alt='CEO 조승우'
							/>
						</div>
						<div className='desc'>
							<div className='name'>
								SeungWoo Jo <span>/ CEO</span>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda totam voluptatibus fugit beatae dolor vero, maxime,
								illum, nihil laudantium officia pariatur iure voluptate cum
								quidem cupiditate sunt necessitatibus velit esse.
							</p>
							<div className='info'>
								<div className='item'>
									<div className='num'>{members.length + 1}</div>
									<div className='title'>Teams</div>
								</div>
								<div className='item'>
									<div className='num'>40</div>
									<div className='title'>Project</div>
								</div>
								<div className='item'>
									<div className='num'>05</div>
									<div className='title'>Year</div>
								</div>
							</div>
						</div>
					</div>
					<div className='depart_list'>
						<h3>The Teams</h3>
						<ul>
							{members.map((item, idx) => {
								return (
									<li key={idx}>
										<div className='effect_line'>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</div>
										<div className='sns_box'>
											<a href='#' className='btn_icon'>
												<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
											</a>
											<a href='#' className='btn_icon'>
												<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
											</a>
											<a href='#' className='btn_icon'>
												<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
											</a>
										</div>
										<div className='pic'>
											<img src={`${path}/img/department/${item.img}`} alt='' />
										</div>
										<div className='name'>{item.name}</div>
										<div className='position'>
											{item.team} <span>/ {item.position}</span>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Department;
