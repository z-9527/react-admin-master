import React from 'react'
import BGParticle from '../../utils/BGParticle'
import {Form,Input,Row,Col} from 'antd'
import './style.css'
import {randomNum} from '../../utils/utils'

@Form.create()
class LoginForm extends React.Component{
  state = {
    focusItem:-1,   //保存当前聚焦的input
    code:''         //验证码
  }
  componentDidMount(){
    this.createCode()
  }

  /**
   * 生成验证码
   */
  createCode = ()=>{
    const ctx = this.canvas.getContext('2d')
    const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let code = ''
    ctx.clearRect(0, 0, 80, 39);
    for(let i=0;i<4;i++){
      const char = chars[randomNum(0,57)]
      code += char
      ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
      ctx.fillStyle = '#D3D7F7';
      ctx.textBaseline = 'middle';
      ctx.shadowOffsetX = randomNum(-3, 3);
      ctx.shadowOffsetY = randomNum(-3, 3);
      ctx.shadowBlur = randomNum(-3, 3);
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      let x = 80 / 5 * (i + 1);
      let y = 39 / 2;
      let deg = randomNum(-25, 25);
      /**设置旋转角度和坐标原点**/
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(char, 0, 0);
      /**恢复旋转角度和坐标原点**/
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    }
    this.setState({
      code
    })
  }
  loginSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
  }
  render(){
    const {getFieldDecorator,getFieldError} = this.props.form
    const {focusItem} = this.state
    console.log(getFieldError('username'))
    return (
      <div className={this.props.className}>
        <h3 className='title'>管理员登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item help={getFieldError('username') && <div>fdsafafdasdfsaf</div>}>
            {getFieldDecorator('username',{
              rules: [{required: true, message: '请输入用户名'}]
            })(
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
            {getFieldDecorator('verification')(
              <Row>
                <Col span={15}>
                  <Input
                    onFocus={() => this.setState({focusItem: 2})}
                    onBlur={() => this.setState({focusItem: -1})}
                    type='password'
                    maxLength={16}
                    placeholder='验证码'
                    addonBefore={<span className='iconfont icon-securityCode-b' style={focusItem === 2 ? styles.focus : {}}/>}/>
                </Col>
                <Col span={9}>
                  <canvas onClick={this.createCode} width="80" height='39' ref={el=>this.canvas=el}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div>
            <input className='loginBtn' type="submit" value='登录'/>
          </div>
        </Form>
        <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div>
        {/*<button onClick={()=>this.props.switchShowBox('register')}>click</button>*/}
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
    width:'20px',
    opacity:1
  }
}

export default Login