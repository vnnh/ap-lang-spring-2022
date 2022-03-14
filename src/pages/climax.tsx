import { motion } from "framer-motion";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const ClimaxPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<Parallax
				speed={15}
				opacity={[0, 2]}
				className="page flex items-center justify-center"
				onProgressChange={(progress) => {
					if (progress > 0.45) {
						setIsInView(true);
					}
				}}
			>
				<div className="slow w-full h-24 text-center align-center text-white">
					{isInView && (
						<motion.h1
							className="pt-4 text-6xl font-bold"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2 }}
						>
							the <span className="text-6xl text-green-500">beginning</span> of the{" "}
							<span className="text-6xl text-red-500">end</span>
						</motion.h1>
					)}
				</div>
			</Parallax>
		</div>
	);
};

export default ClimaxPage;
