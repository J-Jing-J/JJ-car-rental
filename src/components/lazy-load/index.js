import React, { Component, lazy, Suspense } from 'react';
// import Demo from './demo';
const Demo = lazy(() => import('./demo'))

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

  render() {
    return (
      <div>
        {/* fallback是在子组件未渲染完时执行的，loading效果 */}
        {
          this.state.flag ?
            <Suspense fallback={<div>loading</div>}>
              <Demo />
            </Suspense> : null
        }
      </div>
    )
  }
}