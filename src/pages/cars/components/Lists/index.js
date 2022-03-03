import React, { useState, useEffect } from 'react';

export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='comment'>
      <h1 className='comment-title'>评论</h1>
      <div className='comment-lists'>
        <div className='comment-lists_item'>
          <img alt='user' className='avatar' src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0804%2F3790ae66j00qxau8s002tc000qo00f0m.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648631825&t=547c413c9842b575a6b3d9a36418839d'} />
          <div className='right'>
            <div className='right-top'>
              <p>{'user'}</p>
              <p>{'time'}</p>
            </div>
            {/* 评论内容 */}
            <div className='right-bottom'>
              {'info'}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}