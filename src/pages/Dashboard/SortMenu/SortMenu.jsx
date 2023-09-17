import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

		animate(
			'ul',
			{
				clipPath: isOpen
					? 'inset(0% 0% 0% 0% round 10px)'
					: 'inset(10% 50% 90% 50% round 10px)',
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5,
			}
		);

		animate(
			'li',
			isOpen
				? { opacity: 1, scale: 1, filter: 'blur(0px)' }
				: { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
			{
				duration: 0.2,
				delay: isOpen ? staggerMenuItems : 0,
			}
		);
	}, [isOpen]);

	return scope;
}

export default function SortMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const scope = useMenuAnimation(isOpen);

	return (
		<nav className='menu' ref={scope}>
			<motion.button
				className='bg-gray-200 px-3 py-1 text-lg text-black font-semibold rounded flex items-center'
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}>
				Sort
				<div
					className='arrow ml-3'
					style={{ transformOrigin: '50% 55%' }}>
					<svg
						className='fillwhi'
						width='15'
						height='15'
						viewBox='0 0 20 20'>
						<path d='M0 7 L 20 7 L 10 16' />
					</svg>
				</div>
			</motion.button>
			<ul
				style={{
					pointerEvents: isOpen ? 'auto' : 'none',
					clipPath: 'inset(10% 50% 90% 50% round 10px)',
				}}>
				<li>Name</li>
				<li>Date</li>
				<li>Email</li>
			</ul>{' '}
		</nav>
	);
}
