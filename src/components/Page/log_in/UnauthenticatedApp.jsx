import React from "react";
import useToken from "../../Hooks/useToken";
import "./login.scss"
function UnauthenticatedApp() {
	const [setIsLoggedIn] = useToken(true);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const { email, password } = evt.target.elements;

		const res = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value.trim(),
				password: password.value.trim(),
			}),
		});

		const data = await res.json();

		if (data?.token) {
			setIsLoggedIn(data?.token);
		}
	};

	return (
		<>
		<div className="body">
		<div className="wrapper">
			<form onSubmit={handleSubmit}>
				<h1>Log in</h1>
				<div className="input--box" >
					<input type="email" name="email" defaultValue="eve.holt@reqres.in" />
				</div>
				

				<div className="input--box">
					<input type="password" name="password" defaultValue="cityslicka" />
				</div>


				<div className="remember--forgot">
					<label><input type="checkbox" /></label>
					<a href="#link">Forgot password?</a>
				</div>

				<button className="btn" type="submit">Log In</button>

				<div className="register-link">
					<p>Don't have an accaunt? <a href="#link">Register</a></p>
				</div>
			</form>
			</div>
		</div>
		</>
	);
}

export default UnauthenticatedApp;
