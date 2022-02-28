import { MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../../Asserts/images/logo-color.png";

const Login = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { loginHandle } = props;
  const style = { borderRadius: 25, paddingLeft: 20 };
  const styleBorder = { borderRadius: 25 };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.login}>
      <div>
        <div className={styles.login_logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.login_form}>
          <Form layout="vertical">
            <Form.Item label="Tên đăng nhập" required>
              <Input size="large" style={style} />
            </Form.Item>
            <Form.Item label="Mật khẩu" required>
              <Input.Password size="large" style={style} />
            </Form.Item>
            <div className={styles.login_form_forgot_password}>
              <span onClick={showModal}>Quên mật khẩu ?</span>
            </div>
            <Form.Item>
              <Button
                type="primary"
                style={{ borderRadius: 25 }}
                size="large"
                onClick={loginHandle}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.login_forgotpassword}>
          <Modal
            title="Quên mật khẩu"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
            width={500}
          >
            <div
              className={styles.login_forgotpassword_from}
              style={styleBorder}
            >
              <div className={styles.login_forgotpassword_from_title}>
                <MailOutlined />
                &ensp;Xác thực tài khoản
              </div>
              <div className={styles.login_forgotpassword_group}>
                <Input style={style} placeholder="Tên đăng nhập" size="large" />
              </div>
              <div className={styles.login_forgotpassword_group}>
                <Input style={style} placeholder="Email" size="large" />
                &ensp;&ensp;
                <Button type="primary" size="large" style={styleBorder}>
                  Gửi mã
                </Button>
              </div>
              <div className={styles.login_forgotpassword_group}>
                <Input style={style} size="large" placeholder="Mã xác nhận" />
              </div>
            </div>
            <div className={styles.login_forgotpassword_submit}>
              <Button type="primary" size="large" style={styleBorder}>
                Xác minh
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Login;
