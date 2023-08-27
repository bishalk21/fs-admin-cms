const CustomInputField = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col w-5/12 ">
      <label htmlFor="">{label}</label>
      <input
        className="max-sm:inline max-sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
        required
      />
    </div>
  );
};

export default CustomInputField;