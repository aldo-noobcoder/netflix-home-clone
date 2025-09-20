import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
function Home() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Home;
