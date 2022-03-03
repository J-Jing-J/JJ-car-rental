import React, { useState, useEffect } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';

export default function (props) {

  const [cities, setCities] = useState([[
    { label: '珠海', value: '10001' },
    { label: '广州', value: '10002' },
    { label: '深圳', value: '10003' },
    { label: '北京', value: '10004' },
  ]])

  const [selectedCity, setSelectedCity] = useState(['10001'])
  const [times, setTimes] = useState('可选时间');
  const [dateShow, SetDateShow] = useState(false);

  const handleCityChange = (value) => {
    // value是选中对象中的value值，序号如10001
    setSelectedCity(value)
  }

  // 是否显示日历
  const handleDate = () => {
    SetDateShow(!dateShow);
  }

  // 点击确认日期
  const handleDateConfirm = (startTime, endTime) => {
    SetDateShow(!dateShow);
    // 返回两个GMT时间（格林尼治标准时间）
    // 引入第三方时间处理dayjs
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD')
      + '~'
      + dayjs(endTime).format('YYYY-MM-DD')
    )
  }

  // 点击搜索车型按钮
  const handleSearchClick = () => {
    if (times.includes('~')) {
      history.push({
        pathname: '/search',
        query: {
          cities: selectedCity,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1]
        }
      })
    } else {
      // 如果没选择日期就提示选择
      Toast.fail('请选择日期')
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className='search'>
      {/* 可选城市 */}
      <div className='search-addr'>
        {!props.citiesLoading && <Picker
          title='城市'
          data={props.cities}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          {/* Picker组件中间填充内容才会渲染 */}
          <List.Item>可选城市</List.Item>
        </Picker>}

      </div>

      {/* 可选时间 */}
      <div className='search-time' onClick={handleDate}>
        {/* 左 */}
        <p className='search-time-left'>出租时间</p>
        {/* 右 */}
        <p className='search-time-right'>{times}</p>
      </div>

      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      />

      {/* 点击按钮 */}
      <Button type='warning' size='large' onClick={handleSearchClick}>
        搜索车型
      </Button>
    </div>
  )
}