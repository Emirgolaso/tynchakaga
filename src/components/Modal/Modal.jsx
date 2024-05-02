import React, { useState } from 'react';
import { Button, Modal as AntdModal } from 'antd'; // Renaming Ant Design Modal to AntdModal

const CustomModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('очень удобный хороший, пошлый , сексуальный человек ');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('очень удобный хороший, пошлый , сексуальный человек');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <div className='button'>
      <Button type="primary" onClick={showModal}>
        Подробнее
      </Button>
      <AntdModal
        title="Актан тип"
        visible={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </AntdModal>
    </div>
  );
};

export default CustomModal;
