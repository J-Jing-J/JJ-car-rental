import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './index.less'
import { CommonEnum } from '@/enums'



export default function showLoading(props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      {
        props.showLoading ?
          <div id={CommonEnum.LOADING_ID} className='baseline'>loading</div> :
          <div className='baseline'>---我是有底线的---</div>
      }
    </div>
  )
}

showLoading.defaultProps = {
  showLoading: true
}

showLoading.propTypes = {
  showLoading: PropTypes.bool
}