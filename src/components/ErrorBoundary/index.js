import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  // 针对错误处理，react提供了两个构造函数
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      flag: true
    }
  }

  // 适合做日志相关操作，返回的信息更全面
  componentDidCatch(error, info) {

  }

  render() {
    return (
      <div>
        {
          this.state.flag ? <h1>发生错误，请稍后再试</h1> : this.props.children
        }
      </div>
    )
  }
}