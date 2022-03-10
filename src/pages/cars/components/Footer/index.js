import React, { useState, useEffect } from 'react';
import { Modal } from '@/components'
import { TextareaItem, Button, Toast } from 'antd-mobile'
import { useStoreHook } from 'think-react-store'

export default function (props) {
  const [show, setShow] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const { cars: { addCommentAsync } } = useStoreHook()

  const handleClick = () => {
    setShow(true)
  }

  const handleCommentChange = (value) => {
    setCommentValue(value)
  }

  const handleModalClose = () => {
    setShow(false)
  }

  // 点击添加评论按钮
  const handleSubmit = () => {
    if (commentValue) {
      handleModalClose()
      addCommentAsync({
        comment: commentValue
      })
    } else {
      Toast.fail('请输入评论内容')
    }
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
          <Button className='comment-btn' type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </>
  )
}