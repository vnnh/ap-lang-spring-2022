import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Parallax } from "react-scroll-parallax";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const ExecutionCountPage = () => {
	const [isInView, setIsInView] = useState(false);

	return (
		<div className="flex flex-row">
			<Parallax
				speed={0}
				className="page flex items-center justify-center bg-red-100"
				onProgressChange={(progress) => {
					if (progress > 0.45) {
						setIsInView(true);
					}
				}}
			>
				{isInView && (
					<div className="w-75-page">
						{" "}
						<Line
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
									title: { display: true, text: "U.S. Executions" },
									legend: { display: false },
									datalabels: { display: true, font: { weight: 800 } },
								},
								scales: {
									x: {
										title: { display: true, text: "Year" },

										axis: "x",
									},
									y: {
										title: { display: true, text: "Number of executions" },

										axis: "y",
									},
								},
							}}
							data={{
								datasets: [
									{
										data: [
											1, 0, 2, 0, 1, 2, 5, 21, 18, 18, 25, 11, 16, 23, 14, 31, 38, 31, 56, 45, 74,
											68, 98, 85, 66, 71, 65, 59, 60, 53, 42, 37, 52, 46, 43, 43, 39, 35, 28, 20,
											23, 25, 22, 17, 11,
										],
										borderColor: "rgb(75, 192, 192)",
										xAxisID: "x",
										yAxisID: "y",
									},
								],
								labels: [
									1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
									1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
									2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
									2019, 2020, 2021,
								].map((val) => `${val}`),
							}}
						></Line>
						<div className="text-sm text-right mr-6">
							<a href="https://bjs.ojp.gov/content/data/exest.csv" className="text-blue-400">
								https://bjs.ojp.gov/content/data/exest.csv
							</a>
						</div>
					</div>
				)}
			</Parallax>
		</div>
	);
};

export default ExecutionCountPage;
