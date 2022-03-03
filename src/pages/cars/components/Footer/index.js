import React, { useState, useEffect } from 'react';
import { Modal } from '@/components'
import { TextareaItem, Button } from 'antd-mobile'

export default function (props) {
  const [show, setShow] = useState(false)


  const handleClick = () => {
    setShow(true)
  }

  const handleCommentChange = (value) => {

  }

  const handleModalClose = () => {
    setShow(false)
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className='footer' onClick={handleClick}>
        评论
      </div>
      <Modal
        show={show}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset'
        }}
        onClose={handleModalClose}
      >
        <div className='modal-comment'>
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleCommentChange}
          />
          <Button className='comment-btn' type='warning'>评论</Button>
        </div>
      </Modal>
    </>
  )
}