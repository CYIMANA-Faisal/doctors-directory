import { Form, Input, Modal, Select } from 'antd';
import React from 'react';
interface BookingModalProps {
    isModalVisible: boolean,
    handleOk(): void,
    handleCancel(): void,
}

const BookingModal: React.FC<BookingModalProps> = (props) => {
    const { Option } = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 100 }}>
            <Option value="+250">+250</Option>
          </Select>
        </Form.Item>
      );
  return (
    <>
      <Modal maskClosable={true} onCancel={props.handleCancel}  centered={true} title="Book your appointment" visible={props.isModalVisible} footer={null} destroyOnClose={true} width={800}>
        <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Names"
                    name="username"
                    rules={[{ required: true, message: 'Please input your names!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
            </Form>
      </Modal>
    </>
  );
};

export default BookingModal;
