import {observable,action} from 'mobx'

class appStore{
  @observable isLogin = false

  @action toggleLogin(flag){
    this.isLogin = flag
  }
}

export default new appStore()