import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile'

import { timer } from '@/utils'

export default function (props) {

  useEffect(() => {

  }, [])

  return (
    <div className='info'>
      <div className='info-title'>
        <span className='info-brand'>{props?.info?.brand} </span>
        <span className='info-model'>{props?.info?.model}</span>
      </div>
      <div className='info-msg'>
        {
          props?.info?.info.map(item => (<span className='info-item' key={item}>{item}</span>))
        }
      </div>
      <div className='info-time'>发布时间：{timer(props?.info?.publishTime)}</div>
      <div className='info-time'>开始出租：{timer(props?.info?.startTime)}</div>
      <div className='info-time'>结束出租：{timer(props?.info?.endTime)}</div>
      <div className='info-price'>￥{props?.info?.priceByDay}/日</div>
      <div className='info-price'>￥{props?.info?.priceByMonth}/月</div>
      <Button className='info-btn' type='warning'>预定</Button>
    </div>
  )
}