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
        {
          props?.banner?.map(item =>
          (<div className='swiper-slide' key={item}>
            <img alt='banner' src={item} />
          </div>))
        }

      </div>
      {/* 分页 */}
      <div className='swiper-pagination'></div>

    </AwesomeSwiper>
  )
}