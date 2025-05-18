import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/auth";
import AdminRegistrationImage from "../../images/userRegistration.jpg";

const AdminLogin = () => {
  const { setLoggedIn, setAdminLoggedIn, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8081/adminlogin",
        { email, password }, // ✅ Ensure correct data format
        { withCredentials: true } // ✅ Enable credentials mode
      );

      if (res && res.data.success) {
        alert(res.data.message);
        setLoggedIn(false);
        setAdminLoggedIn(true);
        setUser({ email });

        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("adminLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify({ email }));

        navigate("/adminDashboard");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(
        "❌ Login Error:",
        error.response?.data?.message || error.message
      );
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <img
            src={AdminRegistrationImage}
            alt="Admin Login"
            style={{ width: "100%" }}
          />
        </Col>
        <Col>
          <Form onSubmit={PostData}>
            <h2 className="text-center">Admin Login</h2>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="form-control"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="form-control"
                required
              />
            </Form.Group>
            <Button type="submit">LOGIN</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
