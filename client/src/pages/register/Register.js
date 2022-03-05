import { useState } from "react";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerFetch = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            password,
        };
        fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }).then((res) => {
            console.log(res);
            if (res.ok) {
                window.location.replace("/login");
            }
        });
    };
    return (
        <section className="register-Sec">
            <div>
                <h2>Registriere Dich & nimm Teil</h2>
                <article>
                    <h2>Mit Email registrieren</h2>
                    <form>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            name="password"
                            placeholder="Passwort"
                        />
                        <input
                            onClick={registerFetch}
                            className="btn-primary"
                            type="submit"
                            value="Registrieren"
                        />
                    </form>
                </article>
            </div>
        </section>
    );
};

export default Register;
