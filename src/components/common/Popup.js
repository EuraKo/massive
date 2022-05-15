import { forwardRef, useState, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.aside
						className={`pop ${props.type}`}
						initial={{ opacity: 0, rotate: 90 }}
						animate={{ opacity: 1, transition: { duration: 0.3 }, rotate: 0 }}
						exit={{ opacity: 0, transition: { duration: 0.3 }, rotate: 90 }}>
						<div className='inner'>
							<motion.div
								className='con'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 0.5 } }}
								exit={{ opacity: 0 }}>
								{props.children}
							</motion.div>
							<button
								type='button'
								className='close'
								onClick={() => {
									setOpen(false);
								}}>
								<span className='hidden'>close</span>
							</button>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
});

export default Popup;
