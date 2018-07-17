import React from 'react'
import Shuffle from 'shufflejs'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import {Card,Button,Modal} from 'antd'

class GalleryDemo extends React.Component{
  state = {
    image:'',
    visible:false,
    photos : [
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=882e851a008e83b7a80d05bdc96aa817'
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=6237e62a10fa079d99b088b0db0144ac'
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=86dc2dcb74588b338dfbb15d959c5037'
      },
      {
        groups:['scenery'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=7ab1744fe016fb39feb2972244246359'
      },
      {
        groups:['scenery'],
        style:'itemTwoRow',
        size:'1x2',
        src:'https://images.unsplash.com/photo-1416184008836-5486f3e2cf58?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=601&h=676&fit=crop&s=5f1f1ffba05979d4248cc16d8eb82f0a'
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=57a00aabcfaa1b04fd268ea3ad4a4cbb'
      },
      {
        groups:['nature','scenery'],
        style:'itemTwoCol',
        size:'2x1',
        src:'https://images.unsplash.com/photo-1473175494278-d83ed8459089?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1208&h=338&fit=crop&s=fd1cf1e8eddf88ef87015314f85ce3fb'
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1434144893279-2a9fc14e9337?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=d2f930bbb91de7e19e6436f5b03897b0'
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=eda14f45e94e9024f854b1e06708c629'
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=70dabb0dcc604c558245b72f3109bbbb'
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=4e19022724205e38e491961f50e47d32'
      },
      {
        groups:['other','scenery'],
        style:'itemOne',
        size:'1x1',
        src:'https://images.unsplash.com/photo-1430026996702-608b84ce9281?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=338&fit=crop&s=363a88755a7b87635641969a8d66f7aa'
      },
    ]
  }
  componentDidMount(){
    this.shuffle = new Shuffle(this.shuffleDemo, {
      itemSelector: '.photo-item',
      sizer: this.sizer,
    });
  }
  componentDidUpdate() {
    // this.shuffle.resetItems();
  }

  componentWillUnmount() {
    this.shuffle.destroy();
    this.shuffle = null;
  }
  _whenPhotosLoaded(photos) {
    return Promise.all(photos.map(photo => new Promise((resolve) => {
      const image = document.createElement('img');
      image.src = photo.src;

      if (image.naturalWidth > 0 || image.complete) {
        resolve(photo);
      } else {
        image.onload = () => {
          resolve(photo);
        };
      }
    })));
  }
  showImg = (src)=>{
    this.setState({
      visible:true,
      image:src
    })
  }

  render(){
    const cardContent = `<ul class='card-ul'}>
      <li>快速 - 在初始化，排序或过滤器上只有一个强制同步布局（又称回流</li>
      <li>回应（尝试调整窗口大小！）</li>
      <li>按组过滤项目</li>
      <li>项目可以有多个组，大小不同</li>
      <li>排序项目</li>
      <li>高级过滤（如搜索）</li>
    </ul>`
    return (
      <div>
        <CustomBreadcrumb arr={['其它','画廊']}/>
        <TypingCard title='shufflejs插件' source={cardContent} height={290}/>
        <Card bordered={false}>
          <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter()}>全部</Button>
          <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('scenery')}>风景</Button>
          <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('nature')}>自然</Button>
          <Button style={{marginRight:20}} onClick={()=>this.shuffle.filter('other')}>其他</Button>
        </Card>
        <div style={{padding: '20px 32px',minHeight:500}}>
          <div ref={(div)=>this.shuffleDemo=div}>
            {
              this.state.photos.map((item,index)=>(
                <div
                  className='photo-item'
                  data-groups={JSON.stringify(item.groups)}
                  onClick={()=>this.showImg(item.src)}
                  style={styles[item.style]} key={item.src}>
                  <div className={'aspect aspect--'+item.size}>
                    <div className='aspect__inner'>
                      <img src={item.src} alt="" width='100%' height='100%'/>
                    </div>
                  </div>
                </div>
              ))
            }
            <div style={{width:'8.33333%'}}  ref={(div)=>this.sizer = div}/>
          </div>
        </div>
        <Modal
          footer={null} closable={false}
          visible={this.state.visible}
          wrapClassName="vertical-center-modal"
          onCancel={()=>this.setState({visible:false})}>
          <img src={this.state.image} alt="" width='100%'/>
        </Modal>
      </div>
    )
  }
}

const styles = {
  itemOne:{
    width:'25%',
    marginBottom:8,
    padding:'0 4px'

  },
  itemTwoCol:{
    width:'50%',
    marginBottom:8,
    padding:'0 4px'
  },
  itemTwoRow:{
    width:'25%',
    marginBottom:8,
    padding:'0 4px'
  }

}

export default GalleryDemo