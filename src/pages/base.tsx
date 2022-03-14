import React from "react";
import { Parallax } from "react-scroll-parallax";

const BasePage = () => {
	return (
		<div>
			<Parallax speed={0} className="absolute page">
				<div id="sparks" />
			</Parallax>
			<Parallax speed={50} className="page flex items-center justify-center">
				<div className="slow w-full h-24 text-center align-center text-white">
					<h1 className="text-6xl font-jaapokki">DEATH PENALTY</h1>
					<span className="text-6xl font-bold">EXECUTIONS</span>
				</div>
			</Parallax>
		</div>
	);
};

export default BasePage;
