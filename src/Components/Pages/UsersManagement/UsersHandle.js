import React from "react";
import { Button, Col, Form, Input, Modal, Radio, Row } from "antd";
import styles from "./UsersManagement.module.scss";
import { Upload } from "./../../Common/Upload/Upload";
import InputDate from "./../../Common/InputDate/InputDate";

const UsersHandle = (props) => {
  const onChangeRadio = (e) => {
    props.setGender(e.target.value);
  };

  return (
    <>
      <Modal
        title="Quản lý tài khoản"
        visible={props.isModalVisible}
        onCancel={props.handleCancel}
        footer={null}
        className={`${styles.user_manager_modal} user_modal`}
      >
        <Form layout="vertical">
          <Row gutter={30}>
            <Col span={6}>
              <div className={styles.user_manager_image}>
                <Form.Item label="Hình ảnh">
                  <Upload height="237.33px" setImage={props.setAvatar} />
                </Form.Item>
              </div>
              <div className={styles.user_manager_button}>
                {props.isAddUser && (
                  <Button
                    type="primary"
                    size="large"
                    onClick={props.addProductHandle}
                  >
                    Thêm
                  </Button>
                )}
                {!props.isAddUser && (
                  <Button
                    type="primary"
                    size="large"
                    onClick={props.updateProductHandle}
                  >
                    Sửa
                  </Button>
                )}
                {props.isAddUser && (
                  <Button type="primary" size="large" onClick={props.resetForm}>
                    Mới
                  </Button>
                )}
              </div>
            </Col>
            <Col span={18}>
              <div className={styles.user_manager_info}>
                <Form.Item label="Tên đăng nhập" required>
                  <Input
                    type="text"
                    size="large"
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Mật khẩu" required>
                  <Input.Password
                    size="large"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Họ và tên" required>
                  <Input
                    type="text"
                    size="large"
                    value={props.fullname}
                    onChange={(e) => props.setFullname(e.target.value)}
                  />
                </Form.Item>
                <Row>
                  <Col span={12}>
                    <Form.Item label="Giới tính" required>
                      <Radio.Group
                        onChange={onChangeRadio}
                        value={props.gender}
                      >
                        <Radio value={0}>Nữ</Radio>
                        <Radio value={1}>Nam</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Ngày sinh" required>
                      <InputDate
                        value={props.birthday}
                        onChange={(e) => props.setBirthday(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Số điện thoại" required>
                  <Input
                    type="text"
                    size="large"
                    value={props.phoneNumber}
                    onChange={(e) => props.setPhoneNumber(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Kích hoạt" required>
                  <Radio.Group
                    onChange={(e) => props.setActive(e.target.value)}
                    value={props.active}
                  >
                    <Radio value={true}>true</Radio>
                    <Radio value={false}>false</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default UsersHandle;
