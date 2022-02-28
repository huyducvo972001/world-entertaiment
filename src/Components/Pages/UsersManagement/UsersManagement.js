import { Button, Dropdown, Input, Menu, Table } from "antd";

import React, { useState } from "react";
import styles from "./UsersManagement.module.scss";
import "./UsersManagement.scss";
import UsersHandle from "./UsersHandle";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { v4 as uuidv4 } from "uuid";
import { addUser, updateUser } from "../../Modules/actions/users.actions";
import { removeUser } from "./../../Modules/actions/users.actions";

const UsersManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddUser, setIsAddUser] = useState(true);
  const users = useSelector((state) => state.users);
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState(true);
  const [birthday, setBirthday] = useState(
    new Date().toLocaleDateString("fr-CA")
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
    setIsAddUser(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };

  const newUser = {
    id: uuidv4(),
    avatar,
    username,
    password,
    fullname,
    gender,
    birthday,
    phoneNumber,
    active,
  };

  const resetForm = () => {
    setAvatar("");
    setUsername("");
    setPassword("");
    setFullname("");
    setGender(true);
    setBirthday(new Date().toLocaleDateString("fr-CA"));
    setPhoneNumber("");
    setActive(true);
  };

  const addProductHandle = async () => {
    dispatch(addUser(newUser));
    handleCancel();
  };

  const updateProductHandle = () => {
    dispatch(updateUser(id, newUser));
    handleCancel();
  };
  const editProduct = (id) => {
    const user = users.filter((p) => p.id === id);
    showModal();
    setAvatar(user[0].avatar);
    setUsername(user[0].username);
    setPassword(user[0].password);
    setFullname(user[0].fullname);
    setGender(user[0].gender);
    setBirthday(user[0].birthday);
    setPhoneNumber(user[0].phoneNumber);
    setActive(user[0].active);
    setId(user[0].id);

    setIsAddUser(false);
  };

  const menu = (id) => (
    <Menu className="management-action">
      <Menu.Item onClick={() => editProduct(id)}>
        <EditOutlined />
        &ensp;&ensp;Sửa
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(removeUser(id))}>
        <DeleteOutlined />
        &ensp;&ensp;Xoá
      </Menu.Item>
    </Menu>
  );

  const dataSource = [];
  for (let i of users) {
    dataSource.push({
      key: i.id,
      avatar: <img src={i.avatar} alt="" />,
      username: i.username,
      password: i.password,
      fullname: i.fullname,
      gender: i.gender ? "Name" : "Nữ",
      birthday: i.birthday,
      phoneNumber: i.phoneNumber,
      active: i.active ? "True" : "False",
      action: (
        <Dropdown overlay={menu(i.id)} placement="bottomRight">
          <MoreOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Dropdown>
      ),
    });
  }
  const columns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
      className: styles.user_manager_table_col0,
      align: "center",
    },
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      key: "username",
      className: styles.user_manager_table_col1,
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
      className: styles.user_manager_table_col2,
      align: "center",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
      className: styles.user_manager_table_col3,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      className: styles.user_manager_table_col4,
      align: "center",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
      className: styles.user_manager_table_col5,
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      className: styles.user_manager_table_col6,
      align: "center",
    },
    {
      title: "Kích hoạt",
      dataIndex: "active",
      key: "active",
      className: styles.user_manager_table_col7,
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: styles.user_manager_table_col8,
      align: "center",
    },
  ];

  return (
    <div className={styles.user}>
      <div className={styles.user_title}>
        <div>
          <h1>Tài khoản</h1>
        </div>
        <div>
          <Button type="primary" size="large" onClick={showModal}>
            Thêm tài khoản
          </Button>
        </div>
      </div>
      <div className={styles.user_manager}>
        <div>
          <UsersHandle
            handleCancel={handleCancel}
            isModalVisible={isModalVisible}
            isAddUser={isAddUser}
            resetForm={resetForm}
            addProductHandle={addProductHandle}
            updateProductHandle={updateProductHandle}
            setAvatar={setAvatar}
            avatar={avatar}
            username={username}
            password={password}
            fullname={fullname}
            gender={gender}
            birthday={birthday}
            phoneNumber={phoneNumber}
            active={active}
            setUsername={setUsername}
            setPassword={setPassword}
            setFullname={setFullname}
            setGender={setGender}
            setBirthday={setBirthday}
            setPhoneNumber={setPhoneNumber}
            setActive={setActive}
          />
        </div>

        <div className={styles.user_manager_table}>
          <div className={styles.user_manager_search}>
            <Input
              placeholder="Enter your username"
              prefix={<SearchOutlined />}
              size="large"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
