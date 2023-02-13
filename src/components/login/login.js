import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

const URL= config.backUrl;

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
            const response = await axios.post(`${URL}/auth/login`,  formData );
            const data = response.data;
            if (!response) {
                throw new Error("login failed");
            }
            localStorage.setItem('jwt', data.access_token);
            localStorage.setItem('username', data.name);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        
        <div className="container">
            <h1 className="text-center my-5">Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input
                        id="username"
                        type="username"
                        name="username"
                        className="form-control"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="form-control" 
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
     );
}


export default Login;