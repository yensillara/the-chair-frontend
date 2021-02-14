import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/signup.scss";
import FormSignup from "../component/formsignup";

export const Signup = () => {
	return (
		<div>
			<FormSignup />
		</div>
	);
};
