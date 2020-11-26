import React  from 'react';

import { Layout } from 'antd';
import View from '../view'
import Left from './left'


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,

} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  constructor(props){
        super(props)

      }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout style={{height:'94vh'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Left />
 
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" 
                  style={{ padding: 0 ,
                    backgroundColor:'white',
                    position: 'fixed',
                    width:'100%',
                    zIndex:5
                   }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '70px 50px',
              padding: 5,
              minHeight: 280,
            }}
          >
            <View />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;