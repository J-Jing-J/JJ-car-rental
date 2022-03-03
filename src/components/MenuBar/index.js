// 对antd-mobile里的TabBar组件的二次封装
// 让底部导航栏只显示在几个固定的页面中
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile'
import propTypes from 'prop-types'
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from 'react-icons/bs'
import { history } from 'umi'

import './index.less';

export default class MenuBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 底部导航有这三个栏目
      item: [
        {
          title: '首页',
          icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
          selectedIcon: <BsHouseDoorFill style={{ fontSize: '1.5rem' }} />,
          link: '/'
        },
        {
          title: '订单',
          icon: <BsBag style={{ fontSize: '1.5rem' }} />,
          selectedIcon: <BsBagFill style={{ fontSize: '1.5rem' }} />,
          link: '/order'
        },
        {
          title: '我的',
          icon: <BsPerson style={{ fontSize: '1.5rem' }} />,
          selectedIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
          link: '/user'
        },
      ]
    };
  }

  render() {
    const { show, pathname } = this.props;

    return (
      <div className='menu-bar'>
        <TabBar hidden={!show}>
          {
            this.state.item.map(item => (
              <TabBar.Item
                key={item.link}
                title={item.title}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                // 如果从父组件传入的pathname和item相等，就选中
                selected={pathname === item.link}
                onPress={() => { history.push(item.link) }}
              />
            ))
          }
        </TabBar>
      </div>
    )
  }
}


MenuBar.defaultProps = {
  show: false,
  pathname: ''
}

MenuBar.propTypes = {
  show: propTypes.bool,
  pathname: propTypes.string
}