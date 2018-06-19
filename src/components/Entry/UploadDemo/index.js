import React from 'react'
import {Card, Col, Row, Icon, Upload, message, Button} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb'

class UploadDemo extends React.Component{
  render(){
    return (
      <div>
        <CustomBreadcrumb first='输入' last='上传'/>
        <Card hoverable bordered={false}
              style={{marginBottom: 5, lineHeight: '2em'}} title='何时使用'>
          上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
          <ul style={{listStyle: 'inside circle'}}>
            <li>当需要上传一个或一些文件时</li>
            <li>当需要展现上传的进度时</li>
            <li>当需要使用拖拽交互时</li>
          </ul>
        </Card>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem} title='基本用法'>
              <Upload>
                <Button><Icon type="upload" /> Click to Upload</Button>
              </Upload>
            </Card>
            <Card bordered={false} style={styles.colItem} title=''>

            </Card>
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  colItem: {
    borderRadius: 3,
    margin: '10px 0'
  }
}

export default UploadDemo