import { motion } from "framer-motion";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

const BeyondRepairPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<Parallax
				speed={15}
				opacity={[0, 2]}
				className="page flex items-center justify-center"
				onProgressChange={(progress) => {
					if (progress > 0.3) {
						setIsInView(true);
					}
				}}
			>
				<div className="slow w-full h-24 text-center align-center text-white">
					{isInView && (
						<>
							<motion.blockquote
								className="text-4xl"
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{ delay: 3, duration: 1 }}
							>
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
								Numerous efforts to 'improve' the American death penalty have failed. I think it is
								<span className="text-red-300 font-bold"> beyond repair</span>.
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
							</motion.blockquote>
							<motion.blockquote
								className="text-xl mx-28"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 3, duration: 1 }}
							>
								<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								The death penalty does not serve as a deterrent, is much more expensive that sentencing
								persons to life in prison, is racially discriminatory in application and has resulted in
								the wrongful convictions and executions of innocent persons.
								<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
							</motion.blockquote>
						</>
					)}
					<Parallax className="flex justify-end pr-24" speed={0} translateX={["-200px", "100px"]}>
						<div className="flex flex-col pr-4">
							<blockquote className="w-full text-right text-2xl font-bold text-gray-200">
								John H. Blume
							</blockquote>
							<blockquote className="w-full text-right text-lg text-red-400">
								Director of the Cornell Death Penalty Project
							</blockquote>
						</div>
						<img
							className="rounded-full h-24 w-24 object-cover"
							src="https://lawschool.cornell.edu/wp-content/uploads/2020/12/Faculty_bio_450x400_Blume.jpg"
						></img>
					</Parallax>
				</div>
			</Parallax>
		</div>
	);
};

export default BeyondRepairPage;
