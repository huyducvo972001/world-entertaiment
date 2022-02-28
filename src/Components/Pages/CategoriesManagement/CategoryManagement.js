import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import styles from "./CategoryManagement.module.scss";
import "./CategoryManagement.scss";
import TableCategories from "./TableCategories";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  updateCategory,
} from "../../Modules/actions/categories.actions";

const CategoryManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddCategory, setIsAddCategory] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const showModal = () => {
    setIsModalVisible(true);
    setIsAddCategory(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setParentId("");
  };
  const newProduct = {
    name,
    parentId,
  };
  const addCategoryHandle = async () => {
    dispatch(addCategory(newProduct));
    handleCancel();
  };
  const updateProductHandle = () => {
    window.location.reload();
    dispatch(updateCategory(id, newProduct));
    handleCancel();
  };
  const editProduct = (id) => {
    const product = categories.filter((p) => p.id === id);
    showModal();
    setName(product[0].name);
    setId(product[0].id);
    setParentId(product[0].parent);
    setIsAddCategory(false);
  };
  return (
    <div className={styles.category}>
      <div className={styles.category_title}>
        <h1>Danh mục</h1>
        <div>
          <Button type="primary" size="large" onClick={showModal}>
            Thêm danh mục
          </Button>
        </div>
      </div>
      <div className={styles.category_manager}>
        <div className={styles.category_manager_table}>
          <TableCategories editProduct={editProduct} />
        </div>
        <Modal
          title="Quản lý hãng sản xuất"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          className={`categories_modal ${styles.categories_modal_handle}`}
        >
          <div className={styles.category_manager_handle}>
            <Form layout="vertical">
              <div className={styles.category_modal_handle_col}>
                <Form.Item label="Tên sản phẩm" required>
                  <Input
                    size="large"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Parent Id" required>
                  <Input
                    size="large"
                    value={parentId}
                    onChange={(e) => setParentId(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  {isAddCategory && (
                    <Button
                      type="primary"
                      size="large"
                      onClick={addCategoryHandle}
                    >
                      Thêm
                    </Button>
                  )}
                  {!isAddCategory && (
                    <Button
                      type="primary"
                      size="large"
                      onClick={updateProductHandle}
                    >
                      Sửa
                    </Button>
                  )}

                  {isAddCategory && (
                    <Button type="primary" size="large" onClick={resetForm}>
                      Mới
                    </Button>
                  )}
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CategoryManagement;
