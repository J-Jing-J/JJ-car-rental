import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useHttpHook, useObserverHook, useImgHook } from '@/hooks';
import { useLocation } from 'umi';

import { ShowLoading } from '@/components'
// id名jj-loading，定义为常量
import { CommonEnum } from '@/enums'

import './index.less';

export default function (props) {
  const { query } = useLocation();
  console.log(query);

  // 搜索框里的value
  const [carsName, setCarsName] = useState('');
  const [page, setPage] = useState(CommonEnum.PAGE)
  // 监听loading
  const [carsLists, setCarsLists] = useState([])
  // 隐藏loading，就没法监听loading，就不会再发送请求了
  const [showLoading, setShowLoading] = useState(true)
  // 搜索框里提交的数据
  const [carsSubmitName, setCarsSubmitName] = useState('')


  const [cars, carsLoading] = useHttpHook({
    url: '/cars/search',
    body: {
      ...page,
      carsName,
      code: query?.cities,
      startTime: query?.startTime,
      endTime: query?.endTime
    },
    // 监听
    // 当页面pageNum发生变化时发送新请求
    // 当提交时发送新请求
    watch: [page.pageNum, carsSubmitName]
  })

  // 监听loading是否展示出来
  // 修改分页数据
  // 监听分页数据的修改，发送接口，请求下一页数据
  // 监听loading变化，拼装数据（利用usehttphook返回的loading 数据返回时变为false）
  useObserverHook('#' + CommonEnum.LOADING_ID, (entries) => {
    // console.log(entries);
    // 当页面滚动到loading时，isIntersecting变为true
    if (!carsLoading && entries[0].isIntersecting) {
      // 更新pageNum
      //usehttphook会监听pagenum，变化时发送新的请求
      setPage({
        ...page,
        pageNum: page.pageNum + 1
      })
    }
  }, null)

  useImgHook('.item-img', (entries) => { }, null);

  const handleChange = (value) => {
    setCarsName(value);
  }


  // submit和cancel很相似，抽成公用方法
  const handleSubmitOrCancel = (value) => {
    setCarsName(value)
    setCarsSubmitName(value);
    // 重置页面
    setPage(CommonEnum.PAGE)
    setCarsLists([]);
  }

  const handleCancel = () => {
    handleSubmitOrCancel('')
  }

  const handleSubmit = (value) => {
    handleSubmitOrCancel(value)
  }


  useEffect(() => {
    // 监听loading变化，拼装数据
    // 如果请求数据已经成功了，并且存在cars
    if (!carsLoading && cars) {
      if (cars.length) {
        setCarsLists([...carsLists, ...cars]);
        // 如果返回的数据个数小于pageSize，说明后面没有数据了，隐藏loading
        if (cars.length < page.pageSize) {
          setShowLoading(false);
        }
      } else {
        setShowLoading(false);
      }
    }

  }, [carsLoading])

  return (
    <div className='search-page'>
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder='搜索车型'
        value={carsName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
      {/* 搜索结果 */}
      {!carsLists.length ? <ActivityIndicator toast /> :
        <div className='result'>
          {carsLists.map(item => (
            <div className='item' key={item.id}>
              <img alt='img' className='item-img'
                src={require('../../assets/blank.png')} data-src={item.img}
              />
              <div className='item-middle'>
                <div className='title'>
                  <span className='brand'>{item.brand} </span>
                  <span className='model'>{item.model}</span>
                </div>
                <div className='info'>
                  {item.info.map(info => (<span className='info-item' key={info}>{info}</span>))}
                </div>
              </div>
              <div className='item-right'>
                <div className='price'>
                  <div className='priceByDay'>￥{item.priceByDay}/日</div>
                  <div className='priceByMonth'>￥{item.priceByMonth}/月</div>
                </div>
              </div>
            </div>
          ))}
          <ShowLoading showLoading={showLoading} />
        </div>}
    </div>
  )
}