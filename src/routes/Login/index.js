import React from 'react'
import BGParticle from '../../utils/BGParticle'
import {Form,Input} from 'antd'
import './style.css'

@Form.create()
class LoginForm extends React.Component{
  state = {
    focusItem:-1   //保存当前聚焦的input
  }
  render(){
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>管理员登录</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator('username')(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password')(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password2')(
              <Input
                onFocus={() => this.setState({focusItem: 2})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 2 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
        </Form>
        <button onClick={()=>this.props.switchShowBox('register')}>click</button>
      </div>
    )
  }
}

class RegisterForm extends React.Component{
  render(){
    return (
      <div className={this.props.className}>
        <h3 className='title'>注册页面</h3>
        <button onClick={()=>this.props.switchShowBox('login')}>click</button>
      </div>
    )
  }
}

class Login extends React.Component{
  state = {
    showBox:'login'   //展示当前表单
  }
  componentDidMount(){
    this.particle = new BGParticle('backgroundBox')
    this.particle.init()
  }
  componentWillUnmount(){
    this.particle.destory()
  }
  //切换showbox
  switchShowBox = (box) => {
    this.setState({
      showBox: box
    })
  }
  render(){
    const {showBox} = this.state
    console.log(showBox)
    return (
      <div id='login-page'>
        <div id='backgroundBox' style={styles.backgroundBox}/>
        <div className='container'>
          <LoginForm
            className={showBox==='login'?'box showBox':'box hiddenBox'}
            switchShowBox={this.switchShowBox}/>
          <RegisterForm
            className={showBox==='register'?'box showBox':'box hiddenBox'}
            switchShowBox={this.switchShowBox}/>
        </div>
      </div>
    )
  }
}

const styles = {
  backgroundBox:{
    position:'fixed',
    top:'0',
    left:'0',
    width:'100vw',
    height:'100vh',
    backgroundImage:`url(${require('./img/bg5.jpg')})`,
    backgroundSize:'100% 100%'
  },
  focus:{
    // transform: 'scale(0.7)',
    width:'20px'
  }
}

export default Login