import { motion } from "framer-motion";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Text1Page = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<Parallax
				speed={-35}
				opacity={[0, 2]}
				className="page flex items-center justify-center"
				onProgressChange={(progress) => {
					if (progress > 0.45) {
						setIsInView(true);
					}
				}}
			>
				<div className="slow w-full h-24 pb-24 text-center align-center text-white">
					{isInView && (
						<>
							<motion.h1
								className="-pt-72 text-6xl font-jaapokki"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2 }}
							>
								all of us deserve second chances
							</motion.h1>
							<motion.h1
								className="pt-2 text-6xl font-jaapokki"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 3 }}
							>
								the death penalty is <span className="text-6xl font-bold text-red-500">unfair</span>
							</motion.h1>
							<motion.h1
								className="pt-4 text-2xl text-gray-500"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 4.5 }}
							>
								it does not give second chances
							</motion.h1>
							<motion.h1
								className="text-2xl text-gray-500"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 5.5 }}
							>
								it is not applied equally
							</motion.h1>
							<motion.h1
								className="text-2xl text-gray-500"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 6.5 }}
							>
								its budget is beyond justification
							</motion.h1>

							<motion.h1
								className="pt-24 pb-24 mx-72 text-4xl text-white"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 7.5 }}
							>
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
								Why do we want to kill all the broken people? What is wrong with us, that we think a
								thing like that can be right?
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
								<blockquote className="w-full text-right text-3xl mb-24 pr-24 text-gray-400">
									Bryan Stevenson
								</blockquote>
							</motion.h1>
						</>
					)}
				</div>
			</Parallax>
		</div>
	);
};

export default Text1Page;
