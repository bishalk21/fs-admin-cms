import ProductManagement from "../product/ProductManagement";
import CategoryManagement from "../category/CategoryManagement";

const Body = () => {
  return (
    <section>
      <div className="h-full max-w-full flex flex-col gap-4 items-center justify-center p-10">
        <div className="category w-full">
          <h1 className="font-bold text-2xl text-blue-600">
            Category Management
          </h1>
          <CategoryManagement />
        </div>

        <hr className="border w-full border-black" />

        <div className="product w-full">
          <h1 className="font-bold text-2xl text-blue-600">
            Product Management
          </h1>
          <ProductManagement />
        </div>
      </div>
    </section>
  );
};

export default Body;
