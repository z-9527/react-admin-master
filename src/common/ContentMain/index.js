import React from 'react'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import AsyncComponent from '../../utils/AsyncComponent'

const Home = AsyncComponent(()=>import('../../routes/Home/index'))

//基本组件Demo
const ButtonDemo = AsyncComponent(()=>import('../../routes/General/ButtonDemo/index'))
const IconDemo = AsyncComponent(()=>import('../../routes/General/IconDemo/index'))

//导航组件Demo
const DropdownDemo = AsyncComponent(()=>import('../../routes/Navigation/DropdownDemo/index'))
const MenuDemo = AsyncComponent(()=>import('../../routes/Navigation/MenuDemo/index'))
const StepsDemo = AsyncComponent(()=>import('../../routes/Navigation/StepsDemo/index'))

//输入组件Demo
const FormDemo1 = AsyncComponent(()=>import('../../routes/Entry/FormDemo/FormDemo1'))
const FormDemo2 = AsyncComponent(()=>import('../../routes/Entry/FormDemo/FormDemo2'))
const UploadDemo = AsyncComponent(()=>import('../../routes/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = AsyncComponent(()=>import('../../routes/Display/CarouselDemo/index'))
const CollapseDemo = AsyncComponent(()=>import('../../routes/Display/CollapseDemo/index'))
const ListDemo = AsyncComponent(()=>import('../../routes/Display/ListDemo/index'))
const TableDemo = AsyncComponent(()=>import('../../routes/Display/TableDemo/index'))
const TabsDemo = AsyncComponent(()=>import('../../routes/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = AsyncComponent(()=>import('../../routes/Feedback/SpinDemo/index'))
const ModalDemo = AsyncComponent(()=>import('../../routes/Feedback/ModalDemo/index'))
const NotificationDemo = AsyncComponent(()=>import('../../routes/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = AsyncComponent(()=>import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = AsyncComponent(()=>import('../../routes/Other/GalleryDemo/index'))
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

          <Route exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <Route exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <Route exact path='/home/entry/upload' component={UploadDemo}/>

          <Route exact path='/home/display/carousel' component={CarouselDemo}/>
          <Route exact path='/home/display/collapse' component={CollapseDemo}/>
          <Route exact path='/home/display/list' component={ListDemo}/>
          <Route exact path='/home/display/table' component={TableDemo}/>
          <Route exact path='/home/display/tabs' component={TabsDemo}/>

          <Route exact path='/home/feedback/modal' component={ModalDemo}/>
          <Route exact path='/home/feedback/notification' component={NotificationDemo}/>
          <Route exact path='/home/feedback/spin' component={SpinDemo}/>

          <Route exact path='/home/other/animation' component={AnimationDemo}/>
          <Route exact path='/home/other/gallery' component={GalleryDemo}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain