import { Link } from "react-router";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<nav className="navbar">
				<div className="navbar__brand">
					<Link to={"/"}>
						<img
							src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
							alt="logo"
							className="brand__logo"
						/>
					</Link>
				</div>

				<HeaderNavItems />
			</nav>
		</header>
	);
}

function HeaderNavItems() {
	return (
		<div className="navbar__nav__items">
			<div className="nav__item">
				<div className="dropdown__container">
					<i className="fas fa-globe"></i>
					<select
						name="languages"
						id="languagesSelect"
						className="language__drop__down"
						defaultValue="english"
					>
						<option value="english" style={{ color: "black" }}>
							English
						</option>
						<option value="indonesia" style={{ color: "black" }}>
							Indonesia
						</option>
					</select>
				</div>
			</div>

			<div className="nav__item">
				<Link to={"/sign-in"}>
					<button className="signin__button">Sign in</button>
				</Link>
			</div>
		</div>
	);
}
