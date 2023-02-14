import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

const URL= config.backUrl;
console.log(`my url :\n${URL}`)

function SignIn() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: "",
        idBoss: 0,
        type: "ad",
    });

    const [error, setError] = useState(null);

    const { type= "ad",name,idBoss= 0,password,email} = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

      const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log(`my url :\n${URL}`)
            const response = await axios.post(`${URL}/users/signup`,  formData );
            const data = response.data;
            if (!response) {
                throw new Error("SignIn failed");
            }
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        
        <div className="container">
            <h1 className="text-center my-5">SignIn</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
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
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        id="name"
                        type="name"
                        className="form-control" 
                        name="name"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idBoss">idBoss</label>
                    <input
                        id="type"
                        type="type"
                        className="form-control" 
                        name="type"
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


export default SignIn;