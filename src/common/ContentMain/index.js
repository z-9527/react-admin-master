import React from 'react'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import AsyncComponent from '../../utils/AsyncComponent'

const Home = AsyncComponent(()=>import('../../components/Home/index'))

//基本组件Demo
const ButtonDemo = AsyncComponent(()=>import('../../components/General/ButtonDemo/index'))
const IconDemo = AsyncComponent(()=>import('../../components/General/IconDemo/index'))

//导航组件Demo
const DropdownDemo = AsyncComponent(()=>import('../../components/Navigation/DropdownDemo/index'))
const MenuDemo = AsyncComponent(()=>import('../../components/Navigation/MenuDemo/index'))
const StepsDemo = AsyncComponent(()=>import('../../components/Navigation/StepsDemo/index'))

//输入组件Demo
const UploadDemo = AsyncComponent(()=>import('../../components/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = AsyncComponent(()=>import('../../components/Display/CarouselDemo/index'))
const CollapseDemo = AsyncComponent(()=>import('../../components/Display/CollapseDemo/index'))
const TabsDemo = AsyncComponent(()=>import('../../components/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = AsyncComponent(()=>import('../../components/Feedback/SpinDemo/index'))
const ModalDemo = AsyncComponent(()=>import('../../components/Feedback/ModalDemo/index'))
const NotificationDemo = AsyncComponent(()=>import('../../components/Feedback/NotificationDemo/index'))

//其它
//关于







@withRouter
class ContentMain extends React.Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/home' component={Home}/>

          <Route exact path='/home/general/button' component={ButtonDemo}/>
          <Route exact path='/home/general/icon' component={IconDemo}/>

          <Route exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <Route exact path='/home/navigation/menu' component={MenuDemo}/>
          <Route exact path='/home/navigation/steps' component={StepsDemo}/>

          <Route exact path='/home/entry/upload' component={UploadDemo}/>

          <Route exact path='/home/display/carousel' component={CarouselDemo}/>
          <Route exact path='/home/display/collapse' component={CollapseDemo}/>
          <Route exact path='/home/display/tabs' component={TabsDemo}/>

          <Route exact path='/home/feedback/modal' component={ModalDemo}/>
          <Route exact path='/home/feedback/notification' component={NotificationDemo}/>
          <Route exact path='/home/feedback/spin' component={SpinDemo}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain