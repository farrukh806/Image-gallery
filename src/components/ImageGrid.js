import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
	const { docs, loading } = useFirestore('images');
	const clickHandler = (e) => {
		setSelectedImg(e.target.src);
	};

	return (
		<div className='img-grid'>
			{docs &&
				!loading &&
				docs.map((doc) => (
					<motion.div
						className='img-wrap'
						key={doc.id}
						whileHover={{ opacity: 1 }}
						onClick={clickHandler}
						layout>
						<motion.img
							src={doc.url}
							alt={doc.createdAt + 'img'}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
