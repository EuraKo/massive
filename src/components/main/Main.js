// import { Route } from 'react-router-dom';

// dom
import Header from '../common/Header';
import Visual from './Visual';
import Gallery from './Gallery';
import Notice from './Notice';
import Vids from './Vids';

function Main() {
	return (
		<>
			<Header type={'header_main'} />
			<Visual />
			<Gallery />
			<Notice />
			<Vids />
		</>
	);
}

export default Main;
