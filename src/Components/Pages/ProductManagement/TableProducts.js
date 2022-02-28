import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, Menu, Table } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons/lib/icons";
import styles from "./ProductManagement.module.scss";
import {
  MoneyFormat,
  NumberFormat,
} from "../../../Components/Common/formatNumber";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "./../../Modules/actions/products.actions";
import FormatDate from "../../Common/FormatDate";

const TableProducts = ({ editProduct }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const menu = (id) => {
    return (
      <Menu className="management-action">
        <Menu.Item onClick={() => editProduct(id)}>
          <EditOutlined />
          &ensp;Sửa
        </Menu.Item>
        <Menu.Item onClick={() => dispatch(removeProduct(id))}>
          <DeleteOutlined />
          &ensp;Xoá
        </Menu.Item>
      </Menu>
    );
  };

  const dataSource = [];

  for (let i of products) {
    dataSource.push({
      key: i.id,
      product: (
        <div className={styles.products_list_table_product}>
          <img src={i.image} alt="" />
          <div>{i.name}</div>
        </div>
      ),
      price: i.price,
      amount: i.amount,
      inputDate: i.inputDate,
      category: i.category,
      brand: i.brand,
      action: (
        <div>
          <Dropdown overlay={menu(i.id)} placement="bottomRight">
            <MoreOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
          </Dropdown>
        </div>
      ),
    });
  }

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
      className: styles.products_list_table_table_col1,
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      className: styles.products_list_table_table_col2,
      align: "center",
    },
    {
      title: "Hãng",
      dataIndex: "brand",
      key: "brand",
      className: styles.products_list_table_table_col3,
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      className: styles.products_list_table_table_col4,
      align: "center",
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },

      render: (text) => <>{MoneyFormat(text)}</>,
    },
    {
      title: "Số lượng",
      dataIndex: "amount",
      key: "amount",
      className: styles.products_list_table_table_col5,
      align: "center",
      sorter: {
        compare: (a, b) => a.amount - b.amount,
        multiple: 3,
      },
      render: (text) => NumberFormat(text),
    },
    {
      title: "Ngày nhập",
      dataIndex: "inputDate",
      key: "inputDate",
      className: styles.products_list_table_table_col6,
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: styles.products_list_table_table_col7,
      align: "center",
    },
  ];

  return (
    <>
      <div className={styles.products_list_table_search}>
        <Input
          placeholder="Enter your username"
          prefix={<SearchOutlined />}
          size="large"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className={styles.products_list_table_table}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </>
  );
};

export default TableProducts;
