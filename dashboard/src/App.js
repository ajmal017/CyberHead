import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Overview</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="stock" />
              <span>Strategies</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="dot-chart" />
              <span>Heat Vision</span>
            </Menu.Item>

            <Menu.Item key="4">
              <Icon type="experiment" />
              <span>Configuration</span>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;