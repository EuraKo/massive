import { Route, Switch } from 'react-router-dom';
// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Visual from './components/main/Visual';
import Notice from './components/main/Notice';
//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

import './scss/style.scss';
function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'header_main'} />
					<Visual />
					<Notice />
				</Route>
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
