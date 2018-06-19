import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomMenu from "../CustomMenu/index";

@withRouter
class SiderNav extends React.Component {
  state = {
    currentKey: '',
    selectedKeys: '',
    menus: [
      {
        title: '首页',
        icon: 'home',
        key: '/home'
      },
      {
        title:'基本组件',
        icon:'laptop',
        key:'/home/general',
        subs:[
          {key: '/home/general/button', title: '按钮', icon: '',},
          {key: '/home/general/icon', title: '图标', icon: '',},
        ]
      },
      {
        title:'导航组件',
        icon:'bars',
        key:'/home/navigation',
        subs:[
          {key:'/home/navigation/dropdown',title:'下拉菜单',icon:''},
          {key:'/home/navigation/menu',title:'导航菜单',icon:''},
          {key:'/home/navigation/steps',title:'步骤条',icon:''},
        ]
      },
      {
        title:'输入组件',
        icon:'edit',
        key:'/home/entry',
        subs:[
          {key:'/home/entry/form',title:'表单',icon:''},
          {key:'/home/entry/upload',title:'上传',icon:''},
        ]
      },
      {
        title:'显示组件',
        icon:'desktop',
        key:'/home/display',
        subs:[
          {key:'/home/display/carousel',title:'轮播图',icon:''},
          {key:'/home/display/collapse',title:'折叠面板',icon:''},
          {key:'/home/display/list',title:'列表',icon:''},
          {key:'/home/display/table',title:'表格',icon:''},
          {key: '/home/display/tabs', title: '标签页', icon: '',},
        ]
      },
      {
        title:'反馈组件',
        icon:'message',
        key:'/home/feedback',
        subs:[
          {key: '/home/feedback/modal', title: '对话框', icon: '',},
          {key:'/home/feedback/notification',title:'通知提醒框', icon:''},
          {key: '/home/feedback/spin', title: '加载中', icon: '',}
        ]
      },
      {
        title:'其它',
        icon:'bulb',
        key:'/home/other'
      },
      {
        title:'关于',
        icon:'info-circle-o',
        key:'/home/about'
      }
    ]
  }

  componentDidMount() {
    //防止页面刷新出现问题
    const pathname = this.props.location.pathname
    this.setState({
      selectedKeys: pathname,
      currentKey: pathname.substr(0, pathname.lastIndexOf('/'))
    })
  }

  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    const pathname = nextProps.location.pathname
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectedKeys: pathname,
        currentKey: pathname.substr(0, pathname.lastIndexOf('/'))
      })
    }
  }

  onlyKey = (a) => {
    //此函数的作用是一次只展开一个submenu
    this.setState({
      currentKey: a[a.length - 1]
    })
  }

  render() {
    return (
      <div>
        <div style={styles.logo}></div>
        <CustomMenu
          menus={this.state.menus}
          theme='dark'
          mode='inline'
          onOpenChange={this.onlyKey}
          openKeys={[this.state.currentKey]}   //一定是数组
          selectedKeys={[this.state.selectedKeys]}  //一定是数组
        />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav