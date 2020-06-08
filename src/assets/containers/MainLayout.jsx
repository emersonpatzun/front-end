import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/MainLayout.css';
import { Layout, Menu, Breadcrumb, Avatar, notification } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    ShopOutlined,
    ShoppingOutlined,
    FileSearchOutlined,
    DesktopOutlined,
    // QuestionCircleOutlined
} from '@ant-design/icons';
import Productos from '../routes/productsAndPrices/Productos';
import Tiendas from '../routes/pointsOfSale/Tiendas';
import Usuarios from '../routes/systemUsers/Usuarios';
import Reportes from '../routes/reportsAndInventories/Reportes';
import Variables from '../routes/systemVariables/Variables';
import UsuarioNuevo from '../routes/systemUsers/UsuarioNuevo';
import TiendaNueva from '../routes/pointsOfSale/TiendaNueva';

const { Header, Content, Footer, Sider } = Layout;
// const {SubMenu} = Menu;

const openNotification  = () => {
    notification.open ({
        message: 'Hay cambios sin guarda',
        description: '¿Está seguro de querer abandonar esta página?',
        onClick: () => {
            console.log('Notification Clicked!');
        }
    })
}


class MainLayout extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {

        if( !this.props.logged_user ) {
            return <Redirect to ='/login' />
        }
        return (
            <Layout style = {{minHeight: '100vh'}}>
                <Sider id='Sider' collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className ='logoo'>
                        <div>
                        <Avatar shape="square" icon={<UserOutlined />} className = 'icon' />
                        </div>
                    </div>
                    <Menu id ="Menu" theme = 'dark' defaultSelectedKeys = {['1']} mode = 'inline'>
                        {this.props.logged_user}
                        <Menu.Item key = '1' icon = {<HomeOutlined />}>
                            <Link to = '/'>
                            Inicio
                            </Link>
                        </Menu.Item>
                        <Menu.Item key = '2' icon = {<UserOutlined />}>
                            <Link to = '/usuarios'>
                            Usuarios del Sistema
                            </Link>
                        </Menu.Item>
                        <Menu.Item key = '3' icon = {<ShopOutlined />}>
                            <Link to = '/tiendas'>
                            Puntos de Venta
                            </Link>
                        </Menu.Item>
                        <Menu.Item key = '4' icon = {<ShoppingOutlined />}>
                            <Link to = '/productsAndPrices'>
                                Productos y Precios 
                            </Link>
                        </Menu.Item> 
                        <Menu.Item key = '5' icon = {<FileSearchOutlined />}>
                            <Link to = '/reportsAndInventories'>
                                Reportes e Inventarios
                            </Link>
                        </Menu.Item>
                        <Menu.Item key = '6' icon = {<DesktopOutlined />}>
                            <Link to = '/variables'>
                            Variables del Sistema
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className = 'site-layout'>
                <Header className = 'site-layout-background' style = {{padding: 0}}>
                    <div>
                        <h1 className = "logo" >
                               <a href = '/' >
                                   <span type = 'primary' onClick = {openNotification}>Inventario Vivo</span>
                                </a>
                        </h1>
                    </div>    
                </Header>
                <Content style = {{ margin: '0 16px' }}>
                    <Breadcrumb style = {{ margin: '16px 0' }}>
                        <Breadcrumb.Item>number1</Breadcrumb.Item>
                        <Breadcrumb.Item>number2</Breadcrumb.Item>
                      </Breadcrumb>
                    <div className = 'site-layout-background' style = {{padding: 24, minHeight: 633}}>
                        <Switch>
                            <Route exact path = '/usuarios' component = { Usuarios } />
                            <Route exact path = '/usuarios/agregar' component = { UsuarioNuevo } />
                            <Route exact path = '/tiendas' component = { Tiendas } />
                            <Route exact path = '/tiendas/agregar' component = { TiendaNueva} />
                            <Route exact path = '/prductos-precios' component = { Productos } />
                            <Route exact path = '/reportes-inventarios' component = { Reportes } />
                            <Route exact path = '/variables' component = { Variables } />
                         </Switch>
                    </div>
                </Content>
                <Footer style = {{ textAlign: 'center'}}>This is Web Inventario Vivo</Footer>
            </Layout>
        </Layout>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { logged_user } = auth;
    return { logged_user};
}

export default connect ( mapStateToProps, null )(MainLayout);
