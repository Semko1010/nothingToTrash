import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newToken, favorite, newUserId } from "../../App";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useContext(newToken);
	const { userId } = useContext(newUserId);
	//State für die Favoriten
	const { favoritesItem, setFavoritesItem } = useContext(favorite);

	const { setUserId } = useContext(newUserId);
	const navigate = useNavigate();
	const [success, setSuccess] = useState("Mit Email anmelden");

	//Fetch zum ersten mal alle Favoriten
	useEffect(() => {
		axios
			.get("/api/user/favorites", {
				headers: { token, userId },
			})
			.then(res => {
				setFavoritesItem(res.data);
			});
	});

	const loginFetch = e => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		axios
			.post("/api/users/login", {
				email: user.email,
				password: user.password,
			})
			.then(res => {
				if (res.data.token) {
					setToken(res.data.token);
					setUserId(res.data.userObjId);
					navigate("/");
				} else {
					setSuccess("Email oder Passwort falsch!!");
				}
			});
	};

	return (
		<section className='login-Sec'>
			<div>
				<h2>Registriere Dich & nimm Teil</h2>
				<article>
					<h2>{success}</h2>
					<form>
						<input
							onChange={e => setEmail(e.target.value)}
							value={email}
							type='email'
							name='email'
							placeholder='Email'
						/>
						<input
							onChange={e => setPassword(e.target.value)}
							value={password}
							type='password'
							name='password'
							placeholder='Passwort'
						/>
						<input
							onClick={loginFetch}
							className='btn-primary'
							type='submit'
							value='Login'
						/>
					</form>
				</article>
			</div>
		</section>
	);
};

export default Login;
