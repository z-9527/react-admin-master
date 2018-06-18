import React from 'react'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
import AsyncComponent from '../../utils/AsyncComponent'

const Home = AsyncComponent(()=>import('../../components/Home/index'))
const ButtonDemo = AsyncComponent(()=>import('../../components/UI/ButtonDemo/index'))
const IconDemo = AsyncComponent(()=>import('../../components/UI/IconDemo/index'))
const DropdownDemo = AsyncComponent(()=>import('../../components/UI/DropdownDemo/index'))
const MenuDemo = AsyncComponent(()=>import('../../components/UI/MenuDemo/index'))

const SpinDemo = AsyncComponent(()=>import('../../components/Feedback/SpinDemo/index'))
const ModalDemo = AsyncComponent(()=>import('../../components/Feedback/ModalDemo/index'))

@withRouter
class ContentMain extends React.Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/home/ui/button' component={ButtonDemo}/>
          <Route exact path='/home/ui/icon' component={IconDemo}/>
          <Route exact path='/home/ui/dropdown' component={DropdownDemo}/>
          <Route exact path='/home/ui/menu' component={MenuDemo}/>
          <Route exact path='/home/feedback/spin' component={SpinDemo}/>
          <Route exact path='/home/feedback/modal' component={ModalDemo}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain