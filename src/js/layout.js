import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Signup } from "./views/signup";
import { ViewLogin } from "./views/login";
import injectContext from "./store/appContext";

import { ChairNavbar } from "./component/chairNavbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ChairNavbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/login">
						<ViewLogin />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
