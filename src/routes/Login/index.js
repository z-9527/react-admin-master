import React from 'react'
import {Form, Input, Button, Col, Row} from 'antd'
import {withRouter} from 'react-router-dom'
import GVerify from '../../utils/gVerify'
import './style.css'

@withRouter @Form.create()
class Login extends React.Component {
  state = {
    focusItem: -1
  }

  componentDidMount() {
    this.verifyCode = new GVerify('v_container');
  }

  componentWillUnmount() {
    this.verifyCode = null
  }

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {getFieldDecorator} = this.props.form
    const {focusItem} = this.state
    return (
      <div className='login-page' id='login-page'>
        <div className='container'>
          <div className='login-box'>
            <div className='owl'>
              <div className='hand-left hand' style={focusItem === 1 ? styles.focusHandLeft : {}}/>
              <div className='hand-right hand' style={focusItem === 1 ? styles.focusHandRight : {}}/>
              <div className='arms-box'>
                <div className='arms arms-left' style={focusItem === 1 ? styles.focusArmsLeft : {}}/>
                <div className='arms arms-right' style={focusItem === 1 ? styles.focusArmsRight : {}}/>
              </div>
            </div>
            <Form>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{required: true, message: '请输入用户名'}]
                })(
                  <Input
                    addonBefore={<span className='iconfont icon-User'
                                       style={focusItem === 0 ? styles.focus : {}}/>}
                    onFocus={() => this.setState({focusItem: 0})}
                    onBlur={() => this.setState({focusItem})}
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
                         onBlur={() => this.setState({focusItem})}
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
                        if(value.length>=4&&!this.verifyCode.validate(value)){
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
                             onBlur={() => this.setState({focusItem})}
                             size='large'/>
                    </Col>
                    <Col span={8}>
                      <div id='v_container' style={{height: 40}}/>
                    </Col>
                  </Row>
                )}
              </Form.Item>
              <div className='bottom'>
                <span className='register'>注册</span>&emsp;
                <Button type='primary'>登录</Button>
              </div>
            </Form>
          </div>
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