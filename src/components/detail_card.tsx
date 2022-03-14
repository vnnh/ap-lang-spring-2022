import React from "react";
import { motion } from "framer-motion";

const DetailCard = ({
	top,
	left,
	delay,
	img,
	author,
	authorPosition,
	message,
}: {
	top: string;
	left: string;
	delay: number;
	img: string;
	author: string;
	authorPosition: string;
	message: JSX.Element;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.2, delay }}
			className="absolute card flex rounded-xl m:p-0 bg-gray-800 text-white max-w-xl"
			style={{ top, left }}
		>
			<img className="rounded-full mr-2 p-2 h-28 square object-cover bg-cover" src={img} />

			<div className="text-left pr-3 py-2">
				{message}
				<figcaption className="bottom-0">
					<div className="text-blue-400">{author}</div>
					<div className="text-gray-400">{authorPosition}</div>
				</figcaption>
			</div>
		</motion.div>
	);
};

export default DetailCard;
