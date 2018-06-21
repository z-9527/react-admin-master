import React from 'react'
import {Card, Col, Row, Icon, Upload, message, Button} from 'antd'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb'

const props = {
  name:'file',
  action:'//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
}

class UploadDemo extends React.Component{
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['输入','上传']}/>
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
              <Upload {...props}>
                <Button><Icon type="upload" />Upload</Button>
              </Upload>
            </Card>
            <Card bordered={false} style={styles.colItem} title=''>

            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={styles.colItem} title='用户头像上传'>

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
    margin: '10px 0'
  }
}

export default UploadDemo