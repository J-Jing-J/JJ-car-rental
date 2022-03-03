import React, { useState, useEffect } from 'react';

export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='header'>
      <div className='header_title'>
        <h4>JJ租车</h4>
      </div>
      <div className='header_login'>
        {/* <link to='/login'>登录</link> | <link to='/register'>注册</link> */}
      </div>
    </div>
  )
}