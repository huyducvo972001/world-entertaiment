import { Button, Col, DatePicker, Form, Input, Radio, Row } from "antd";
import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [form] = Form.useForm();

  return (
    <div className={styles.profile}>
      <Form form={form} layout="vertical">
        <Row gutter={60}>
          <Col span={6}>
            <div className={styles.profile_avatar}>
              <img
                src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/192249971_207419854539464_7418546197824934565_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-g7PbwK6Wj8AX9ZDdvo&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8wmy_X3JbzEYBZcE4tX-F3NnbHQnqG1SJN5pIcjtX8tA&oe=62373044"
                alt=""
              />
              <Button type="dashed" size="large">
                Chọn ảnh
              </Button>
            </div>
          </Col>
          <Col span={10}>
            <div className={styles.profile_infor}>
              <h1>Hồ sơ</h1>

              <Form.Item
                label="Họ và tên"
                name="name"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item className={styles.profile_infor_group}>
                <Button type="primary" size="large" style={{ width: 100 }}>
                  Lưu
                </Button>
              </Form.Item>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.profile_infor} style={{ marginTop: "50px" }}>
              <Form.Item
                label="Giới tính"
                name="gender"
                className={styles.profile_infor_group}
              >
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={0}>Nữ</Radio>
                  <Radio value={1}>Nam</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Ngày sinh"
                name="birthday"
                className={styles.profile_infor_group}
              >
                <DatePicker style={{ width: "100%" }} size="large" />
              </Form.Item>
              <Form.Item
                label="Địa chỉ"
                name="address"
                className={styles.profile_infor_group}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Active"
                name="active"
                className={styles.profile_infor_group}
              >
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={0}>False</Radio>
                  <Radio value={1}>True</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
