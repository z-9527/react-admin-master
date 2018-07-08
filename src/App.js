import React, {Component} from 'react';
import {Layout} from 'antd'
import SiderNav from './common/SiderNav'
import ContentMain from './common/ContentMain'
import HeaderBar from './common/HeaderBar'
import './App.css'
import './assets/font/iconfont.css'

const {Sider, Header, Content, Footer} = Layout

class App extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    // 设置Sider的minHeight可以是左右自适应对齐
    return (
      <div id='page'>
        <Layout>
          <Sider collapsible
                 trigger={null}
                 collapsed={this.state.collapsed}
                 style={{minHeight: '100vh',overflowY:'auto'}}>
            <SiderNav/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', padding: '0 16px'}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
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
