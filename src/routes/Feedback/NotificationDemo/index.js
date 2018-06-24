import React from 'react'
import {Card,Col,Row,Button,Tooltip,notification,Select} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'

class NotificationDemo extends React.Component{
  state = {
    placement:''
  }
  openNotification(obj){
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      ...obj
    })
  }
  openNotificationType(type){
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
  customNotification(){
    const key = Date.now()
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      key,
      btn:<Button type="primary" onClick={() => notification.close(key)}>Confirm</Button>
    })
  }
  render(){
    const placement = this.state.placement
    return (
      <div>
        <CustomBreadcrumb arr={['反馈','通知提醒框']}/>
        <Card hoverable bordered={false} style={{marginBottom: 10,lineHeight:'2em'}} title='何时使用'>
          在系统四个角显示通知提醒信息。经常用于以下情况：
          <ul style={{listStyle: 'inside circle'}}>
            <li>较为复杂的通知内容</li>
            <li>带有交互的通知，给出用户下一步的行动点</li>
            <li>系统主动推送</li>
          </ul>
        </Card>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Tooltip title='最简单的用法，4.5 秒后自动关闭' placement='right'>
                <Button type='primary' onClick={this.openNotification}>基本用法</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Tooltip title='设置duration: 0来取消自动关闭' placement='right'>
                <Button type='primary' onClick={()=>this.openNotification({duration:0})}>取消自动关闭</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
             <Button type='primary' onClick={()=>this.openNotificationType('success')}>成功</Button>&emsp;
             <Button type='primary' onClick={()=>this.openNotificationType('info')}>提醒</Button>&emsp;
             <Button type='primary' onClick={()=>this.openNotificationType('warning')}>警告</Button>&emsp;
             <Button type='primary' onClick={()=>this.openNotificationType('error')}>错误</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Tooltip title='使用 style 和 className 来定义样式' placement='right'>
                <Button type='primary' onClick={()=>this.openNotification({style:{width: 600, marginLeft: 335 - 600,}})}>自定义样式</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Tooltip title='自定义关闭按钮的样式和文字' placement='right'>
                <Button type='primary' onClick={this.customNotification}>自定义按钮</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem}>
              <Select defaultValue='topRight' style={{width:160}} onChange={v=>this.setState({placement:v})}>
                <Select.Option value='topLeft'>topLeft</Select.Option>
                <Select.Option value='topRight'>topRight</Select.Option>
                <Select.Option value='bottomLeft'>topLeft</Select.Option>
                <Select.Option value='bottomRight'>bottomRight</Select.Option>
              </Select>&emsp;&emsp;
              <Button onClick={()=>this.openNotification({placement})}>打开消息通知</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const styles = {
  colItem: {
    borderRadius: 3,
    margin: '5px 0'
  }
}

export default NotificationDemo