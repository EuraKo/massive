import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Join() {
	return (
		<>
			<Layout name='join' bg='thumb11.jpg'>
				<div className='inner'>
					<form action=''>
						<fieldset>
							<legend>회원가입하기</legend>
							<div className='form_wrap'>
								<div className='input_group'>
									<label htmlFor='userid' className='form_title'>
										ID
									</label>
									<input type='text' id='userid' name='userid' />
								</div>
								<div className='input_group'>
									<label htmlFor='pwd1' className='form_title'>
										PASSWORD
									</label>
									<input type='password' id='pwd1' name='pwd1' />
								</div>
								<div className='input_group'>
									<label htmlFor='pwd2' className='form_title'>
										RE PASSWORD
									</label>
									<input type='password' id='pwd2' name='pwd2' />
								</div>
								<div className='input_group'>
									<label htmlFor='email' className='form_title'>
										E - MAIL
									</label>
									<input type='text' id='email' name='email' />
								</div>
								<div className='input_group'>
									<label htmlFor='phone' className='form_title'>
										PHONE
									</label>
									<input type='text' id='phone' name='phone' />
								</div>
								<div className='input_group'>
									<div className='form_title'>AGE</div>
									<div className='radio_group'>
										<label htmlFor='10s' className='radio'>
											<input type='radio' name='age' id='10s' />
											10 ~ 20
										</label>

										<label htmlFor='20s' className='radio'>
											<input type='radio' name='20s' id='female' />
											21 ~ 30
										</label>

										<label htmlFor='30s' className='radio'>
											<input type='radio' name='age' id='30s' />
											31 ~ 40
										</label>

										<label htmlFor='40s' className='radio'>
											<input type='radio' name='age' id='40s' />
											41 ~ 50
										</label>

										<label htmlFor='50s' className='radio'>
											<input type='radio' name='age' id='50s' />
											51 ~
										</label>
									</div>
								</div>
								<div className='input_group'>
									<div className='form_title'>HOBBY</div>
									<div className='checkbox_group'>
										<label htmlFor='music'>
											<input type='checkbox' name='hobby' id='music' />
											MUSIC
										</label>

										<label htmlFor='game'>
											<input type='checkbox' name='hobby' id='game' />
											GAME
										</label>

										<label htmlFor='cooking'>
											<input type='checkbox' name='hobby' id='cooking' />
											COOKING
										</label>

										<label htmlFor='trip'>
											<input type='checkbox' name='hobby' id='trip' />
											TRIP
										</label>
									</div>
								</div>
								<div className='input_group'>
									<label htmlFor='job' className='form_title'>
										JOB
									</label>
									<select name='job' id='job'>
										<option value=''>select to job</option>
										<option value='office'>사무직</option>
										<option value='profession'>전문직</option>
										<option value='service'>서비스직</option>
										<option value='army'>군인</option>
										<option value='housewife'>주부</option>
										<option value='etc'>기타</option>
									</select>
								</div>
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
