import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import '../cssfiles/Registration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (username.trim() !== '' && firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            if (password !== confirmPassword) {
                message.error('The passwords do not match!');
            } else {
                localStorage.setItem('registeredUser', JSON.stringify({ username, password }));
                message.success('Registration successful!');
                navigate('/dashboard');
            }
        }
        // } else {
        //     //message.error('Please fill all details.');
        // }
    };

    return (
        <div className="registration-container">
            <h2>Registration here</h2>
            <Form layout="vertical" form={form}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        { required: true, message: 'Please enter your username!' },
                        { pattern: /^[A-Za-z]+$/, message: 'Username must contain only characters!' }
                    ]}
                    
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faUser} className="fa" />}
                    />
                </Form.Item>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        { required: true, message: 'Please enter your first name!' },
                        { pattern: /^[A-Za-z]+$/, message: 'First name must contain only characters!' }
                    ]}
                    
                >
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faUser} className="fa" />}
                    />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        { required: true, message: 'Please enter your first name!' },
                        { pattern: /^[A-Za-z]+$/, message: 'Last name must contain only characters!' }
                    ]}
                >
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faUser} className="fa" />}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                >
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faEnvelope} className="fa" />}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please enter your password!' },
                        { min: 8, message: 'Password must be at least 8 characters!' },
                        { pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/, message: 'Password must contain at least one uppercase letter, one special character, and one digit.' }
                    ]}
                >
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faLock} className="fa" />}
                    />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        () => ({
                            validator(_, value) {
                                if (!value || password === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The passwords do not match!');
                            },
                        }),
                    ]}
                >
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        addonBefore={<FontAwesomeIcon icon={faLock} className="fa" />}
                    />
                </Form.Item>
                <Form.Item className='btn'>
                    <Button type="primary" onClick={handleSignUp}>Sign Up</Button>
                </Form.Item>
            </Form>
            <p>
                Already registered? <Link to="/">Login here</Link>.
            </p>
        </div>
    );
};

export default Registration;

