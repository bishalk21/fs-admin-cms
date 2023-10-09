import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import fewaStoreApi from "../api/fewaStoreApi";
import MainLayout from "../layout/main-layout/MainLayout";
import AddBrand from "../components/brands/AddBrand";
import ListBrands from "../components/brands/ListBrands";

const Brand = () => {
  const [isAddBrand, setIsAddBrand] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);

  const startEditingHandler = () => {
    setIsEdit(true);
  };

  const stopEditingHandler = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    getBrands();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddBrand]);

  const getBrands = async () => {
    try {
      const response = await fewaStoreApi.get("/admin/get-all-brands", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      if (response.status === 200) {
        setBrands(response.data.brands);
        setIsAddBrand(false);
      }
    } catch (error) {
      toast(error.response.message);
    }
  };
  const createBrandHandler = async (formData) => {
    try {
      const response = await fewaStoreApi.post(
        `/admin/create-brand`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        setIsAddBrand(true);
        stopEditingHandler();
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-indigo-600 font-bold text-4xl">Brands</h1>
      </div>
      <div className="w-full shadow-md my-6 ">
        <div className=" px-4 sm:px-10 py-4 md:py-7 rounded-t-lg bg-gray-200 ">
          <div className=" flex  items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl text-indigo-600 lg:text-2xl font-bold leading-normal ">
              Brands
            </p>
            <div>
              <button
                onClick={startEditingHandler}
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-500 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">
                  New Brand
                </p>
              </button>
            </div>
          </div>
        </div>
        {isEdit ? (
          <AddBrand onSave={createBrandHandler} onCancel={stopEditingHandler} />
        ) : (
          <ListBrands data={brands} />
        )}
      </div>
    </MainLayout>
  );
};

export default Brand;
