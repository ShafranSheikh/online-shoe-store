import React from "react";
import "../styles/login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from '@mui/icons-material/Lock';
import MailLockIcon from '@mui/icons-material/MailLock';
import { Button, Checkbox, Form, Input, Flex } from "antd";
import githubIcon from '../assets/images/github.png';
import googleIcon from '../assets/images/google.png';
import { Link } from 'react-router-dom'
function Login() {
    function onFinish(values){
        console.log('Received values of form: ', values);
    };
    return (
    <div className="loginform-container">
        <h1>Login</h1>
        <div className="input-container">
        <Form
            name="login"
            initialValues={{
            remember: true,
            }}
            style={{
            maxWidth: 360,
            }}
            onFinish={onFinish}
        >
            <Form.Item
            name="email"
            rules={[
                {
                required: true,
                message: "Please input your email!",
                },
            ]}
            >
            <Input  placeholder="email" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[
                {
                required: true,
                message: "Please input your Password!",
                },
            ]}
            >
            <Input
                type="password"
                placeholder="Password"
            />
            </Form.Item>
            <Form.Item>
            <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked"  noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password?</a>
            </Flex>
            </Form.Item>
            <Form.Item>
            <Button block type="primary" htmlType="submit">
                Log in
            </Button>
            or <Link to= '/Signuppage'>Register now! </Link>
            </Form.Item>
        </Form>
        <p>or sign in with</p>
        <div className="social-login">
            <button><img src={googleIcon} alt="" /></button>
            <button><img src={githubIcon} alt="" /></button>
        </div>
        </div>
    </div>
    );
}
export default Login;
