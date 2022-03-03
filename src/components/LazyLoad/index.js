import React, { Component, lazy, Suspense } from 'react';
// import Demo from './demo';
// const Demo = lazy(() => import('./demo'))

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this, this.setState({ flag: true })
    }, 2000);
  }


  _renderLazy = () => {
    let Lazy;
    const { component, delay, ...other } = this.props;
    // 如果组件不存在，或者组件类型不是 promise
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error.js')
    }
    Lazy = lazy(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(component)
        }, delay || 300);
      })
    })
    return <lazy {...other} />
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          {this._renderLazy()}
        </Suspense>
      </div>
    )
  }
}