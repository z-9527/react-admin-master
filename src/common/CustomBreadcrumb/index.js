import React from 'react'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom'

const CustomBreadcrumb = (props)=>(
  <Breadcrumb style={{marginBottom:16}}>
    <Breadcrumb.Item><Link to='/home'>首页</Link></Breadcrumb.Item>
    <Breadcrumb.Item>{props.first}</Breadcrumb.Item>
    <Breadcrumb.Item>{props.last}</Breadcrumb.Item>
  </Breadcrumb>
)
export default CustomBreadcrumb