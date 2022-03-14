import { motion } from "framer-motion";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ExecutionMapPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div className="flex flex-row">
			<Parallax speed={0} opacity={[0, 2]} className="w-65-page h-page flex items-center justify-center">
				{isInView && (
					<>
						<motion.div
							className="absolute w-full h-24 text-center align-center text-white text-2xl"
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 5 }}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								According to data from December 31, 2020,
								<span className="font-bold"> 20 states</span> did not allow the death penalty.
								<motion.div
									className="pt-2"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 2 }}
								>
									Of the states that did, the <span className="font-bold">majority</span> did not
									carry out an execution in 2020.
								</motion.div>
							</motion.div>
						</motion.div>
						<motion.div
							className="absolute w-full h-24 text-center align-center text-white text-2xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 5 }}
						>
							In 1847, Michigan became the first state to abolish the death penalty.
							<motion.div
								className="pt-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 7 }}
							>
								Throughout 1907 to 1917, nine more states followed.
							</motion.div>
							<motion.div
								className="pt-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 8.5 }}
							>
								The most recent state to abolish the death penalty, Illinois, replaced it with life
								without parole in 2011.
							</motion.div>
						</motion.div>
					</>
				)}
			</Parallax>
			<Parallax
				speed={0}
				opacity={[0, 2]}
				className="w-35-page h-page flex flex-col items-center justify-center bg-white"
				onProgressChange={(progress) => {
					if (progress > 0.45) {
						setIsInView(true);
					}
				}}
			>
				<img src="/execution_map.png"></img>
				<div className="text-sm text-right -mr-72">
					<a href="https://bjs.ojp.gov/content/pub/pdf/cp20st.pdf" className="text-blue-400">
						https://bjs.ojp.gov/content/pub/pdf/cp20st.pdf
					</a>
				</div>
			</Parallax>
		</div>
	);
};

export default ExecutionMapPage;
