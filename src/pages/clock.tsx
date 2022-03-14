import { motion } from "framer-motion";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Rive from "rive-react";

const ClockPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div className="flex flex-row">
			<Parallax speed={0} opacity={[0, 2]} className="w-25-page h-page flex items-center justify-center bg-white">
				<Rive src="/clock.riv" className="w-64 h-64"></Rive>
			</Parallax>{" "}
			<Parallax
				speed={15}
				opacity={[0, 2]}
				className="w-75-page h-page flex items-center justify-center"
				onProgressChange={(progress) => {
					if (progress > 0.45) {
						setIsInView(true);
					}
				}}
			>
				{isInView && (
					<motion.div
						className="slow w-full h-24 mx-72 text-center align-center text-white text-2xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						The average time between sentencing and execution has gone from{" "}
						<span className="font-bold">71 months</span> in 1985 to{" "}
						<span className="font-bold">243 months</span> in 2017.
						<div className="text-sm text-right">
							<a
								href="https://deathpenaltyinfo.org/death-row/death-row-time-on-death-row"
								className="text-blue-400"
							>
								https://deathpenaltyinfo.org/death-row/death-row-time-on-death-row
							</a>
						</div>
					</motion.div>
				)}
			</Parallax>
		</div>
	);
};

export default ClockPage;
