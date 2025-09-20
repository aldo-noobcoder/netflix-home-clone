import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Main from "./components/Main/Main";

function App() {
	return (
		<>
			<BrowserRouter basename="/netflix-home-clone/">
				<Routes>
					<Route element={<Home />}>
						<Route index element={<Main />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
