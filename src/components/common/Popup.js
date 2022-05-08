function Popup(props) {
	return (
		<aside className='pop'>
			<div className='con'>{props.children}</div>
			<button
				type='button'
				className='close'
				onClick={() => {
					props.setOpen(false);
				}}>
				close
			</button>
		</aside>
	);
}

export default Popup;
