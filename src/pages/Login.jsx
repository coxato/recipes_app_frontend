import React, { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
// hooks
import { useAuth } from "../context/authContext";
// request
import authRequests from "../requests/auth";
// layouts
import AuthLayout from '../layouts/authLayout';
// style
import './styles/loginregister.css';


const Login = () => {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const [loadingState, setLoadingState] = useState({ loading: false, error: null });
    const navigate = useNavigate();
    const { setLogged } = useAuth();

    const handleChange = ev => {
        const {name, value} = ev.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoadingState({ loading: true, error: null });
        
        const { email, password } = inputValues;
        const logged = await authRequests.login({
            email, password
        });

        setLogged(logged);
        
        if(logged){
            navigate("/");
            return;
        }

        setLoadingState({ loading: false, error: !logged });
        setInputValues({ email: '', password: '' });
    }

    useEffect(() => {
        const logged = localStorage.getItem("logged");
        if(logged === "true"){
            navigate('/');
        };
    }, []);

    return (
        <AuthLayout>
            <div className="auth-form-wrapper box-shaddow-light">
                <h1 className="text-center r-centered">Login</h1>
                {
                    loadingState.error && (
                        <Alert variant="danger">Invalid email or password</Alert>
                    )
                }

                <Form>
                    <div className="form-group-flex">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={inputValues.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group-flex">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            size="lg"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={inputValues.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="r-centered">
                        <Button
                            type="primary"
                            loading={loadingState.loading}
                            onClick={handleSubmit}
                            className="my-3"
                        >
                            Sign in
                        </Button>
                    </div>

                    <Link to="/register">Don't have an account yet?, Register</Link>

                </Form>
            </div>
        </AuthLayout>
    )
}

export default Login;
