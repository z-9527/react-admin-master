import React, {Component} from 'react';
import {Layout, Icon} from 'antd'
import SiderNav from './common/SiderNav'
import ContentMain from './common/ContentMain'
import './App.css'

const {Sider, Header, Content, Footer} = Layout

class App extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    // 设置Sider的minHeight可以是左右自适应对齐
    return (
      <div>
        <Layout>
          <Sider collapsible
                 trigger={null}
                 collapsed={this.state.collapsed}
                 style={{minHeight: '100vh',overflowY:'auto'}}>
            <SiderNav/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: '0 16px'}}>
              <Icon
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                className='triggle'
                onClick={this.toggle}/>
            </Header>
            <Content style={{margin: '16px'}}>
              <ContentMain/>
            </Content>
            <Footer style={{textAlign: 'center'}}>React-Admin ©2018 Created by 137596665@qq.com</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
