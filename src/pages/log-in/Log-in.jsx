import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Input, Card, Button, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const LOG_IN_USER_URL = "http://localhost:3001/api/users/login";

const LogIn = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const logInUser = () => {
    console.log(email);
    console.log(password);

    axios
      .post(LOG_IN_USER_URL, { email: email, password: password })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
  };

  return (
    <div className="h-screen w-screen flex justify-center  bg-gray-50">
      <div className="flex flex-col w-64 xl:w-80 pt-20 xl:pt-40">
        <Card>
          <Title level={4}>Log in</Title>
          <Divider className="mt-4" />
          <Title level={5} className="mt-4">
            Email
          </Title>
          <Input placeholder="example@hotmail.com" onChange={handleEmail} />
          <Title level={5} className="mt-4">
            Password
          </Title>
          <Input.Password placeholder="password" onChange={handlePassword} />
          <Button
            className="mt-8"
            type="primary"
            onClick={() => {
              logInUser();
              navigate("/dashboard");
            }}
            block
          >
            Log in
          </Button>
          <Divider className="mt-4" />
          <Link to="/sign-up">
            <Button block>Sign up</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
