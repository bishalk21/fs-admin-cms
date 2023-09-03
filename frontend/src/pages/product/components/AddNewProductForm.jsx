import { useDispatch, useSelector } from "react-redux";
import CustomInputField from "../../../components/custom-input-field/CustomInputField";
import { useState } from "react";
import { postNewProductAction } from "../product-reducers/productAction";

const initialState = {
  status: "inactive",
  parentCatId: null,
  name: "",
  sku: "",
  quantity: "",
  price: 0,
  salesPrice: null,
  salesStartDate: null,
  salesEndDate: null,
  description: "",
};

const AddNewProductForm = () => {
  const [form, setForm] = useState(initialState);
  const categories = useSelector((state) => state.category.categories);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    // console.log(files);
    setImages(files);
  };

  const inputFields = [
    {
      name: "name",
      value: form.name,
      label: "Name",
      type: "text",
      placeholder: "Product Name",
      required: true,
    },
    {
      name: "sku",
      value: form.sku,
      label: "SKU",
      type: "number",
      placeholder: "Product's Unique Code",
      required: true,
    },
    {
      name: "quantity",
      value: form.quantity,
      label: "Quantity",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      value: form.price,
      label: "Price",
      type: "number",
      placeholder: "342",
      required: true,
      min: 1,
    },
    {
      name: "salesPrice",
      value: form.salesPrice,
      label: "Sales Price",
      type: "number",
      placeholder: "300",
    },
    {
      name: "salesStartDate",
      value: form.salesStartDate,
      label: "Sales Start Date",
      type: "date",
      placeholder: "15-09-2003",
    },
    {
      name: "salesEndDate",
      value: form.salesEndDate,
      label: "Sales End Date",
      type: "date",
      placeholder: "15-09-2003",
    },
    {
      name: "description",
      value: form.description,
      label: "Description",
      type: "text",
      placeholder: "About Product",
      as: "textarea",
      rows: 10,
      required: true,
    },
    {
      name: "images",
      type: "file",
      accept: "image/*",
      multiple: true,
    },
  ];

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    console.log(name, value);

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    // append images
    images.length &&
      [...images].map((image) => formData.append("images", image));

    dispatch(postNewProductAction(formData));
  };

  return (
    <div className="product pt-4 w-full">
      <h1 className="font-bold text-lg">Add New Product</h1>

      <form
        enctype="multipart/form-data"
        onSubmit={handleOnSubmit}
        className="flex items-center flex-row flex-wrap justify-between max-sm:items-center gap-4 p-2.5 w-full"
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={form.status === "active"}
            className="sr-only peer"
            name="status"
            label="status"
            onChange={handleOnChange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

        <select
          name="parentCatId"
          onChange={handleOnChange}
          className="max-sm:w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm max-sm:text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Assign to Category</option>
          {categories.length > 0 &&
            categories.map(
              (item) =>
                item.parentCatId && (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                )
            )}
        </select>

        {inputFields.map((item, i) => (
          <CustomInputField
            key={i}
            {...item}
            onChange={
              item.name === "images" ? handleOnImageSelect : handleOnChange
            }
          />
        ))}

        <button
          type="submit"
          className="max-md:w-full md:w-auto text-white max-sm:text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewProductForm;
