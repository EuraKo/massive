import { Route, Switch } from 'react-router-dom';
// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import './scss/style.scss';
function App() {
	return (
		<>
			<Route exact path='/'>
				<Header />
			</Route>
			<Footer />
		</>
	);
}

export default App;
