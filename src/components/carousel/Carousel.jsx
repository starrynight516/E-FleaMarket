import React,{ Component } from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import axios from 'axios';

import '../../assets/style/carousel.scss';

import Scroll from '../scroll/Scroll';

const { Element, Arrow } = BannerAnim;
const BgElement = Element.BgElement;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 0,
      dataCarousel: []
    }
  }

  componentDidMount(){
    axios
    .get('/data/carousel.json',{dataType: 'json'})
    .then(res => this.setState({
      dataCarousel: res.data
    }))
    .catch(err => console.log(err));
    Scroll(330,300);
  }

  componentWillUnmount() {
    this.axios = null;
  }

  onChange =(e, int) => {
    // Change duration after switching to the next 在切换到下一个后把延时改掉。
    if (int === 1 && e === 'after' && !this.openSlide) {
      this.setState({
        delay: 600,
      });
      this.openSlide = true;
    }
  }

  render(){
    const { dataCarousel } = this.state;

    const settings = {
      prefixCls: "carousel-wrap",
      type: "acrossOverlay",
      onChange: this.onChange,
      duration: 1000,
      ease: "easeInOutExpo",
      arrow: false,
      autoPlay: true,
      autoPlaySpeed: 6000
    };

    return (
      <BannerAnim
        {...settings}
        ref="banner"
        sync
      >
        {
          dataCarousel.map(function(item,index){
            return(
              <Element key={index}
                prefixCls="carousel-elem"
                hideProps={{ 2: { reverse: true } }}
                followParallax={{
                  delay: 1000,
                  data: [
                    { id: 'carousel-title', value: -30, type: 'x' },
                    { id: 'carousel-text', value: 50, type: 'x' },
                  ],
                }}
              >
                <BgElement
                  key='bg'
                  className="carousel-bg"
                  style={{
                    backgroundImage: 'url('+ item.url +')',
                  }}
                />
                <TweenOne
                  id='carousel-title'
                  key='title'
                  className="carousel-header"
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 600 }}>
                  <h2>{item.title}</h2>
                </TweenOne>
                <TweenOne
                  id='carousel-text'
                  key='text'
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 1200 }}
                >
                  <p>{item.des}</p>
                </TweenOne>
              </Element>
            );
          })
        }
      </BannerAnim>
    );
  }
}