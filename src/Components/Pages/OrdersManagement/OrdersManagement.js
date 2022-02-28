import { SearchOutlined } from "@ant-design/icons";
import { Input, Table } from "antd";
import React from "react";
import styles from "./OrdersManagement.module.scss";
const OrdersManagement = () => {
  const dataSource = [];

  for (var i = 1; i < 20; i++) {
    dataSource.push({
      key: i,
      id: `DH${i}`,
      nameCustomer: "Võ Đức Huy ",
      orderDate: "09-07-2021",
      phoneNumber: "0849064659",
      email: "huyducvo972001@gmail.com",
      address: "Long An, Long Thành, Đồng Nai",
      lastShippingDate: `${i}-07-2021`,
      lastReceiveDate: "15-07-2021",
      status: "Đang giao",
    });
  }

  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
      className: styles.order_manager_table_col1,
      align: "center",
    },
    {
      title: "Người mua",
      dataIndex: "nameCustomer",
      key: "nameCustomer",
      className: styles.order_manager_table_col2,
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "orderDate",
      key: "orderDate",
      className: styles.order_manager_table_col3,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      className: styles.order_manager_table_col4,
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      className: styles.order_manager_table_col5,
      align: "center",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      className: styles.order_manager_table_col6,
      align: "center",
    },
    {
      title: "Ngày vận chuyển",
      dataIndex: "lastShippingDate",
      key: "lastShippingDate",
      className: styles.order_manager_table_col7,
      align: "center",
    },
    {
      title: "Ngày nhận",
      dataIndex: "lastReceiveDate",
      key: "lastReceiveDate",
      className: styles.order_manager_table_col8,
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      className: styles.order_manager_table_col9,
      align: "center",
    },
  ];

  return (
    <div className={styles.order}>
      <div className={styles.order_title}>
        <h1>Đơn hàng</h1>
      </div>
      <div className={styles.order_manager}>
        <div className={styles.order_manager_search}>
          <Input
            placeholder="Enter your username"
            prefix={<SearchOutlined />}
            size="large"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className={styles.order_manager_table}>
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

export default OrdersManagement;
