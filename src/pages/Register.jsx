import React, { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
// request
import authRequests from "../requests/auth";
// layouts
import AuthLayout from '../layouts/authLayout';
// style
import './styles/loginregister.css';


const Register = () => {
    const [inputValues, setInputValues] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [loadingState, setLoadingState] = useState({ loading: false, errors: [] });
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = ev => {
        const {name, value} = ev.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

    // just check if field isn't empty
    const simpleValidation = () => {
        const errors = [];
        for (const [key, value] of Object.entries(inputValues)) {
            if(!value) errors.push(`${key} is needed`);
        }
        return errors;
    }

    // submit form
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoadingState({ loading: true, errors: [] });
        
        const { email, password, firstName, lastName } = inputValues;
        const errors = simpleValidation();

        if(errors.length){
            setLoadingState({ loading: false, errors });
            return;
        }
        // ajax to backend
        const result = await authRequests.register({
            email, password, firstName, lastName
        });
        // backend validations
        if(result === "Email already in use" || result === "Invalid email" || result === "Password needs at least 6 characters"){
            setLoadingState({ loading: false, errors: [result] });
            return;
        }

        if(!result){
            setLoadingState({ loading: false, errors: ["Error creating email, try again later"] });
            return;
        }

        setLoadingState({ loading: false, errors: [] });
        setInputValues({ email: '', password: '', firstName: '', lastName: '' });
        setSuccess(true);
        // show a success message, then redirect to login
        setTimeout(() => {
            navigate('/login');
        }, 1500);
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
                <h1 className="text-center r-centered">Register</h1>
                {
                    (loadingState.errors.length > 0) && loadingState.errors.map((err, idx) => (
                        <Alert key={idx} variant="danger">{err}</Alert>
                    ))
                }
                {
                    success && (
                        <Alert variant="success">Account created!!</Alert>
                    )
                }

                <Form onSubmit={handleSubmit}>
                    <div className="form-group-flex">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            name="firstName"
                            required
                            placeholder="Enter your first name"
                            value={inputValues.firstName}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group-flex">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={inputValues.lastName}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group-flex">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={inputValues.email}
                            onChange={handleChange}
                            required
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
                            required
                            min={6}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="r-centered">
                        <Button
                            type="primary"
                            loading={loadingState.loading}
                            className="my-3"
                            onClick={handleSubmit}
                        >
                            Register
                        </Button>
                    </div>

                    <Link to="/login">Already have an account?, Login</Link>

                </Form>
            </div>
        </AuthLayout>
    )
}

export default Register;
