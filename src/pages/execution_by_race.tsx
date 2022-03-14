import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Parallax } from "react-scroll-parallax";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	ArcElement,
	Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	ArcElement,
	Legend,
	ChartDataLabels,
);

const ExecutionByRacePage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div className="flex flex-row">
			<Parallax
				speed={0}
				className="page flex items-center justify-center bg-red-100"
				onProgressChange={(progress) => {
					if (progress > 0.35) {
						setIsInView(true);
					}
				}}
			>
				{isInView && (
					<div className="w-35-page">
						<Pie
							options={{
								animations: {
									tension: {
										duration: 1000,
										easing: "linear",
										from: 1,
										to: 0,
										loop: false,
									},
								},
								responsive: true,
								plugins: {
									title: { display: true, text: "Executions by Race" },
									legend: {
										display: true,
									},
									datalabels: {
										formatter: (value, ctx) => {
											let sum = 0;
											let dataArr = ctx.chart.data.datasets[0].data;
											dataArr.map((data) => {
												sum += data as number;
											});
											let percentage = ((value * 100) / sum).toFixed(2) + "%";
											return percentage;
										},
										color: "#000",
									},
								},
							}}
							data={{
								datasets: [
									{
										data: [147, 7353, 349, 362, 6344],
										backgroundColor: [
											"rgb(234,146,11)",
											"rgb(102,102,152)",
											"rgb(128,0,0)",
											"rgb(127,128,0)",
											"rgb(152,205,255)",
										],
									},
								],
								labels: ["Asian", "Black", "Hispanic", "Native American", "White"],
							}}
						></Pie>
						<div className="text-sm text-center pt-4">
							<a href="https://deathpenalty.procon.org/us-executions/#III" className="text-blue-400">
								https://deathpenalty.procon.org/us-executions
							</a>
						</div>
					</div>
				)}
			</Parallax>
		</div>
	);
};

export default ExecutionByRacePage;
