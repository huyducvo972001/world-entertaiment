import React, { useState } from "react";
import styles from "./BrandsManagement.module.scss";
import "./BrandsManagement.scss";
import { Button, Form, Input, Modal } from "antd";
import TableBrands from "./TableBrands";
import { Upload } from "./../../Common/Upload/Upload";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, updateBrand } from "../../Modules/actions/brands.actions";
import { v4 as uuidv4 } from "uuid";

const BrandsManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const brands = useSelector((state) => state.brands);
  const [isAddBrand, setIsAddBrand] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
    setIsAddBrand(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };

  const newBrand = {
    id: uuidv4(),
    image,
    name,
    slug,
  };

  const resetForm = () => {
    setName("");
    setImage("");
    setSlug("");
  };

  const addProductHandle = async () => {
    dispatch(addBrand(newBrand));
    handleCancel();
  };

  const editProduct = (id) => {
    const brand = brands.filter((b) => b.id === id);
    showModal();
    setSlug(brand[0].slug);
    setName(brand[0].name);
    setImage(brand[0].image);
    setId(brand[0].id);
    setIsAddBrand(false);
  };

  const updateProductHandle = () => {
    dispatch(updateBrand(id, newBrand));
    handleCancel();
  };

  return (
    <div className={styles.brand}>
      <div className={styles.brand_title}>
        <h1>Hãng sản xuất</h1>
        <div>
          <Button type="primary" size="large" onClick={showModal}>
            Thêm hãng sản xuất
          </Button>
        </div>
      </div>
      <div className={styles.brand_manager}>
        <div className={styles.brand_manager_table}>
          <TableBrands editProduct={editProduct} />
        </div>

        <Modal
          title="Quản lý hãng sản xuất"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          className={`brands_modal ${styles.brands_modal_handle}`}
        >
          <div className={styles.brand_manager_handle}>
            <Form layout="vertical">
              <div className={styles.brand_modal_handle_col}>
                <Form.Item label="Tên sản phẩm" required>
                  <Input
                    size="large"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Slug" required>
                  <Input
                    size="large"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                  <Upload height="250px" setImage={setImage} />
                </Form.Item>
                <Form.Item>
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                    }}
                  >
                    {isAddBrand && (
                      <Button
                        type="primary"
                        size="large"
                        onClick={addProductHandle}
                      >
                        Thêm
                      </Button>
                    )}
                    {!isAddBrand && (
                      <Button
                        type="primary"
                        size="large"
                        onClick={updateProductHandle}
                      >
                        Sửa
                      </Button>
                    )}

                    {isAddBrand && (
                      <Button type="primary" size="large" onClick={resetForm}>
                        Mới
                      </Button>
                    )}
                  </div>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BrandsManagement;
