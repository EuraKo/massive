import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const path = process.env.PUBLIC_URL;

function Join() {
	const history = useHistory();
	const initVal = {
		term: null,
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		phone: '',
		age: null,
		hobby: null,
		job: '',
		comments: '',
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const form = useRef(null);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;

		if (!val.term) {
			errs.term = '이용약관에 대한 안내에 동의해주세요';
		}

		if (val.userid.length < 5) {
			errs.userid = 'id를 5글자 이상 입력하세요';
		}

		if (val.pwd1.length < 6) {
			errs.pwd1 = '비밀번호를 6글자 이상 입력하세요';
		} else if (
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 = '비밀번호는 영문,숫자,특수문자를 모두 포함해야 합니다.';
		}

		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = '비밀번호가 일치하지 않습니다.';
		}

		if (val.email.length < 3 || !/@/.test(val.email)) {
			errs.email = '이메일을 3글자 이상 @포함하여 입력해주세요.';
		}

		if (val.phone.length < 10) {
			errs.phone = '10자리 이상 입력해주세요.';
		}
		if (!val.age) {
			errs.age = '연령대를 선택해주세요.';
		}

		if (!val.hobby) {
			errs.hobby = '취미를 1가지 이상 선택해주세요.';
		}

		if (val.job === '') {
			errs.job = '직업을 선택해주세요.';
		}
		if (val.comments.length < 10) {
			errs.comments = '코멘트를 10글자 이상 입력하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setVal({ ...val, [name]: value });
	};

	const handlePhone = (e) => {
		const { name, value } = e.target;
		const onlyNumber = value.replace(/[^0-9]/g, '');

		setVal({ ...val, [name]: onlyNumber });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		const labels = e.target.closest('.radio_group').querySelectorAll('label');
		labels.forEach((el) => {
			el.classList.remove('on');
		});
		e.target.parentElement.classList.add('on');
		setVal({ ...val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) {
				isCheck = true;
				e.target.parentElement.classList.add('on');
			} else {
				e.target.parentElement.classList.remove('on');
			}
		});
		setVal({ ...val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const idx = e.target.selectedIndex;
		const isSelected = e.target.options[idx].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
		const radios = form.current.querySelectorAll('.radio');
		const checks = form.current.querySelectorAll('.check');

		for (const radio of radios) {
			radio.classList.remove('on');
		}
		for (const check of checks) {
			check.classList.remove('on');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && isSubmit === true) {
			history.push('/');
		}
	}, [err]);

	return (
		<>
			<Layout name='join' bg='thumb11.jpg'>
				<div className='inner'>
					<form onSubmit={handleSubmit} ref={form}>
						<fieldset>
							<legend>회원가입하기</legend>
							<div className='term'>
								<div className='term_cont'>
									<div className='article'>
										<h3 className='article__title'>여러분을 환영합니다.</h3>
										<p className='article__text'>
											massive. 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서
											감사합니다. 본 약관은 다양한 massive. 서비스의 이용과
											관련하여 massive. 서비스를 제공하는 massive. 주식회사(이하
											‘massive.’)와 이를 이용하는 massive. 서비스 회원(이하
											‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의
											massive. 서비스 이용에 도움이 될 수 있는 유익한 정보를
											포함하고 있습니다.
										</p>
										<p className='article__text'>
											massive. 서비스를 이용하시거나 massive. 서비스 회원으로
											가입하실 경우 여러분은 본 약관 및 관련 운영 정책을
											확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게
											살펴봐 주시기 바랍니다.
										</p>
									</div>
									<div className='article'>
										<h3 className='article__title'>
											다양한 massive. 서비스를 즐겨보세요.
										</h3>
										<p className='article__text'>
											massive.는
											<a
												href='https://eurako.github.io/massive'
												target='_blank'>
												https://eurako.github.io/massive
											</a>
											을 비롯한 massive. 도메인의 웹사이트 및
											응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른
											이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등
											여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를
											제공하고 있습니다.
											<br />
											여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를
											통해 각양각색의 massive. 서비스를 자유롭게 이용하실 수
											있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의
											안내, 공지사항,
											<a
												href='https://eurako.github.io/massive'
												target='_blank'>
												massive. 웹고객센터(이하 ‘고객센터’)
											</a>
											도움말 등에서 쉽게 확인하실 수 있습니다.
										</p>
										<p className='article__text'>
											massive.는 기본적으로 여러분 모두에게 동일한 내용의
											서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나
											기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는
											일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의
											내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을
											제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스
											상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수
											있습니다.
										</p>
										<p className='article__text'>
											massive. 서비스에는 기본적으로 본 약관이 적용됩니다만
											massive.가 다양한 서비스를 제공하는 과정에서 부득이 본
											약관 외 별도의 약관, 운영정책 등을 적용하는 경우(예,
											massive.페이, V LIVE 등)가 있습니다. 그리고 massive.
											계열사가 제공하는 특정 서비스의 경우에도(예, LINE, SNOW등)
											해당 운영 회사가 정한 고유의 약관, 운영정책 등이 적용될 수
											있습니다. 이러한 내용은 각각의 해당 서비스 초기 화면에서
											확인해 주시기 바랍니다.
										</p>
									</div>
								</div>
								<div className='input_group'>
									<label htmlFor='term' className='check'>
										<input
											type='checkbox'
											name='term'
											id='term'
											onChange={handleCheck}
										/>
										massive. 이용약관 동의
									</label>
									<div className='err'>{err.term}</div>
								</div>
							</div>
							<div className='form_wrap'>
								<div className='input_group'>
									{/* user id */}
									<label htmlFor='userid' className='form_title'>
										ID
									</label>
									<input
										type='text'
										id='userid'
										name='userid'
										value={val.userid}
										onChange={(e) => handleChange(e)}
									/>
									<div className='err'>{err.userid}</div>
								</div>
								{/* pwd1 */}
								<div className='input_group'>
									<label htmlFor='pwd1' className='form_title'>
										PASSWORD
									</label>
									<input
										type='password'
										id='pwd1'
										name='pwd1'
										value={val.pwd1}
										onChange={(e) => handleChange(e)}
									/>
									<div className='err'>{err.pwd1}</div>
								</div>
								{/* pwd2 */}
								<div className='input_group'>
									<label htmlFor='pwd2' className='form_title'>
										RE PASSWORD
									</label>
									<input
										type='password'
										id='pwd2'
										name='pwd2'
										value={val.pwd2}
										onChange={(e) => handleChange(e)}
									/>
									<div className='err'>{err.pwd2}</div>
								</div>
								{/* email */}
								<div className='input_group'>
									<label htmlFor='email' className='form_title'>
										E - MAIL
									</label>
									<input
										type='text'
										id='email'
										name='email'
										value={val.email}
										onChange={(e) => handleChange(e)}
									/>
									<div className='err'>{err.email}</div>
								</div>
								{/* phone */}
								<div className='input_group'>
									<label htmlFor='phone' className='form_title'>
										PHONE
									</label>
									<input
										type='text'
										id='phone'
										name='phone'
										value={val.phone}
										onChange={(e) => handlePhone(e)}
									/>
									<div className='err'>{err.phone}</div>
								</div>
								{/* age */}
								<div className='input_group'>
									<div className='form_title'>AGE</div>
									<div className='radio_group'>
										<label htmlFor='10s' className='radio'>
											<input
												type='radio'
												name='age'
												id='10s'
												onChange={handleRadio}
											/>
											10 ~ 20
										</label>

										<label htmlFor='20s' className='radio'>
											<input
												type='radio'
												name='age'
												id='20s'
												onChange={handleRadio}
											/>
											21 ~ 30
										</label>

										<label htmlFor='30s' className='radio'>
											<input
												type='radio'
												name='age'
												id='30s'
												onChange={handleRadio}
											/>
											31 ~ 40
										</label>

										<label htmlFor='40s' className='radio'>
											<input
												type='radio'
												name='age'
												id='40s'
												onChange={handleRadio}
											/>
											41 ~ 50
										</label>

										<label htmlFor='50s' className='radio'>
											<input
												type='radio'
												name='age'
												id='50s'
												onChange={handleRadio}
											/>
											51 ~
										</label>
										<div className='err'>{err.age}</div>
									</div>
								</div>
								{/* hobby */}
								<div className='input_group'>
									<div className='form_title'>HOBBY</div>
									<div className='checkbox_group'>
										<label htmlFor='music' className='check'>
											<input
												type='checkbox'
												name='hobby'
												id='music'
												onChange={handleCheck}
											/>
											MUSIC
										</label>

										<label htmlFor='game' className='check'>
											<input
												type='checkbox'
												name='hobby'
												id='game'
												onChange={handleCheck}
											/>
											GAME
										</label>

										<label htmlFor='cooking' className='check'>
											<input
												type='checkbox'
												name='hobby'
												id='cooking'
												onChange={handleCheck}
											/>
											COOKING
										</label>

										<label htmlFor='trip' className='check'>
											<input
												type='checkbox'
												name='hobby'
												id='trip'
												onChange={handleCheck}
											/>
											TRIP
										</label>
										<div className='err'>{err.hobby}</div>
									</div>
								</div>
								{/* job */}
								<div className='input_group'>
									<label htmlFor='job' className='form_title'>
										JOB
									</label>
									<select name='job' id='job' onChange={(e) => handleSelect(e)}>
										<option value=''>select to job</option>
										<option value='office'>사무직</option>
										<option value='profession'>전문직</option>
										<option value='service'>서비스직</option>
										<option value='army'>군인</option>
										<option value='housewife'>주부</option>
										<option value='etc'>기타</option>
									</select>
									<div className='err'>{err.job}</div>
								</div>
								{/* comment */}
								<div className='input_group'>
									<label htmlFor='comments' className='form_title'>
										COMMENTS
									</label>
									<textarea
										id='comments'
										name='comments'
										value={val.comments}
										onChange={(e) => handleChange(e)}></textarea>
									<div className='err'>{err.comments}</div>
								</div>
							</div>
							<div className='btn_wrap'>
								<input
									type='reset'
									className='btn_normal'
									value='RESET'
									onClick={handleReset}
								/>
								<input
									type='submit'
									className='btn_normal'
									value='JOIN'
									onClick={() => setIsSubmit(true)}
								/>
							</div>
						</fieldset>
					</form>
					{/* <figure className='bg_city'>
						<img src={`${path}/img/pattern.jpg`} alt='' />
					</figure> */}
				</div>
			</Layout>
		</>
	);
}

export default Join;
