import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Table, Button } from 'antd';
import TiendaNueva from '../pointsOfSale/TiendaNueva';
import '../../css/tienda.css';


const  data = [
  {
    key: '1',
    name: 'jugueteria Pequeñines',
    price: 'General',
    state: 'Activo',
  },
  {
    key: '2',
    name: 'Jugueteria la feria ',
    price: 'Especial',
    state: 'Inactivo',
  },
  {
    key: '3',
    name: 'Almacen Continental',
    price: 'General',
    state: 'Activo',
  },
  {
    key: '4',
    name: 'Jugueton S.A.',
    price: 'Especial',
    state: 'Inactivo',
  },
  {
    key: '5',
    name: 'Kids Box',
    price: 'General',
    state: 'Activo',
  },
  {
    key: '6',
    name: 'Tienda Chirivita',
    price: 'Especial',
    state: 'Inactivo',
  }
];


const columns = [
  {
    title: 'NOMBRE',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
  },
  {
    title: 'PRECIO',
    dataIndex: 'price',
    defaultSortOrder: 'desced',
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

class Tiendas  extends Component {  

  render () {

    return (
      <div>
        <div>
          <Button type = 'primary' className = 'Button'>
            <Link to = '/tiendas/agregar'>
              Agregar Tienda 
            </Link>
          </Button>
          <Switch>
            <Route exact path = '/tiendas/agregar' component = { TiendaNueva } />
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
 
export default Tiendas;


// <div style = {{ marginTop: 16 }}>
//           <Button type = 'primary' onClick = {this.showDrawer} className = 'Button'>
//             Agregar Punto de Venta 
//           </Button>
//         </div>
//         <Drawer
//           title = "Create a new account"
//           width = {550}
//           onClose = {this.onClose}
//           visible = {this.state.visible}
//           bodyStyle = {{ paddingBottom: 80 }}
//           footer = {
//             <div
//               style = {{
//                 textAlign: 'right',
//               }}
//             >
//               <Button onClick = {openNotification} style = {{ marginRight: 8 }}>
//                 Cancelar
//               </Button>
//               <Button onClick = {this.onClose} type = "primary">
//                 Guardar
//               </Button>
//             </div>
//           }
//         >
//           <Form layout = "vertical" hideRequiredMark>
// {/* Primera Parte */}
//             <Row gutter = { 16 }>
//               {/* Name */}
//               <Col span = { 12 }>
//                 <Form.Item
//                     name = 'name'
//                     label = 'Nombre'
//                     rules = {[
//                       { 
//                         required: true, message: 'Ingrese el Nombre del Punto de Ventas!' 
//                       }
//                     ]}
//                 >
//                   <Input placeholder = 'Ingrese el Nombre del Punto de Ventas!' />
//                 </Form.Item>
//               </Col>
//               </Row>
// {/* Segunda Parte */}
//             <Row gutter = { 16 }>
//                 <Col span = { 12 }>
//                     <Form.Item
//                       name = 'price'
//                       label = 'Tipo de Precio'
//                       rules = {[
//                           { 
//                               required: true, message: 'Seleccione el tipo de Precio' 
//                           }
//                         ]}
//                     >
//                         <Select placeholder = 'Selecciones el tipo de Precio!'>
//                             <Option value = "private">General</Option>
//                             <Option value = "public">Especial</Option>
//                         </Select>
//                     </Form.Item>
//                 </Col>
//             </Row>
// {/* Tercera Parte */}
//             <Row gutter = { 16 }>
//                 <Col span = { 12 }>
//                     <Form.Item
//                       name = 'state'
//                       label = 'Estado'
//                       rules = {[
//                           { 
//                               required: true, message: 'Seleccione el estado de la Tienda' 
//                           }
//                         ]}
//                     >
//                         <Select placeholder = 'Selecciones el estado de la Tienda!'>
//                             <Option value = "private">Activo</Option>
//                             <Option value = "public">Inactivo</Option>
//                         </Select>
//                     </Form.Item>
//                 </Col>
//             </Row>
//           </Form>
//         </Drawer>

//           <br/>
//           <br/>

          // <div>
          //   <Table className = 'Table'
          //       columns = { columns } 
          //       dataSource = { data } 
          //       onChange = { onChange } 
          //   />
//           </div>