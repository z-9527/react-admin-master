import React from 'react'
import bodymovin from 'bodymovin'

class Loading2 extends React.Component{
  componentDidMount(){
    const animData = {
      wrapper: document.querySelector('#animationWindow'),
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      animationData:require('./data.json')
    };
    this.anim = bodymovin.loadAnimation(animData);
    this.anim.setSpeed(1.42);
  }
  render(){
    return (
      <div>
        <div id="animationWindow"/>
      </div>
    )
  }
}
export default Loading2