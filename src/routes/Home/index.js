import React from 'react'
import {Carousel} from 'antd'
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' style={styles.size}>
          <img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-343369.jpg" alt="" />
          <img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-4871.jpg" alt="" />
          <img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-486302.jpg" alt="" />
          <img style={styles.size} src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-75202.jpg" alt="" />
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
  },
  size:{
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home