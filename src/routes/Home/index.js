import React from 'react'
import {Carousel} from 'antd'
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' className='size'>
          <div>
            <div className='size' style={{backgroundImage:'url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-343369.jpg)'}}/>
          </div>
          <div>
            <div className='size' style={{backgroundImage:'url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-4871.jpg)'}}/>
          </div>
          <div>
            <div className='size' style={{backgroundImage:'url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-486302.jpg)'}}/>
          </div>
          <div>
            <div className='size' style={{backgroundImage:'url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-75202.jpg)'}}/>
          </div>
          {/*不用img标签是因为图片大小会出现问题*/}
          {/*<img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-343369.jpg" alt="" />*/}
          {/*<img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-4871.jpg" alt="" />*/}
          {/*<img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-486302.jpg" alt="" />*/}
          {/*<img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-75202.jpg" alt="" />*/}
        </Carousel>
      </div>
    )
  }
}

const styles = {
  bg:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home