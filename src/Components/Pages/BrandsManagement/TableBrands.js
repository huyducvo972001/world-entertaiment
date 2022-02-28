import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, Menu, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BrandsManagement.module.scss";
import { removeBrand } from "./../../Modules/actions/brands.actions";

const TableBrands = ({ editProduct }) => {
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  const menu = (id) => (
    <Menu className="management-action">
      <Menu.Item onClick={() => editProduct(id)}>
        <EditOutlined />
        &ensp;&ensp;Sửa
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(removeBrand(id))}>
        <DeleteOutlined />
        &ensp;&ensp;Xoá
      </Menu.Item>
    </Menu>
  );

  const dataSource = [];

  for (let i of brands) {
    dataSource.push({
      key: i.id,
      id: i.id,
      name: i.name,
      slug: i.slug,
      image: <img src={i.image} alt="" />,
      action: (
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
      className: styles.brand_manager_table_table_col1,
      align: "center",
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      className: styles.brand_manager_table_table_col2,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      className: styles.brand_manager_table_table_col3,
      align: "center",
    },
    {
      title: "Logo",
      dataIndex: "image",
      key: "image",
      className: styles.brand_manager_table_table_col4,
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: styles.brand_manager_table_table_col5,
      align: "center",
    },
  ];

  return (
    <>
      <div className={styles.brand_manager_table_search}>
        <Input
          placeholder="Enter your username"
          prefix={<SearchOutlined />}
          size="large"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={styles.brand_manager_table_table}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </>
  );
};

export default TableBrands;
