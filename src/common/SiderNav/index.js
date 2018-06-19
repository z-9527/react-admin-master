import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '按钮', icon: '',},
      {key: '/home/general/icon', title: '图标', icon: '',},
    ]
  },
  {
    title: '导航组件',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
      {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
      {key: '/home/navigation/steps', title: '步骤条', icon: ''},
    ]
  },
  {
    title: '输入组件',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
          {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
        ]
      },
      {key: '/home/entry/upload', title: '上传', icon: ''},
    ]
  },
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/carousel', title: '轮播图', icon: ''},
      {key: '/home/display/collapse', title: '折叠面板', icon: ''},
      {key: '/home/display/list', title: '列表', icon: ''},
      {key: '/home/display/table', title: '表格', icon: ''},
      {key: '/home/display/tabs', title: '标签页', icon: '',},
    ]
  },
  {
    title: '反馈组件',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '对话框', icon: '',},
      {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
      {key: '/home/feedback/spin', title: '加载中', icon: '',}
    ]
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/home/other'
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]

@withRouter
class SiderNav extends React.Component {
  state = {
    openKeys: [],
    selectedKeys: []
  }

  componentDidMount() {
    // 防止页面刷新出现问题
    const pathname = this.props.location.pathname
    let openKeys = []
    //如果当前路由是二级目录，则要展开两个subMenu（一个父级，一个子级）
    if (pathname.split('/').length === 5) {
      const arr = pathname.split('/')
      openKeys = [arr.slice(0,3).join('/'), arr.slice(0,4).join('/')]
    } else {
      openKeys = [pathname.substr(0, pathname.lastIndexOf('/'))]
    }
    this.setState({
      selectedKeys: [pathname],
      openKeys
    })
  }

  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    const pathname = nextProps.location.pathname
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
      })
    }
  }

  onOpenChange = (openKeys) => {
    //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）

    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      return
    }

    //最新展开的菜单
    const latestOpenKey = openKeys[openKeys.length - 1]
    //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
    //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
    //只适用于2级菜单
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }

  render() {
    const {openKeys, selectedKeys} = this.state
    return (
      <div>
        <div style={styles.logo}></div>
        <CustomMenu
          menus={menus}
          theme='dark'
          mode='inline'
          onOpenChange={this.onOpenChange}
          onClick={({key}) => this.setState({selectedKeys: [key]})}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
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