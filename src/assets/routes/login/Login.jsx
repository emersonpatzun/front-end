import React, { Component } from "react";
import { Form, Input, Button, Card, Layout } from "antd";
import { connect } from "react-redux";
import { loginUser } from "../../../Store/actions/auth.actions";
import "../login/login_form.css";

const { Header, Content } = Layout;

class Login extends Component {
  onFinishLogin = (values) => {
    const { user, password } = values;
    console.log(user, password);
    const data = JSON.stringify({ email: user, password })
    console.log(data);
    fetch
      ("http://localhost:8080/login", {
        body: data,
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
          }
      })

      .then((res) => res.JSON)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Layout>
        <Header
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
          className="Header"
        >
          <h1 id="logo">
            <a href="/login" title="Inicio">
              <span>InventarioVivo</span>
            </a>
          </h1>
        </Header>
        <Content style={{ padding: "0 100px" }}>
          <Card
            title="Ingreso al Sistema"
            style={{ width: 400 }}
            className="Cardd"
          >
            <Form
              name="login-form"
              className="login-form"
              onFinish={this.onFinishLogin}
            >
              <Form.Item
                name="user"
                label="Correo Electronico"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su correo electronico!",
                  },
                ]}
              >
                <Input placeholder="Correo electronico" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Contraseña"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su contraseña!",
                  },
                ]}
              >
                <Input type="password" placeholder="Constraseña" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  INGRESAR
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    );
  }
}
export default connect(null, { loginUser })(Login);
