import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube } from './redux/action';

import axios from 'axios';

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

	const fetchYoutube = async () => {
		const playListId = 'PLlM8MQlXeresOXqKmguYK0m04KTjnamS4';
		const key = 'AIzaSyBmkrTuDWtAo4Y49kWA9tJVe6DvS6usIkA';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			const action = setYoutube(json.data.items);
			dispatch(action);
		});
	};

	useEffect(() => {
		fetchYoutube();
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
