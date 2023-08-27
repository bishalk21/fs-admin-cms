import React from "react";
import AddNewProductForm from "./components/AddNewProductForm";
import ProductTable from "./components/ProductTable";

const ProductManagement = () => {
  return (
    <>
      <AddNewProductForm />
      <ProductTable />
    </>
  );
};

export default ProductManagement;
