import { Link } from "react-router";
import "./NotFound.css";
function NotFound() {
	return (
		<div className="not-found-container">
			<div className="not-found-child-container">
				<h1 className="not-found-face">（ＴДＴ）</h1>
				<p className="not-found-description">
					Unfortunately we couldn't find that page
				</p>
			</div>

			<Link to={"/"}>
				<button className="primary__button">Return to home</button>
			</Link>
		</div>
	);
}

export default NotFound;
