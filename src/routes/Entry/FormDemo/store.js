import React from 'react'
import {observable,action} from 'mobx'

//刷新页面不会使mobx重新初始化，除非清空缓冲并硬性重新加载

class StepFormStore{
  @observable current = 0
  @observable info = {}

  @action setCurrent(current){
    this.current = current
  }
  @action setInfo(info){
    this.info = info
  }
}

export default new StepFormStore()