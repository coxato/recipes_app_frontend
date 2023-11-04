import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "antd";
// request
import authRequests from "../requests/auth";

import AuthLayout from '../layouts/authLayout';


const Login = () => {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);


    const handleChange = ev => {
        const [name, value] = ev.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        const { email, password } = inputValues;
        const logged = await authRequests.login({
            email, password
        });

        localStorage.setItem("logged", logged ? "true" : "false");
        setLoading(false);
    }

    return (
        <AuthLayout>
            <h1 className="text-center centered">Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        size="lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={inputValues.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        size="lg"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={inputValues.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="text-center mt-3">
                    <Button
                        type="submit"
                        loading={loading}
                    >
                        Sign in
                    </Button>
                </div>
            </Form>
        </AuthLayout>
    )
}

export default Login;
