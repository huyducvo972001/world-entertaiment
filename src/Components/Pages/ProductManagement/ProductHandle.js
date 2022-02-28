import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import React from "react";
import styles from "./ProductManagement.module.scss";
import { EditOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Upload } from "../../Common/Upload/Upload";
import InputDate from "../../Common/InputDate/InputDate";

const { Option } = Select;

const ProductHandle = (props) => {
  const {
    isModalVisible,
    handleCancel,
    addProductHandle,
    setName,
    setPrice,
    setImage,
    setAmount,
    setInputDate,
    setCategory,
    setBrand,
    setDescription,
    name,
    price,
    amount,
    inputDate,
    category,
    brand,
    description,
    resetForm,
    updateProductHandle,
    isAddProduct,
  } = props;

  return (
    <Modal
      title="Quản lý sản phẩm"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      className={`products_modal ${styles.products_modal_handle}`}
    >
      <Form layout="vertical" autoComplete="off">
        <Row gutter={30}>
          <Col span={15}>
            <div className={styles.products_modal_handle_col}>
              <Form.Item label="Tên sản phẩm">
                <Input
                  value={name}
                  size="large"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Giá sản phẩm" required>
                <Input
                  value={price}
                  size="large"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Số lượng">
                <Input
                  value={amount}
                  size="large"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Ngày nhập" required>
                <InputDate
                  value={inputDate}
                  onChange={(e) => setInputDate(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input.TextArea
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                {isAddProduct && (
                  <>
                    <Button
                      htmlType="submit"
                      type="primary"
                      onClick={addProductHandle}
                    >
                      <SaveOutlined /> Thêm
                    </Button>
                    <Button type="primary" onClick={resetForm}>
                      <PlusOutlined /> Mới
                    </Button>
                  </>
                )}
                {!isAddProduct && (
                  <Button type="primary" onClick={updateProductHandle}>
                    <EditOutlined /> Sửa
                  </Button>
                )}
              </Form.Item>
            </div>
          </Col>
          <Col span={9}>
            <div
              className={styles.products_modal_handle_col}
              style={{ marginBottom: "25px" }}
            >
              <Form.Item label="Hình ảnh" required>
                <Upload
                  height="250px"
                  setImage={setImage}
                  style={{ with: "100%" }}
                />
              </Form.Item>
            </div>
            <div className={styles.products_modal_handle_col}>
              <Form.Item label="Danh mục" required>
                <Select
                  defaultValue="Điện thoại"
                  value={category}
                  style={{ width: 120 }}
                  size="large"
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  style={{ width: "100%" }}
                  onChange={(e) => setCategory(e)}
                >
                  <Option value="Điện thoại">Điện thoại</Option>
                  <Option value="Laptop">Laptop</Option>
                  <Option value="Tablet">Tablet</Option>
                  <Option value="Phụ kiện">Phụ kiện</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Hãng" required>
                <Select
                  defaultValue="Apple"
                  value={brand}
                  style={{ width: 120 }}
                  size="large"
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  style={{ width: "100%" }}
                  onChange={(e) => setBrand(e)}
                >
                  <Option value="Apple">Apple</Option>
                  <Option value="Samsung">Samsung</Option>
                  <Option value="Oppo">Oppo</Option>
                  <Option value="Xiaomi">Xiaomi</Option>
                </Select>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ProductHandle;
