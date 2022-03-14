import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import DetailCard from "src/components/detail_card";

const DetailsPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div>
			<div className="page text-center align-center text-white">
				{isInView && (
					<Parallax speed={0} className="absolute page">
						<DetailCard
							delay={0}
							left={`15%`}
							top={`5%`}
							img={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bryan_Stevenson_at_TED_2012.jpg/640px-Bryan_Stevenson_at_TED_2012.jpg`}
							author={`Bryan Stevenson`}
							authorPosition={`Founder of the Equal Justice Initiative`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									Why do we want to kill all the broken people? What is wrong with us, that we think a
									thing like that can be right?
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
						<DetailCard
							delay={0.2}
							left={`65%`}
							top={`35%`}
							img={`https://otse.org/wp-content/uploads/2021/05/Logo-I-150x150.jpg`}
							author={`Ohians to Stop Executions`}
							authorPosition={`Anti-Execution Organization`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									Capital punishment prolongs pain for victims’ families, dragging them through an
									agonizing and lengthy process that holds out the false promise of healing through an
									execution – often resulting in a different sentence in the end…
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
						<DetailCard
							delay={0.1}
							left={`10%`}
							top={`35%`}
							img={`https://www.law.miami.edu/sites/default/files/Craig%20Trocino_crop.jpg`}
							author={`Craig Trocino`}
							authorPosition={`Director of the Innocence Clinic at the University of Miami`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									The death penalty is not a deterrent despite the claims of its proponents. [...] In
									states that have recently abolished the death penalty, there has been no increase in
									murder rates.
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
						<DetailCard
							delay={0.3}
							left={`15%`}
							top={`75%`}
							img={`https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/ErnieChambers.jpg`}
							author={`Ernie Chambers`}
							authorPosition={`Nebraska State Senator`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									when you have this many people conclusively proved by DNA evidence to be actually
									innocent, there is no escaping the conclusion that innocent people have been
									executed…
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
						<DetailCard
							delay={0.4}
							left={`55%`}
							top={`10%`}
							img={`https://s3.amazonaws.com/ballotpedia-api4/files/thumbs/200/300/CoriBush1.jpg`}
							author={`Cori Bush`}
							authorPosition={`US Representative`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									We must build a fair criminal-legal system on a foundation of mercy, due process and
									equity. We must break the cycles of death, devastation and trauma that have broken
									Black and brown communities like mine.
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
						<DetailCard
							delay={0.5}
							left={`60%`}
							top={`70%`}
							img={`https://wyoleg.gov/LegislatorSummary/Photos/66th-OlsenJared.jpg`}
							author={`Jared Olsen`}
							authorPosition={`Wyoming State Representative`}
							message={
								<blockquote>
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
									Many conservatives also recognize that the death penalty inflicts extreme and
									unnecessary trauma on the family members of victims and the correctional employees
									who have the job of taking the prisoner’s life.
									<span className="px-1 text-gray-400 text-2xl font-jaapokki font-extrabold">"</span>
								</blockquote>
							}
						/>
					</Parallax>
				)}
				<Parallax
					speed={50}
					scale={[-0.1, 2]}
					className="page flex items-center justify-center"
					onProgressChange={(progress) => {
						if (progress > 0.45) {
							setIsInView(true);
						}
					}}
				>
					<span className="text-6xl font-bold">DETAILS</span>
				</Parallax>
			</div>
		</div>
	);
};

export default DetailsPage;
