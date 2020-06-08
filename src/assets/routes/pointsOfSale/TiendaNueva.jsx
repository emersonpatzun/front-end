import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Select } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import Tiendas from '../pointsOfSale/Tiendas';

const { Option } = Select;


class TiendaNueva extends Component {
    
    render() {
        return (
            <Form layout = "vertical" hideRequiredMark>
{/* Primera Parte */}
            <Row gutter = { 16 }>
              {/* Name */}
              <Col span = { 12 }>
                <Form.Item
                    name = 'name'
                    label = 'Nombre'
                    rules = {[
                      { 
                        required: true, message: 'Ingrese el Nombre del Punto de Ventas!' 
                      }
                    ]}
                >
                  <Input placeholder = 'Ingrese el Nombre del Punto de Ventas!' />
                </Form.Item>
              </Col>
              </Row>
{/* Segunda Parte */}
            <Row gutter = { 16 }>
                <Col span = { 12 }>
                    <Form.Item
                      name = 'price'
                      label = 'Tipo de Precio'
                      rules = {[
                          { 
                              required: true, message: 'Seleccione el tipo de Precio' 
                          }
                        ]}
                    >
                        <Select placeholder = 'Selecciones el tipo de Precio!'>
                            <Option value = "private">General</Option>
                            <Option value = "public">Especial</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
{/* Tercera Parte */}
            <Row gutter = { 16 }>
                <Col span = { 12 }>
                    <Form.Item
                      name = 'state'
                      label = 'Estado'
                      rules = {[
                          { 
                              required: true, message: 'Seleccione el estado de la Tienda' 
                          }
                        ]}
                    >
                        <Select placeholder = 'Selecciones el estado de la Tienda!'>
                            <Option value = "private">Activo</Option>
                            <Option value = "public">Inactivo</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter = { 16 }>
                <Col span = { 12 }>
                <Form.Item>
                    <Button type = 'primary' htmlType = 'submit' className = 'Cancelar'>
                        <Link to = '/tiendas'>
                            CANCELAR
                        </Link>
                    </Button>
                </Form.Item>
                </Col>
                <Col span = { 12 }>
                    <Form.Item>
                        <Button type = 'primary' htmlType ='submit' className = 'Guardar'>GUARDAR</Button>
                    </Form.Item>
                    <Switch>
                        <Route exact path = '/tiendas' component = { Tiendas } />
                    </Switch>
                </Col>
            </Row>
          </Form>
        );
    }
}

export default TiendaNueva;