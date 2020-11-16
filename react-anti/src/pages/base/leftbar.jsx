import React,{ Component } from 'react';
// import { BrowserRouter as Router,Link,Route ,Redirect/* , Link  */ } from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
import { Menu, Button} from 'antd';
import {
    // AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    // PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class LeftBar extends Component{
  constructor(props){
    super(props)
    console.log(' constructor',this.props)
 
  }
  componentDidMount() {
    console.log('1567',this.props);
}
 
    state = {
        collapsed: false,

      };
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      // componentWillReceiveProps(props) {
      //   console.log(thisprops)
      // }

      _handleClick = (e) => {
        console.log('2222',e)
        console.log('1111',this.props)
 
      }

    render(){

        return(
            <div style={{ width: 256,miniHeight:'100%'}}>
            <Button type="primary"  onClick={this.toggleCollapsed} style={{ width:(this.state.collapsed ? 80 : 256) ,backgroundColor:'black' }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
              onClick={this._handleClick}
              // openKeys={openKeys}
              // onOpenChange={this.onOpenChange}
              // selectedKeys={this.leftMenuHighLight()}
              defaultSelectedKeys={['/']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}

            >
              <SubMenu key="/" icon={<MailOutlined />} title="HOME">
                <Menu.Item key="Device information">Device information</Menu.Item>
                <Menu.Item key="Serial-port config">Serial-port config</Menu.Item>
                <Menu.Item key="eth config">eth config</Menu.Item>
              </SubMenu>

              <Menu.Item key="log" icon={<DesktopOutlined />}>
                Log
              </Menu.Item>

              <SubMenu key="sub2" icon={<MailOutlined />} title="ModbusRTU">
                <Menu.Item key="ModbusRTU-Master">ModbusRTU-Master</Menu.Item>
              </SubMenu>

              <SubMenu key="sub3" icon={<MailOutlined />} title="ModbusTCP">
                <Menu.Item key="ModbusTCP-Master">ModbusTCP-Master</Menu.Item>
              </SubMenu>
       
              <Menu.Item key="termial server" icon={<ContainerOutlined />}>
                Terminal Server 
              </Menu.Item>
              <Menu.Item key="mqtt" icon={<ContainerOutlined />}>
                MQTT
              </Menu.Item>
              <Menu.Item key="zigbee" icon={<ContainerOutlined />}>
                 Zigbee
              </Menu.Item>
              <Menu.Item key="devive realtime" icon={<ContainerOutlined />}>
                 Device Realtime Status 
              </Menu.Item>

              <SubMenu key="sub4" icon={<MailOutlined />} title="Firmware upgrade">
                <Menu.Item key="rts">RTS</Menu.Item>
                <Menu.Item key="ios">IOS</Menu.Item>
              </SubMenu>
   
              <Menu.Item key="13" icon={<ContainerOutlined />}>
                Hardware config
              </Menu.Item>
            </Menu>
          </div>
        );
    }
}


