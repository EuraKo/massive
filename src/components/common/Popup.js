function Popup(props) {
	return (
		<aside className='pop'>
			<div className='inner'>
				<div className='con'>{props.children}</div>
				<button
					type='button'
					className='close'
					onClick={() => {
						props.setOpen(false);
					}}>
					<span className='hidden'>close</span>
				</button>
			</div>
		</aside>
	);
}

export default Popup;
