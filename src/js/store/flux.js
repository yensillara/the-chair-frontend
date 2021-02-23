const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			professional: {},
			clients: [],
			projects: [],
			token: ""
		},
		actions: {
			professionalRegister: async data_signup => {
				console.log(data_signup);
				let url = BASE_URL + "/professionals";
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data_signup)
				});
				if (response.ok) {
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

				let information = await response.json();
				console.log(information);

				if (response.ok) {
					setStore({ token: information.jwt });
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
