import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const StevensonPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<div className="page text-center align-center text-white">
				<img
					className="w-full h-full absolute object-cover opacity-10"
					src={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Death_row_%284438077970%29.jpg/640px-Death_row_%284438077970%29.jpg`}
				></img>

				<Parallax
					speed={0}
					className="page"
					onProgressChange={(progress) => {
						if (progress > 0.45) {
							setIsInView(true);
						}
					}}
				>
					{isInView && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="absolute page flex flex-col items-center justify-center"
						>
							<blockquote className="text-6xl">
								<span className="px-1 text-gray-400 text-8xl font-jaapokki font-extrabold">"</span>
								Each of us is more than the worst thing we've ever done.
								<span className="px-1 text-gray-400 text-8xl font-jaapokki font-extrabold">"</span>
							</blockquote>
							<blockquote className="w-full text-right text-3xl mb-24 mr-96 text-gray-400">
								Bryan Stevenson
							</blockquote>
						</motion.div>
					)}
					<div className="page flex justify-end items-end">
						<div className="w-full h-72 bg-blue-600" />
						<Parallax className="absolute" speed={0} translateX={["-200px", "100px"]} opacity={[0, 3]}>
							<motion.img
								src="/bryan_stevenson.png"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							/>
						</Parallax>
					</div>
				</Parallax>
			</div>
		</div>
	);
};

export default StevensonPage;
