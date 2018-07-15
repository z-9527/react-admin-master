import React from 'react'
import {Form, Input, Button, Col, Row, message,Icon} from 'antd'
import {withRouter} from 'react-router-dom'
import GVerify from '../../utils/gVerify'
import './style.css'
import {inject, observer} from "mobx-react/index";

@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component{
  state = {
    focusItem: -1,
  }
  componentDidMount() {
    this.verifyCode = new GVerify('v_container');
  }
  componentWillUnmount() {
    this.verifyCode = null
  }
  loginSubmit = (e) => {
    e.preventDefault();
    console.log(1)
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.username)
        if (!result) {
          this.props.form.setFields({
            username: {
              value: values.username,
              errors: [new Error('用户名不存在')]
            }
          })
          return
        } else {
          //检测密码是否错误
          if (result.password !== values.password){
            this.props.form.setFields({
              password: {
                value: values.password,
                errors: [new Error('密码错误')]
              }
            })
            return
          }
        }

        this.props.appStore.toggleLogin(true,{username:values.username})

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
      }
    });
  }
  register = ()=>{
  }
  render(){
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <div className='owl'>
          <div className='hand-left hand' style={focusItem === 1 ? styles.focusHandLeft : {}}/>
          <div className='hand-right hand' style={focusItem === 1 ? styles.focusHandRight : {}}/>
          <div className='arms-box'>
            <div className='arms arms-left' style={focusItem === 1 ? styles.focusArmsLeft : {}}/>
            <div className='arms arms-right' style={focusItem === 1 ? styles.focusArmsRight : {}}/>
          </div>
        </div>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                addonBefore={<span className='iconfont icon-User'
                                   style={focusItem === 0 ? styles.focus : {}}/>}
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem:-1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input addonBefore={<span className='iconfont icon-suo1'
                                        style={focusItem === 1 ? styles.focus : {}}/>}
                     type='password'
                     onFocus={() => this.setState({focusItem: 1})}
                     onBlur={() => this.setState({focusItem:-1})}
                     size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('verification', {
              validateFirst: true,
              rules: [
                {required: true, message: '请输入验证码'},
                {
                  validator: (rule, value, callback) => {
                    if (value.length >= 4 && !this.verifyCode.validate(value)) {
                      callback('验证码错误')
                    }
                    callback()
                  }
                }
              ]
            })(
              <Row gutter={8}>
                <Col span={16}>
                  <Input addonBefore={<span className='iconfont icon-securityCode-b'
                                            style={focusItem === 2 ? styles.focus : {}}/>}
                         onFocus={() => this.setState({focusItem: 2})}
                         onBlur={() => this.setState({focusItem:-1})}
                         size='large'/>
                </Col>
                <Col span={8}>
                  <div id='v_container' style={{height: 40}}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div className='bottom'>
            <span className='registerBtn' onClick={()=>this.props.setShowBox('register')}>注册</span>&emsp;
            <Button type='primary' htmlType="submit">登录</Button>
          </div>
        </Form>
      </div>
    )
  }
}

@inject('appStore') @observer @Form.create()
class RegisterForm extends React.Component{
  state = {
    focusItem:-1
  }
  registerSubmit = ()=>{

  }
  render(){
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <div className='owl'>
          <div className='hand-left hand' style={(focusItem === 1|| focusItem === 2 )? styles.focusHandLeft : {}}/>
          <div className='hand-right hand' style={(focusItem === 1|| focusItem === 2 ) ? styles.focusHandRight : {}}/>
          <div className='arms-box'>
            <div className='arms arms-left' style={(focusItem === 1|| focusItem === 2 ) ? styles.focusArmsLeft : {}}/>
            <div className='arms arms-right' style={(focusItem === 1|| focusItem === 2 ) ? styles.focusArmsRight : {}}/>
          </div>
        </div>
        <Form onSubmit={this.registerSubmit}>
          <Form.Item>
            {getFieldDecorator('registerUsername', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                addonBefore={<span className='iconfont icon-User'
                                   style={focusItem === 0 ? styles.focus : {}}/>}
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem:-1})}
                size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('registerPassword', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input addonBefore={<span className='iconfont icon-suo1'
                                        style={focusItem === 1 ? styles.focus : {}}/>}
                     type='password'
                     onFocus={() => this.setState({focusItem: 1})}
                     onBlur={() => this.setState({focusItem:-1})}
                     size='large'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('confirmPassword', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input addonBefore={<span className='iconfont icon-suo1'
                                        style={focusItem === 2 ? styles.focus : {}}/>}
                     type='password'
                     onFocus={() => this.setState({focusItem: 2})}
                     onBlur={() => this.setState({focusItem:-1})}
                     size='large'/>
            )}
          </Form.Item>
          <div className='bottom'>
            <span className='gobackBtn' onClick={()=>this.props.setShowBox('login')}>返回登录</span>&emsp;
            <Button type='primary' htmlType="submit">注册</Button>
          </div>
        </Form>
      </div>
    )
  }
}

@withRouter @inject('appStore') @observer
class Login extends React.Component {
  state = {
    showBox:'login'
  }
  componentDidMount(){
    this.props.appStore.initUsers()
  }
  toggleShowBox = (box)=>{
    this.setState({
      showBox:box
    })
  }
  render() {
    const {showBox} = this.state
    return (
      <div className='login-page' id='login-page'>
        <div className='container'>
          <LoginForm className={showBox==='login'?'login-box-active login-box':'login-box-leave login-box'} setShowBox={this.toggleShowBox}/>
          <RegisterForm className={showBox==='register'?'login-box-active login-box':'login-box-leave login-box'} setShowBox={this.toggleShowBox}/>
        </div>
      </div>
    )
  }
}

const styles = {
  focus: {
    transform: 'scale(0.6)',
    width: 40
  },
  focusHandLeft: {
    transform: 'translateX(-42px) translateY(-15px) scale(0.7)',
  },
  focusHandRight: {
    transform: 'translateX(42px) translateY(-15px) scale(0.7)',
  },
  focusArmsLeft: {
    transform: 'translateY(-40px) translateX(-40px) scaleX(-1)'
  },
  focusArmsRight: {
    transform: 'translateY(-40px) translateX(40px)'
  }
}

export default Login