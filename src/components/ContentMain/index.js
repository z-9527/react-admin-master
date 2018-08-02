import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import AsyncComponent from '../../utils/AsyncComponent'
import PrivateRoute from '../PrivateRoute'

const Home = AsyncComponent(() => import('../../routes/Home/index'))

//基本组件Demo
const ButtonDemo = AsyncComponent(() => import('../../routes/General/ButtonDemo/index'))
const IconDemo = AsyncComponent(() => import('../../routes/General/IconDemo/index'))

//导航组件Demo
const DropdownDemo = AsyncComponent(() => import('../../routes/Navigation/DropdownDemo/index'))
const MenuDemo = AsyncComponent(() => import('../../routes/Navigation/MenuDemo/index'))
const StepsDemo = AsyncComponent(() => import('../../routes/Navigation/StepsDemo/index'))

//输入组件Demo
const FormDemo1 = AsyncComponent(() => import('../../routes/Entry/FormDemo/FormDemo1'))
const FormDemo2 = AsyncComponent(() => import('../../routes/Entry/FormDemo/FormDemo2'))
const UploadDemo = AsyncComponent(() => import('../../routes/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = AsyncComponent(() => import('../../routes/Display/CarouselDemo/index'))
const CollapseDemo = AsyncComponent(() => import('../../routes/Display/CollapseDemo/index'))
const ListDemo = AsyncComponent(() => import('../../routes/Display/ListDemo/index'))
const TableDemo = AsyncComponent(() => import('../../routes/Display/TableDemo/index'))
const TabsDemo = AsyncComponent(() => import('../../routes/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = AsyncComponent(() => import('../../routes/Feedback/SpinDemo/index'))
const ModalDemo = AsyncComponent(() => import('../../routes/Feedback/ModalDemo/index'))
const NotificationDemo = AsyncComponent(() => import('../../routes/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = AsyncComponent(() => import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = AsyncComponent(() => import('../../routes/Other/GalleryDemo/index'))
const DraftDemo = AsyncComponent(() => import('../../routes/Other/DraftDemo/index'))
const ChartDemo = AsyncComponent(() => import('../../routes/Other/ChartDemo/index'))
const LoadingDemo = AsyncComponent(() => import('../../routes/Other/LoadingDemo/index'))
const ErrorPage = AsyncComponent(() => import('../../routes/Other/ErrorPage/index'))
const SpringText = AsyncComponent(() => import('../../routes/Other/SpringText/index'))

//关于

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/home/general/button' component={ButtonDemo}/>
          <PrivateRoute exact path='/home/general/icon' component={IconDemo}/>

          <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo}/>
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo}/>

          <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo}/>

          <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
          <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/>

          <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/>

          <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
          <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
          <PrivateRoute exact path='/home/other/springText' component={SpringText}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain