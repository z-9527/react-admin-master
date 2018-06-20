import React from 'react'
import {Card, Spin, Button, Radio, List, Switch, Avatar} from 'antd'
import axios from 'axios'
import CustomBreadcrumb from '../../../common/CustomBreadcrumb/index'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class ListDemo extends React.Component {
  state = {
    size: 'default',
    bordered: true,
    data2: [],
    loading: false,
    loadingMore: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.getData2();
    this.setState({
      loading: false
    })
  }

  getData2 = () => {
    this.setState({
      loadingMore: true
    })
    axios.get('https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo').then(res => {
      this.setState({
        data2: this.state.data2.concat(res.data.results),
        loadingMore: false
      })
    })
  }

  render() {
    const {size, bordered, loading, data2, loadingMore} = this.state
    const loadMore = (
      <div style={styles.loadMore}>
        {/*不知道为什么这种写法有问题，会报错*/}
        {/*{loadingMore ? <Spin/> : <Button onClick={() => this.getData2()}>加载更多</Button>}*/}
          <Spin style={loadingMore?{}:{display:'none'}}/>
          <Button style={!loadingMore?{}:{display:'none'}} onClick={() => this.getData2()}>加载更多</Button>
      </div>
    )
    return (
      <div>
        <CustomBreadcrumb arr={['显示', '列表']}/>
        <Card hoverable bordered={false}
              style={{marginBottom: 10, lineHeight: '2em'}} title='何时使用'>
          最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
        </Card>
        <Card bordered={false} title='基本用法' style={{marginBottom: 15}}>
          <Radio.Group value={size}
                       onChange={e => this.setState({size: e.target.value})}
                       style={{marginBottom: '1em'}}>
            <Radio.Button value='large'>Large</Radio.Button>
            <Radio.Button value='default'>Default</Radio.Button>
            <Radio.Button value='small'>Small</Radio.Button>
          </Radio.Group>&emsp;&emsp;&emsp;
          是否有边框&emsp;<Switch defaultChecked
                             onChange={checked => this.setState({bordered: checked})}/>
          <List dataSource={data}
                bordered={bordered}
                size={size}
                style={bordered ? styles.haveBorder : styles.noBorder}
                renderItem={item => (<List.Item>{item}</List.Item>)}/>
        </Card>
        <Card bordered={false} title='加载更多' style={{marginBottom: 15}}>
          <List loading={loading}
                dataSource={data2}
                loadMore={loadMore}
                renderItem={item => (
                  <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                    <List.Item.Meta
                      avatar={<Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                      title={<a>{item.name.last}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
          />
        </Card>
      </div>
    )
  }
}

const styles = {
  haveBorder: {
    minHeight: 270,
    boxSizing: 'border-box'
  },
  noBorder: {
    minHeight: 270,
    padding: '0 24px',
    boxSizing: 'border-box',
    border: '1px solid #fff'
  },
  loadMore: {
    height: 32,
    marginTop: 16,
    lineHeight: '32px',
    textAlign: 'center',
  }
}

export default ListDemo