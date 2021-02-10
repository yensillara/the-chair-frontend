import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import professionalUser from "../../img/vista1.jpg";
import homeUser from "../../img/vista2.jpg";

export const Home = () => (
	<>
		<div className="home-user text-left">
			<img className="image1" src={homeUser} />
		</div>
		<div className="professional-user text-right">
			<img src={professionalUser} className="image2" />
		</div>
	</>
);
