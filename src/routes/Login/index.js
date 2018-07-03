import React from 'react'
import './style.css'
import {withRouter} from 'react-router-dom'

@withRouter
class Login extends React.Component{
  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    console.log(from)
    return (
      <div className='login-page'>
        <h2>fdas</h2>
      </div>
    )
  }
}

export default Login