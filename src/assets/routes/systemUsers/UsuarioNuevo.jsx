import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import Usuarios  from '../systemUsers/Usuarios';
import '../../css/usuarioNuevo.css';

const { Option } = Select;


class UsuarioNuevo extends Component {

    render() {
        return(
          <Form layout = "vertical" hideRequiredMark>
{/* Primera Parte */}
            <Row gutter = { 16 }>
              {/* Name */}
              <Col span = { 12 }>
                <Form.Item
                    name = 'firstName'
                    label = 'Nombre'
                    rules = {[
                      { 
                        required: true, message: 'Ingrese su Nombre!' 
                      }
                    ]}
                >
                  <Input placeholder = 'Ingrese su Nombre' />
                </Form.Item>
              </Col>
                {/* Last Name */}
                <Col span = { 12 }>
                  <Form.Item
                  name = 'lastName'
                  label = 'Apellido'
                  rules = {[
                    { 
                      required: true, message: 'Ingrese su Apellido!' 
                    }
                  ]}
                >
                  <Input placeholder = 'Ingrese su Apellido' />
                </Form.Item>
              </Col>
            </Row>
{/* Segunda Parte */}
            <Row gutter = { 16 }>
            {/* Mail */}
            <Col span = { 12 }>
                <Form.Item
                    name = 'email'
                    label = 'Correo'
                    rules = {[
                      { 
                        required: true, message: 'Ingrese su Correo!' 
                      }
                    ]}
                >
                  <Input placeholder = 'Ingrese su Correo' type = 'email'/>
                </Form.Item>
              </Col>
              {/* Password */}
              <Col span = { 12 }>
                <Form.Item
                    name = 'password'
                    label = 'Contraseña'
                    rules = {[
                      { 
                        required: true, message: 'Ingrese su Contraseña!'
                      }
                    ]}
                >
                  <Input placeholder = 'Ingrese su Contraseña' type = 'password' />
                </Form.Item>
              </Col>
            </Row>
{/* Tercera Parte */}            
            <Row gutter = { 16 }>
              {/* Rol */}
              <Col span = { 12 }>
                <Form.Item
                  name = 'role'
                  label = 'Rol'
                  rules = {[
                    { 
                      required: true, message: 'Selecciones su Rol' 
                    }
                  ]}
                >
                  <Select placeholder = "Seleccione Su Rol!">
                    <Option value = "jack">Operador</Option>
                    <Option value = "tom">Administrador</Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* State */}
              <Col span = { 12 }>
                <Form.Item
                  name = 'state'
                  label = 'Estado'
                  rules = {[
                    { 
                      required: true, message: 'Selecciones su Estado' 
                    }
                  ]}
                >
                  <Select placeholder = "Seleccione Su Estado!">
                    <Option value = "jack">Activo</Option>
                    <Option value = "tom">Inactivo</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/*Botones*/}
            <Row gutter = { 16 }>
              <Col span = { 12 }>
              <Form.Item>
                  <Button type = 'primary' htmlType = 'submit' className = 'Cancelar'>
                    <Link to = '/usuarios'>
                      CANCELAR
                    </Link>
                  </Button>
                </Form.Item>
                </Col>
                < Col span = { 12 }>
                <Form.Item>
                  <Button type = 'primary' htmlType = 'submit' className = 'Guardar'>GUARDAR</Button>
                </Form.Item>
                <Switch>
                  <Route exact path = '/usuarios' component = { Usuarios } />
                </Switch>
              </Col>
            </Row>
          </Form>
        );
    }
}

export default UsuarioNuevo;
