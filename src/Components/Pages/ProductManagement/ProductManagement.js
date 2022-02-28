import { Button, Divider } from "antd";
import React, { useState } from "react";
import Filter from "./Filter";
import styles from "./ProductManagement.module.scss";
import "./ProductManagement.scss";
import TableProducts from "./TableProducts";
import ProductHandle from "./ProductHandle";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
} from "../../Modules/actions/products.actions";
import { v4 as uuidv4 } from "uuid";

const ProductManagement = () => {
  const [valuePrice, setValuePrice] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [inputDate, setInputDate] = useState(
    new Date().toLocaleDateString("fr-CA")
  );
  const [category, setCategory] = useState("Điện thoại");
  const [brand, setBrand] = useState("Apple");
  const [description, setDescription] = useState("");
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setValuePrice(e.target.value);
  };
  const categories = [
    {
      id: 1,
      name: "Điện thoại",
      value: "smartphone",
    },
    {
      id: 2,
      name: "Laptop",
      value: "laptop",
    },
    {
      id: 3,
      name: "Tablet",
      value: "tablet",
    },
    {
      id: 4,
      name: "Tai nghe",
      value: "headphone",
    },
    {
      id: 5,
      name: "Phụ kiện",
      value: "phukien",
    },
  ];
  const brands = [
    {
      id: 1,
      name: "Samsung",
      value: "samsung",
    },
    {
      id: 2,
      name: "Apple",
      value: "apple",
    },
    {
      id: 3,
      name: "Oppo",
      value: "oppo",
    },
    {
      id: 4,
      name: "Huawei",
      value: "huawei",
    },
    {
      id: 5,
      name: "Vivo",
      value: "vivo",
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
    setIsAddProduct(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setPrice("");
    setImage("");
    setAmount("");
    setInputDate(new Date().toLocaleDateString("fr-CA"));
    setCategory("Điện thoại");
    setBrand("Apple");
    setDescription("");
  };
  const newProduct = {
    id: uuidv4(),
    image,
    name,
    price,
    amount,
    inputDate,
    category,
    brand,
    description,
  };
  const addProductHandle = async () => {
    dispatch(addProduct(newProduct));
    handleCancel();
  };

  const updateProductHandle = () => {
    dispatch(updateProduct(id, newProduct));
    handleCancel();
  };
  const editProduct = (id) => {
    const product = products.filter((p) => p.id === id);
    showModal();
    setName(product[0].name);
    setPrice(product[0].price);
    setImage(product[0].image);
    setAmount(product[0].amount);
    setInputDate(product[0].inputDate);
    setCategory(product[0].category);
    setBrand(product[0].brand);
    setDescription(product[0].description);
    setId(product[0].id);
    setIsAddProduct(false);
  };

  return (
    <div className={styles.products}>
      <div className={styles.products_title}>
        <h1>Sản phẩm</h1>
        <div>
          <Button type="primary" size="large" onClick={showModal}>
            Thêm sản phẩm
          </Button>
        </div>
      </div>
      <div className={styles.products_list}>
        <div className={styles.products_list_sortby}>
          <div className={styles.products_list_sortby_title}>
            <span>Lọc</span>
          </div>
          <Divider />
          <Filter
            categories={categories}
            brands={brands}
            valuePrice={valuePrice}
            onChange={onChange}
          />
        </div>
        <div className={styles.products_list_table}>
          <TableProducts editProduct={editProduct} />
        </div>
      </div>
      <div className={styles.products_modal}>
        <ProductHandle
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          addProductHandle={addProductHandle}
          setName={setName}
          setPrice={setPrice}
          setImage={setImage}
          setAmount={setAmount}
          setInputDate={setInputDate}
          setCategory={setCategory}
          setBrand={setBrand}
          setDescription={setDescription}
          name={name}
          price={price}
          amount={amount}
          inputDate={inputDate}
          category={category}
          brand={brand}
          description={description}
          resetForm={resetForm}
          updateProductHandle={updateProductHandle}
          isAddProduct={isAddProduct}
        />
      </div>
    </div>
  );
};

export default ProductManagement;
