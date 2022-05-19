import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const path = process.env.PUBLIC_URL;

function Join() {
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		phone: '',
		comments: '',
		age: null,
		hobby: null,
		job: '',
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
					<figure className='bg_city'>
						<img src={`${path}/img/pattern.jpg`} alt='' />
					</figure>
				</div>
			</Layout>
		</>
	);
}

export default Join;
