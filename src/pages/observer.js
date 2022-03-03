import React, { useState, useEffect } from 'react';
import { useObserverHook } from '@/hooks'

export default function (props) {
  const [state, setState] = useState()

  useObserverHook('#loading', (entries) => { })

  useEffect(() => {
  }, [])

  return (
    <div>
      observer
      <div id='loading' style={{ width: '100px', height: '100px', background: '#f60' }}>
        loading
      </div>
    </div>
  )
}