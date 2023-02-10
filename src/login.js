import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const { username, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

      const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth/login',  formData );
            const data = response.data;
            console.log(data);
            if (!response) {
                throw new Error("login failed");
            }
            localStorage.setItem('jwt', data.access_token);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}

export default Login;