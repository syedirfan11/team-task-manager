import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password
                }
            );

            alert(response.data.message);

            console.log(response.data);

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Login Failed");
        }
    };

    return (
        <div style={{ padding: "40px" }}>

            <h1>Login</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;