import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import AttributionPage from "src/pages/attrib";
import BasePage from "src/pages/base";
import BeyondRepairPage from "src/pages/beyond_repair";
import ClockPage from "src/pages/clock";
import DetailsPage from "src/pages/details";
import ClimaxPage from "src/pages/climax";
import ExecutionByRacePage from "src/pages/execution_by_race";
import ExecutionCountPage from "src/pages/execution_count";
import ExecutionMapPage from "src/pages/execution_map";
import FinalPage from "src/pages/final";
import StevensonPage from "src/pages/stevenson";
import Text1Page from "src/pages/text1";
import mod from "src/util/mod";

type Page = {
	name: string;
	backgroundColor: string;
	component: () => JSX.Element;
};

const pages: Page[] = [
	{
		name: "title",
		backgroundColor: "rgb(17, 24, 39)",
		component: BasePage,
	},
	{
		name: "details",
		backgroundColor: "#243e73",
		component: DetailsPage,
	},
	{
		name: "stevenson",
		backgroundColor: "#0f0f0f",
		component: StevensonPage,
	},
	{
		name: "unfairness",
		backgroundColor: "#0f0f0f",
		component: Text1Page,
	},
	{
		name: "execution_by_race",
		backgroundColor: "#0f0f0f",
		component: ExecutionByRacePage,
	},
	{
		name: "climax",
		backgroundColor: "#0f0f0f",
		component: ClimaxPage,
	},
	{
		name: "clock",
		backgroundColor: "rgb(55,65,81)",
		component: ClockPage,
	},
	{
		name: "execution_count",
		backgroundColor: "rgb(55,65,81)",
		component: ExecutionCountPage,
	},
	{
		name: "execution_map",
		backgroundColor: "rgb(55,65,81)",
		component: ExecutionMapPage,
	},
	{
		name: "beyond_repair",
		backgroundColor: "rgb(127,29,29)",
		component: BeyondRepairPage,
	},
	{
		name: "final",
		backgroundColor: "rgb(55,65,81)",
		component: FinalPage,
	},
	{
		name: "attribution",
		backgroundColor: "#0f0f0f",
		component: AttributionPage,
	},
];

const App = () => {
	useEffect(() => {
		let currentPageIndex =
			window.location.hash !== "" ? pages.findIndex((value) => value.name === window.location.hash) : 0;

		const keydownListener = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();

				const operand = e.key === "ArrowDown" ? 1 : -1;
				currentPageIndex = mod(currentPageIndex + operand, pages.length);

				const top = document.getElementById(pages[currentPageIndex].name)?.offsetTop ?? 0;
				window.scrollTo({ top });
			}
		};

		document.addEventListener("keydown", keydownListener);
		return () => {
			document.removeEventListener("keydown", keydownListener);
		};
	});

	return (
		<ParallaxProvider>
			<div className="page flex flex-col">
				{pages.map((value) => {
					return (
						<div id={value.name} className="full" style={{ backgroundColor: value.backgroundColor }}>
							{React.createElement(value.component)}
						</div>
					);
				})}
			</div>
		</ParallaxProvider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

if (window.location.hash !== "") {
	const top = document.getElementById(window.location.hash)?.offsetTop ?? 0;
	window.scrollTo({ top });

	if (top === 0) {
		window.location.hash = "";
	}
}

if (import.meta.hot) {
	import.meta.hot.accept();
}
