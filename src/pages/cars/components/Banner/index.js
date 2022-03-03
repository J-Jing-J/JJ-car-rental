import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper'

export default function (props) {
  const [config, setConfig] = useState({
    // loop循环，在前后复制，看起来是循环的
    loop: true,
    autoplay: {
      // 每1.5s切换
      delay: 1500
    },
    // 分页
    pagination: {
      // dom节点
      el: '.swiper-pagination'
    }
  })

  useEffect(() => {

  }, [])

  return (
    // react-awesome-swiper有规定的类名样式
    <AwesomeSwiper className='banner' config={config}>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d'} />
        </div>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d'} />
        </div>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d'} />
        </div>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d'} />
        </div>
      </div>
      {/* 分页 */}
      <div className='swiper-pagination'></div>

    </AwesomeSwiper>
  )
}