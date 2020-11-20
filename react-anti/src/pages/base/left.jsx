import React,{ Component }  from 'react';

import {  Menu } from 'antd';
import {createBrowserHistory} from "history";



import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,

  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

let history = createBrowserHistory()
const { SubMenu } = Menu;


class Left extends React.Component {
  constructor(props){
        super(props)
        console.log(' constructor',this.props)
        console.log('historyhistoryhistory',history)
        this.state = {
            // current: pathname,
            // openKeys: [],
            menuStyle: false,
            rootSubmenuKeys: [],
            // menu: JSON.parse(sessionStorage.getItem('leftNav')) || [],
          }

        
     
      }
// componentDidMount() {
//         this.init()
//       }
    
 componentDidMount() {
        console.log('1567',this.props);
    }




  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  _handleClick = (e) => {
    // console.log('2222',e)
    // console.log('aaaaaaaaaaaaa',history)
    // console.log('1111',this.props)
    // history.push(`/${e.key}`);
    // history.go();
    if(e.key === '/'){
        history.push(`/`);
        history.go();
    }else{
        history.push(`/${e.key}`);
        history.go();

    }
  }
  leftMenuHighLight = () => {
    const { pathname } = history.location
     console.log('pathnamepathnamepathnamepathname',pathname)
    let selectedKeys = [pathname.replace('/', '')]
    console.log('selectedKeysselectedKeysselectedKeys',selectedKeys)
    if (pathname === '/' ) {
      selectedKeys = ['/']
    }
    return selectedKeys
  }

  render() {
    return (

  
        <Menu
            onClick={this._handleClick}
            // openKeys={openKeys}
            // onOpenChange={this.onOpenChange}
            selectedKeys={this.leftMenuHighLight()}
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['sub4']}
            mode="inline"
            theme="dark"
        >
  
        <Menu.Item key="/" icon={<UserOutlined />} >HOME</Menu.Item>
            <Menu.Item key="log" icon={<DesktopOutlined />}>
                Log
            </Menu.Item>
            <Menu.Item key="ModbusRTU-Master" icon={<VideoCameraOutlined />} >
                ModbusRTU-Master
            </Menu.Item>
            <Menu.Item key="ModbusTCP-Master" icon={<MailOutlined />}>
                ModbusTCP-Master
            </Menu.Item>
            <Menu.Item key="termialserver" icon={<ContainerOutlined />}>
                Terminal Server 
            </Menu.Item>
            <Menu.Item key="mqtt" icon={<UploadOutlined />}>
                 MQTT
            </Menu.Item>
            <Menu.Item key="zigbee" icon={<ContainerOutlined />}>
                 Zigbee
            </Menu.Item>
            <Menu.Item key="devicerealtime" icon={<ContainerOutlined />}>
                 Device Realtime Status 
            </Menu.Item>

 
            <Menu.Item key="firmware" icon={<MailOutlined />}>Firmware upgrade</Menu.Item>
   
    
  

            <Menu.Item key="hardwareconfig" icon={<ContainerOutlined />}>
            Hardware config
            </Menu.Item>
        </Menu>

    );
  }
}

export default Left;


