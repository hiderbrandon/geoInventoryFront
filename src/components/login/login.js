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
        <div className="container">
          <h1 className="text-center my-5">Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
}

export default Login;