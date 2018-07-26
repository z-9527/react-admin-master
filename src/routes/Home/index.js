import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg}>
        <img style={styles.img} src="http://cupcake.nilssonlee.se/wp-content/uploads/2015/12/IMG_4120-1200x800.jpg" alt="" />
        {/*<img style={styles.img} src="http://cupcake.nilssonlee.se/wp-content/uploads/2017/08/IMG_2317-1200x800.jpg" alt="" />*/}
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
  img:{
    width:'100%',
    height:'100%'
  }
}

export default Home