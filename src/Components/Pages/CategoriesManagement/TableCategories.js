import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, Menu, Table } from "antd";
import React from "react";
import styles from "./CategoryManagement.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "./../../Modules/actions/categories.actions";

const TableCategories = ({ editProduct }) => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const menu = (id) => (
    <Menu className="management-action">
      <Menu.Item onClick={() => editProduct(id)}>
        <EditOutlined />
        &ensp;&ensp;Sửa
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(removeCategory(id))}>
        <DeleteOutlined />
        &ensp;&ensp;Xoá
      </Menu.Item>
    </Menu>
  );

  const dataSource = [];

  for (let i of categories) {
    dataSource.push({
      key: i.id,
      id: i.id,
      name: i.name,
      slug: i.slug,
      actions: (
        <Dropdown overlay={menu(i.id)} placement="bottomRight">
          <MoreOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Dropdown>
      ),
    });
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      className: styles.category_manager_table_table_col1,
      align: "center",
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      className: styles.category_manager_table_table_col2,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      className: styles.category_manager_table_table_col3,
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "actions",
      key: "actions",
      className: styles.category_manager_table_table_col4,
      align: "center",
    },
  ];

  return (
    <>
      <div className={styles.category_manager_table_search}>
        <Input
          placeholder="Enter your username"
          prefix={<SearchOutlined />}
          size="large"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={styles.category_manager_table_table}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </>
  );
};

export default TableCategories;
