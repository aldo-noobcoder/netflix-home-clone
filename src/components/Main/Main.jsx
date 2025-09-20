import "./Main.css";
import Hero from "./components/Hero/Hero";
import FaqList from "./components/FaqList/FaqList";
import Feature1 from "./components/Feature1/Feature1";
import Feature2 from "./components/Feature2/Feature2";
import Feature3 from "./components/Feature3/Feature3";

function Main() {
	return (
		<>
			<main>
				<Hero />

				<section className="features__container">
					<Feature1 />
					<Feature2 />
					<Feature3 />
				</section>
				<FaqList />
			</main>
		</>
	);
}

export default Main;
