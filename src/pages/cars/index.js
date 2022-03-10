import React, { useState, useEffect } from 'react';

import Banner from './components/Banner';
import Info from './components/Info';
import Lists from './components/Lists';
import Footer from './components/Footer';
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { useLocation } from 'umi'


import './index.less'

export default function (props) {
  const { cars: { detail, getDetailAsync, getCommentsAsync,
    comments, reloadComments, reloadCommentsNum, showLoading, resetData } } = useStoreHook()

  const { query } = useLocation();

  // 监听loading是否展示出来
  // 触发reload，修改分页
  // 监听reload变化，重新请求接口
  // 拼装数据
  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    // console.log(entries);
    if (comments && comments.length && showLoading && entries[0].isIntersecting) {
      reloadComments()
    }
  }, [comments, showLoading])

  useEffect(() => {
    getDetailAsync({
      id: query?.id
    })
  }, [])

  useEffect(() => {
    getCommentsAsync({
      id: query?.id
    })
  }, [reloadCommentsNum])

  // 因为使用的是think-react-store数据流的方式
  // 所以默认离开页面时数据不会改变
  useEffect(() => {
    return () => {
      resetData({
        detail: {}
      })
    }
  }, [])

  return (
    <div className='cars-page'>
      {/* banner */}
      <Banner banner={detail?.banner} />

      {/* 车辆信息 */}
      <Info info={detail?.info} />

      {/* 评论列表 */}
      <Lists lists={comments} showLoading={showLoading} />
      {/* footer */}
      <Footer />
    </div>
  )
}