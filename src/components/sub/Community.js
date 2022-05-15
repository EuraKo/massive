import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faPen,
	faCheck,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const modifyInput = useRef(null);
	const modifyTextarea = useRef(null);
	const pop = useRef(null);

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};
	const [posts, setPosts] = useState(getLocalData);
	const [open, setOpen] = useState(false);
	const [allow, setAllow] = useState(true);

	// 생성
	const craetePost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			alert('제목과 본문을 입력해주세요');
			return;
		}
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		setPosts([
			{
				title: input.current.value,
				comment: textarea.current.value,
				date: `${year}.${month}.${day}`,
			},
			...posts,
		]);
		resetPost();
		setOpen(false);
	};

	// 초기화
	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};
	// 삭제
	const deletePost = (index) => {
		console.log(posts);
		setPosts(
			posts.filter((_, idx) => {
				return index !== idx;
			})
		);
	};
	// 수정
	const enableUpdate = (index) => {
		setAllow(false);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};
	// 수정취소
	const disableUpdate = (index) => {
		setAllow(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};
	// 수정완료
	const updatePost = (index) => {
		if (
			!modifyInput.current.value.trim() ||
			!modifyTextarea.current.value.trim()
		) {
			return alert('제목과 내용을 입력해주세요.');
		}

		setAllow(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = modifyInput.current.value;
					post.comment = modifyTextarea.current.value;
					console.log(modifyTextarea.current.value);
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};
	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, [posts]);
	return (
		<>
			<Layout name='community' bg='thumb5.jpg'>
				<div className='inner'>
					<article>
						<figure>
							<img src={`${path}/img/visual3.jpg`} alt='' />
						</figure>
						<div className='cont'>
							<h3>Just How Important Meeting Is For Your Office.</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
								ipsam temporibus minus. Architecto, qui error? Necessitatibus
								ratione odio cumque saepe magni harum officiis aliquid. Impedit
								quibusdam accusamus dignissimos cumque culpa.
							</p>
						</div>
					</article>
					<div className='btn_wrap'>
						<button
							type='button'
							className='btn_normal'
							onClick={() => {
								pop.current.open();
							}}>
							comment
						</button>
					</div>

					<div className='commu_list'>
						<ul>
							{posts.map((post, idx) => {
								return (
									<li key={idx}>
										{post.enableUpdate ? (
											// 수정모드
											<>
												<div className='btn_wrap'>
													<button
														type='button'
														className='btn_icon btn_del'
														onClick={() => disableUpdate(idx)}>
														<FontAwesomeIcon icon={faXmark} />
													</button>
													<button
														type='button'
														className='btn_icon btn_success'
														onClick={() => updatePost(idx)}>
														<FontAwesomeIcon icon={faCheck} />
													</button>
												</div>
												<div className='num'>{idx < 10 ? '0' + idx : idx}</div>
												<input
													type='text'
													defaultValue={post.title}
													ref={modifyInput}
												/>
												<textarea
													defaultValue={post.comment}
													ref={modifyTextarea}></textarea>
												<div className='date'>{post.date}</div>
											</>
										) : (
											// 출력모드
											<>
												<div className='btn_wrap'>
													<button
														type='button'
														className='btn_icon btn_del'
														onClick={() => deletePost(idx)}>
														<FontAwesomeIcon icon={faTrash} />
													</button>
													<button
														type='button'
														className='btn_icon btn_modify'
														onClick={() => {
															if (allow) enableUpdate(idx);
														}}>
														<FontAwesomeIcon icon={faPen} />
													</button>
												</div>
												<div className='num'>{idx < 10 ? '0' + idx : idx}</div>
												<div className='title'>{post.title}</div>
												<div className='comment'>{post.comment}</div>
												<div className='date'>{post.date}</div>
											</>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Layout>
			<Popup type='pop_mini' ref={pop}>
				<div className='input_box'>
					<h2>comments</h2>
					<input type='text' placeholder='title' ref={input} />
					<textarea placeholder='comments' ref={textarea}></textarea>
					<div className='btn_wrap'>
						<button type='button' className='btn_normal' onClick={resetPost}>
							DELETE
						</button>
						<button type='button' className='btn_normal' onClick={craetePost}>
							CREAT
						</button>
					</div>
				</div>
			</Popup>
		</>
	);
}

export default Community;
