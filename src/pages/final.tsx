import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const FinalPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<div className="page text-center align-center text-white">
				<img
					className="w-full h-full absolute object-cover opacity-30"
					src={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bryan_Stevenson_at_TED_2012.jpg/640px-Bryan_Stevenson_at_TED_2012.jpg`}
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
							<blockquote className="text-4xl mx-72">
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
								Somebody has to stand when other people are sitting. Somebody has to speak when other
								people are quiet.
								<span className="px-1 text-gray-400 text-6xl font-jaapokki font-extrabold">"</span>
							</blockquote>
							<motion.div
								className="absolute page bg-white flex flex-col items-center pt-24"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 3 }}
							>
								<span className="text-6xl font-jaapokki text-black">DONATE NOW</span>
								<a className="pt-2" href="https://eji.org/">
									<img src="https://eji.org/wp-content/themes/eji/_include/img/logo.svg" />
								</a>
								<a className="pt-2" href="https://deathpenaltyworldwide.org/">
									<img src="https://secureservercdn.net/198.71.233.33/l8z.2c6.myftpupload.com/wp-content/themes/cornell/FrontEndAssets/Home/logo_header_cornell.svg" />
								</a>
								<a className="pt-2" href="https://deathpenaltyaction.org/">
									<img src="https://deathpenaltyaction.org/wp-content/uploads/2022/02/DPA-red-and-black-on-white-WEB-HEADER-400px.png" />
								</a>
								<a className="pt-2" href="https://www.witnesstoinnocence.org/">
									<img src="https://static.wixstatic.com/media/434898_0380e573278542dca01b54a335f8915a~mv2.png/v1/fill/w_171,h_48,al_c,usm_0.66_1.00_0.01,enc_auto/434898_0380e573278542dca01b54a335f8915a~mv2.png" />
								</a>
							</motion.div>
							<motion.div
								className="absolute -bottom-44 flex-col items-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 3 }}
							>
								<a href="https://exonerate.org/">
									<img src="https://exonerate.org/wp-content/uploads/2020/01/MAIP_logo_stacked.png" />
								</a>
							</motion.div>
						</motion.div>
					)}
				</Parallax>
			</div>
		</div>
	);
};

export default FinalPage;
