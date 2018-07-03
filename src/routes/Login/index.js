import React from 'react'
import {Form,Input,Button,Col,Row} from 'antd'
import {withRouter} from 'react-router-dom'
import GVerify from '../../utils/gVerify'
import './style.css'

@withRouter @Form.create()
class Login extends React.Component{
  componentDidMount(){
    this.verifyCode = new GVerify('v_container');
  }
  componentWillUnmount(){
    this.verifyCode = null
  }
  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    console.log(this.props.form)
    const {getFieldDecorator} = this.props.form
    return (
      <div className='login-page' id='login-page'>
        <div className='container'>
          <div className='login-box'>
            <div className='owl'>
              <div className='hand-left hand'></div>
              <div className='hand-right hand'></div>
            </div>
            <Form>
              <Form.Item>
                {getFieldDecorator('username',{})(
                  <Input addonBefore={<span className='iconfont icon-User'/>} size='large'/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password',{})(
                  <Input addonBefore={<span className='iconfont icon-suo1'/>} size='large'/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password',{})(
                  <Row gutter={8}>
                    <Col span={16}>
                      <Input addonBefore={<span className='iconfont icon-securityCode-b'/>} size='large'/>
                    </Col>
                    <Col span={8}>
                      <div id='v_container' style={{height:40}}/>
                    </Col>
                  </Row>
                )}
              </Form.Item>
            </Form>
            <div className='bottom'>
             <Button type='primary'>登录</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login