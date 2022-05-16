import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Main from './components/main/Main';
//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

import './scss/style.scss';

const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.MEMBERS.start });
		dispatch({ type: types.YOUTUBE.start });
		dispatch({
			type: types.GALLERY.start,
			opt: { type: 'user', count: 20, user: '195406071@N05' },
		});
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/'>
					<Header type={'header_sub'} />
				</Route>
			</Switch>
			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />
			<Footer />
		</>
	);
}

export default App;
