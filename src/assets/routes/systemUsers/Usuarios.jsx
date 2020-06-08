import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Table } from 'antd';
import UsuarioNuevo from '../systemUsers/UsuarioNuevo';
import '../../css/usuarios.css';

const  data = [
  {
    key: '1',
    firstName: 'Jhon',
    lastName: 'William',
    userName: '123William', 
    email: 'Jhon@gmail.com',
    password: 'Jhon123',
    role: 'Operador',
    state: 'Activo',
  },

  {
    key: '2',
    firstName: 'Alis',
    lastName: 'Malcova',
    userName: '123Malcova',
    email: 'Alis@gmail.com',
    password: 'Alis123',
    role: 'Operador',
    state: 'Inactivo',
  },

  {
    key: '3',
    firstName: 'Mac',
    lastName: 'Store',
    userName: '123Store',
    email: 'Mac@gmail.com',
    password: 'Mac123',
    role: 'Administrador',
    state: 'Activo',
  },
];

const columns = [
{
  title: 'NOMBRE',
  dataIndex: 'firstName',
  defaultSortOrder: 'descend',
},
{
  title: 'APELLIDO',
  dataIndex: 'lastName',
  defaultSortOrder: 'descend',
},
{
  title: 'USUARIO',
  dataIndex: 'userName',
  defaultSortOrder: 'descend',
},
{
  title: 'CORREO',
  dataIndex: 'email',
  defaultSortOrder: 'descend',
},
{
  title: 'CONTRASEÑA',
  dataIndex: 'password',
  defaultSortOrder: 'descend',
},
{
  title: 'ROL',
  dataIndex: 'role',
  defaultSortOrder: 'descend',
},
{
  title: 'ESTADO',
  dataIndex: 'state',
  filters: [
    {
      text: 'Activo',
      value: 'Activo',
    },
    {
      text: 'Inactivo',
      value: 'Inactivo',
    },
  ],
  filterMultiple: false,
  onFilter: (value, record) => record.state.indexOf(value) === 0,
  sorter: (a, b) => a.state.length - b.state.length,
  sortDirections: ['descend', 'ascend'],
},
];

function onChange(pagination, filters, sorter, extra) {
console.log('params', pagination, filters, sorter, extra);
}

class Variables extends Component {

    render() {
      
        return(
          <div>
            <div>
              <Button type = 'primary' className = 'Button'>
                <Link to  = '/usuarios/agregar'>
                  Agregar Usuario
                </Link>
              </Button>
              <Switch>
                <Route exact path = '/usuarios/agregar' component = { UsuarioNuevo } />
              </Switch>
            </div>
            <br/>
            <br/>
            <div>
            <Table className = 'Table'
                columns = { columns } 
                dataSource = { data } 
                onChange = { onChange } 
            />
          </div>
          </div>
        );
    }
}

export default Variables;
