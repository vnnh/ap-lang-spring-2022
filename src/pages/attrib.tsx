import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

type Attribution = {
	title: string;
	url: string;
};

const attributions: Attribution[] = [
	{
		title: "Photo of Bryan Stevenson",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bryan_Stevenson_at_TED_2012.jpg/640px-Bryan_Stevenson_at_TED_2012.jpg",
	},
	{
		title: "Ohians to Stop Executions Logo",
		url: "https://otse.org/wp-content/uploads/2021/05/Logo-I-150x150.jpg",
	},
	{
		title: "Craig Trocino",
		url: "https://www.law.miami.edu/sites/default/files/Craig%20Trocino_crop.jpg",
	},
	{
		title: "Ernie Chambers",
		url: "https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/ErnieChambers.jpg",
	},
	{ title: "Cori Bush", url: "https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/CoriBush1.jpg" },
	{ title: "Jared Olsen", url: "https://wyoleg.gov/LegislatorSummary/Photos/66th-OlsenJared.jpg" },
	{
		title: "John H. Blume",
		url: "https://www.lawschool.cornell.edu/academics/experiential-learning/clinical-program/death-penalty-project/",
	},
	{
		title: "EJI Logo",
		url: "https://eji.org/",
	},
	{
		title: "Cornell Death Penalty Logo",
		url: "https://deathpenaltyworldwide.org/",
	},
	{
		title: "Death Penalty Action Logo",
		url: "https://deathpenaltyaction.org/",
	},
	{
		title: "Witness to Innocence Logo",
		url: "https://www.witnesstoinnocence.org/",
	},
	{
		title: "Mid-Atlantic Innocence Project Logo",
		url: "https://exonerate.org/",
	},
];

const AttributionPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<div className="page text-center align-center text-white">
				<Parallax
					speed={50}
					opacity={[0, 2]}
					className="page flex flex-col items-center py-24"
					onProgressChange={(progress) => {
						if (progress > 0.35) {
							setIsInView(true);
						}
					}}
				>
					<span className="text-6xl font-jaapokki">ATTRIBUTION</span>
					{isInView && (
						<div className="flex flex-col">
							{attributions.map((value, index) => {
								return (
									<motion.a
										href={value.url}
										className={`text-blue-400`}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3, delay: index * 0.2 }}
									>
										{value.url}
									</motion.a>
								);
							})}
						</div>
					)}
				</Parallax>
			</div>
		</div>
	);
};

export default AttributionPage;
