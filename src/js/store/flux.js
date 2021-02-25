// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://8080-plum-toucan-we4n0yd5.ws-us03.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			professional: {},
			clients: [],
			projects: [],
			token: "",
			logInState: false,
			checked: false
		},

		actions: {
			switchBody: className => {
				let body = document.body;
				body.className = className;
				// body.classList.add(className);
			},
			checkStorage: () => {
				let token = sessionStorage.getItem("token");
				if (token != "") {
					console.log(token);
					setStore({
						checked: true,
						token: sessionStorage.getItem("token"),
						professional: JSON.parse(sessionStorage.getItem("professional"))
					});
				} else {
					setStore({ checked: true });
				}
			},
			logout: async () => {
				sessionStorage.setItem("token", "");
				sessionStorage.setItem("professional", "");
				setStore({
					token: "",
					professional: {}
				});
			},
			professionalRegister: async data_signup => {
				console.log(data_signup);
				let url = BASE_URL + "/professionals";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_signup)
				});
				if (response.ok) {
					let body = await response.json();
					setStore({
						token: body["jwt"],
						professional: body["professional"]
					});
					sessionStorage.setItem("token", body.jwt);
					sessionStorage.setItem("professional", JSON.stringify(body.professional));
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			professionalLogin: async data_login => {
				let url = BASE_URL + "/login";
				let store = getStore();
				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(data_login),
					headers: {
						"Content-Type": "application/json"
					}
				});

				if (response.ok) {
					let information = await response.json();
					console.log(information);
					setStore({ professional: information.professional, token: information.jwt, logInState: true });
					sessionStorage.setItem("token", information.jwt);
					sessionStorage.setItem("professional", JSON.stringify(information.professional));
					console.log(response.ok);
					return true;
				} else {
					console.log(response.statusText);
					return false;
				}
			},

			clientRegister: async data_signup => {
				console.log(data_signup);
				let store = getStore();
				let url = BASE_URL + "/clients";
				let response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify(data_signup)
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			}
		}
	};
};

export default getState;
