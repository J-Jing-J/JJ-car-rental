import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hooks';

import './index.less'


export default function (props) {
  const [state, setState] = useState();

  const [cities, citiesLoading] = useHttpHook({
    url: '/commons/cities'
  })

  const [cars] = useHttpHook({
    url: '/cars/hot'
  })

  // const [] = useHttpHook({
  //   url: '/commons/cities'
  // })

  useEffect(() => {

  }, [])

  return (
    // 各个子组件之间没有交互，就可以把方法放在父组件里
    <div className='home'>
      {/* header登录区 */}
      <Header />

      {/* 搜索区 */}
      <Search cities={cities} citiesLoading={citiesLoading} />

      {/* 热门信息 */}
      <Hot cars={cars} />

    </div>
  )
}