import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
const path = process.env.PUBLIC_URL;
function Department() {
	const [members, setMembers] = useState([]);
	return (
		<>
			<Layout name='dapartment' bg='thumb1-1.jpg'></Layout>
		</>
	);
}

export default Department;
